import React, { useEffect,useState,useCallback} from 'react';
import ReactFlow, { 
  addEdge, 
  Background,
  Controls, 
  MiniMap,
  useNodesState,
  useEdgesState,
  updateEdge,
  ReactFlowProvider
}from 'react-flow-renderer';
import './AdminPage.css';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
let initialNodes = [
  {id:"A",data:{label:'A',isRootNode:true},position: {x:160,y:80}},
  {id:"B",data:{label:'B',isRootNode:false},position: {x:-128,y:192}},
  {id:"C",data:{label:'C',isRootNode:false},position: {x:400,y:192}},
  {id:"D",data:{label:'D',isRootNode:false},position: {x:144,y:400}},
  {id:"D",data:{label:"D",isRootNode:false},position: {x:144,y:400}},
  {id:"D",data:{label:"D",isRootNode:false},position: {x:144,y:400}},
];
const initialEdges = [
  {id: 299.16019986476374, type: 'smoothstep'},
  { id:263.1081505006261,label: 'Task from A',type: 'smoothstep', source:"A", target:"B"},
  { id:24.975781172734244,label: 'Task from A',type: 'smoothstep', source:"A",target:"C"},
  { id:641.506657481351,label: 'Task from B',type: 'smoothstep', source:"B", target:"D"},
  { id:605.8336763138401,label: 'Task from C',type: 'smoothstep', source:"C", target:"D"},

];
let newInitialNode=[

];
let newInitialEdges=[

];
const WorkFow=()=>{
  //state which manages backend nodes ,edges array
    const [items, setItems, onitemsChange] = useNodesState(initialNodes);
    const [edge, setEdge, onEdgeChange] = useEdgesState(initialEdges);
  //state for creating new workflow
    const [newNode,setNodeNodes,onNodeChange]=useNodesState(newInitialNode);
    const [newEdge,setNewEdge,onNewEdgeChange]=useNodesState(newInitialEdges);
    const [newWorkPlane,setNewWorkPlane]=useState(true);
    const [NodeDataFields,showNodeDataFileds]=useState(false);
  //states for creating Nodes
    const [nodeName,setNodeName]=useState(null);
    const [captureElementClick, setCaptureElementClick] = useState(true);
    const [selectedNode,setSelectedNode]=useState(null);
    const [isDraggable, setIsDraggable] = useState(false);
    const [isConnectable, setIsConnectable] = useState(false);
    const [flowBox,setFlowBox]=useState(false);
  //state to check is node is present in db or not
    const [isPresent,setIsPresent]=useState(null);
  //function that add new nodes and edges when user creating it
    const onNodeClick = (event, node) => {
        setSelectedNode(node);
        console.log(node);
      }
      const onInit=(reactFlowInstance)=>{
        console.log('flow loaded:', reactFlowInstance);
      }
      const onConnect = useCallback(
        (connection) => setEdge((eds) => addEdge(connection, eds)),
        [setEdge]
      );
      const onEdgeUpdate = (oldEdge, newConnection) => setEdge((els) => updateEdge(oldEdge, newConnection, els));
      const onNodeDragStart = (event, node) => console.log('drag start');
      const onNodeDragStop = (event, node) => console.log('drag stop');
      const onChangeWorkFlowPlane=()=>{
        setNewWorkPlane(false);
        setFlowBox(false);
        showNodeDataFileds(true);
    }
  //states for data adding
    const [workFLowName,setWorkFlowName]=useState(null);
    const [workFlowDesc,setWorkFlowDesc]=useState(null);
    const saveWorkFlow=async()=>{
      const workflowNamePresent=await API.graphql({query:queries.getWorkflow,variables:{workflowName:workFLowName}});
      if(workflowNamePresent.data.getWorkflow==null){
        for(var i=0;i<newNode.length;i++){
          let childArray=[];
            newEdge.map((edge)=>{
              if(edge.source===newNode[i].id){
                childArray.push(edge.target);
              }
            })
            const nodeData=await API.graphql({
              query:queries.nodeByNodeandWorkFlowName,
              variables:{
                NodeName:newNode[i].data.label,
                WorkFlowName:{
                  eq:workFLowName
                }
              }
            });
            if(nodeData.data.nodeByNodeandWorkFlowName.items.length==0){
              const workflowDefinitionDetails={
                  workflowdefinitionid:"New Workflow",
                  NodeName: newNode[i].data.label,
                  NextNodeName:childArray,
                  Description: "First Description",
                  WorkFlowName: workFLowName,
                  workflowWorkflowdefinitionsId: workFLowName
              }
              const setNodeDataToBackend=await API.graphql({query:mutations.createWorkflowDefinition,variables:{input:workflowDefinitionDetails}})
              console.log(setNodeDataToBackend.data.createWorkflowDefinition);
            }
            else{
              console.log("Can't add data due to multiple entries");
            }
        }
        const workFlowDetails={
            workflowName:workFLowName,
            WorkFlowJSON:JSON.stringify({newNode,newEdge}),
            WorkFlowDescription:workFlowDesc 
        }
          const addWorkFlowDetails=await API.graphql({query:mutations.createWorkflow,variables:{input:workFlowDetails}})
          console.log(addWorkFlowDetails);
      }
      else{
        console.log("Workflow  exists")
      }
    }
    const [isNodePresent,setIsNodePresent]=useState(false);
    const createNode=()=>{
      console.log(selectedNode);
      if(newNode.length==0){ 
      setNodeNodes([...newNode, {id:nodeName,data:{label:nodeName,isRootNode:true},type:'input',position: {x:0,y:0}}])
      }
      else{
        for(var i=0;i<newNode.length;i++){
          if(nodeName==newNode[i].data.label){
            setIsNodePresent(true);
            console.log("again");
          }
        }
        if(isNodePresent==true){
          setNewEdge([...newEdge,{id:Math.random()*Math.pow(10,16),type:'smoothstep', source:selectedNode.id, target:nodeName}])
          console.log("Edge");
          setIsNodePresent(false);
        }
        else{
          setNodeNodes([...newNode, {id:nodeName,data:{label:nodeName,isRootNode:false},position: {x:100,y:100}}]);
          setNewEdge([...newEdge,{id:Math.random()*Math.pow(10,16),type:'smoothstep', source:selectedNode.id, target:nodeName}])
          console.log("Nodee");
      }
    }    
    }
    const showjson=()=>{
      console.log(JSON.stringify({newNode,newEdge}))
    }
    return(
        <>
           <div>
               <div style={{backgroundColor:"#e0eaff"}}>
                  <div className='admin-page-workflow'>
                    <h1>Super User Mode</h1>
                    <h2>Manage Your WorkFlows</h2>
                    { flowBox ?
                      <div className='workflow-name-container'>
                        <div className='title-input'>
                            <p className='workflow-box'>Name of WorkFlow</p>
                            <input className='worflow-input-field'
                                  onChange={(workflow)=>setWorkFlowName(workflow.target.value)}
                                  placeholder='Please provide a short name to identify the workflow.'
                            />
                        </div>
                        <div className='title-input'>
                            <p className='workflow-box'>Description of WorkFlow</p>
                            <textarea className='worflow-input-field'
                                  onChange={(description)=>setWorkFlowDesc(description.target.value)}
                                  placeholder='Please Provide a Description'
                            />
                        </div>
                        <div className='buttons-container'>
                          <div className='btn' onClick={()=>setFlowBox(false)}>
                            <p className='btn-text'>Cancel</p>
                          </div>
                          <div className='btn' onClick={()=>onChangeWorkFlowPlane()}>
                            <p className='btn-text'>Save</p>
                          </div>
                        </div>
                      </div>:  
                      NodeDataFields?
                      <div className='btn' onClick={()=>alert("Hello")}>
                        <p className='btn-text'>Update</p>
                      </div>:                    
                      <div className='btn' onClick={()=>setFlowBox(true)}>
                        <p className='btn-text'>Create WorkFlow</p>
                      </div>                    
                    }                
                  </div>
                  <div style={{width:'100%',height:'600px',backgroundColor:'#e0eaff'}} className="admin-workflow-container">
                    {
                      NodeDataFields?
                      <div className="main-container" style={{width:'40%',height:'600px'}}>
                          <div className="task-input-div">
                            <p className="text-para">
                                Parent Node:
                            </p>
                            <input className="user-id-field"
                                placeholder="Enter Parent Node Name"
                                onChange={(nodeName)=>setNodeName(nodeName.target.value)}
                            />
                          </div>
                          {/* <div className="task-input-div">
                              <p className="text-para">
                                  Next Node:
                              </p>
                              <input className="user-id-field"
                                  placeholder='Enter Next Node'
                                  onChange={(child)=>setChild(child.target.value)}
                              />
                          </div> */}
                          <div className='button-div'>
                            <p>For Adding child node please select parent from workflow plane</p>
                            <div className="savebutton success" onClick={()=>saveWorkFlow()}><p>Save WorkFlow</p></div>
                            <div className="savebutton success" onClick={()=>createNode()}><p>Add Node</p></div>
                            <div className="savebutton success" onClick={()=>showjson()}><p> Node</p></div>
                          </div>
                      </div>:null
                    } 
                    <ReactFlowProvider >
                      <ReactFlow
                          defaultNodes={newWorkPlane?items:newNode}
                          defaultEdges={newWorkPlane?edge:newEdge}
                          onNodesChange={newWorkPlane?onitemsChange:onNodeChange}
                          onEdgesChange={newWorkPlane?onEdgeChange:onNewEdgeChange}
                          onInit={onInit}
                          onConnect={onConnect}
                          connectionLineStyle={{stroke:"black",strokeWidth:2}}
                          connectionLineType="bezier"
                          snapToGrid={true}
                          onEdgeUpdate={onEdgeUpdate}
                          snapGrid={[16,16]}
                          onNodeClick={captureElementClick ? onNodeClick : undefined}
                          // onNodeDragStart={onNodeDragStart}
                          // onNodeDragStop={onNodeDragStop}
                          nodesConnectable={true}
                          nodesDraggable={true}
                      >
                          <Background gap={20} color="black"/>
                          <MiniMap nodeColor='black'/>
                          <Controls/>
                      </ReactFlow>
                    </ReactFlowProvider>
                  </div>
               </div>
           </div>
        </>
    )
}
export default WorkFow;