
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
let initialNodes = [
  {id:"A",data:{label:'A'},position: {x:160,y:80}},
  {id:"B",data:{label:'B'},position: {x:-128,y:192}},
  {id:"C",data:{label:'C'},position: {x:400,y:192}},
  {id:"D",data:{label:'D'},position: {x:144,y:400}},
  {id:"D",data:{label:"D"},position: {x:144,y:400}},
  {id:"D",data:{label:"D"},position: {x:144,y:400}},
];
const initialEdges = [
  {id: 299.16019986476374, type: 'smoothstep'},
  { id:263.1081505006261,label: 'Task from A',type: 'smoothstep', source:"A", target:"B"},
  { id:24.975781172734244,label: 'Task from A',type: 'smoothstep', source:"A",target:"C"},
  { id:641.506657481351,label: 'Task from B',type: 'smoothstep', source:"B", target:"D"},
  { id:605.8336763138401,label: 'Task from C',type: 'smoothstep', source:"C", target:"D"},

];
const Node=()=>{
    const [items, setItems, onitemsChange] = useNodesState(initialNodes);
    const [edge, setEdge, onEdgeChange] = useEdgesState(initialEdges);
    const [taskname,settaskName]=useState('');
    const [taskdesc,settaskDesc]=useState('');
    const [responsibleUser,setResponsibleUser]=useState('');
    const [nextUser,setNextUser]=useState('');
    const [days,setDays]=useState('');
    const [captureElementClick, setCaptureElementClick] = useState(true);
    const [selectedNode,setSelectedNode]=useState([]);
    const [isDraggable, setIsDraggable] = useState(false);
    const [isConnectable, setIsConnectable] = useState(false);
    const change=()=>{
      let nodeIndex = items.findIndex(item=>item.id==selectedNode.id);
      // console.log(nodeIndex);
      // setItems((nds) =>
      //   nds.map((node,index) => {
      //     if (node.id === selectedNode.id) {
      //       node.data = {label: taskname};
      //     }
      //     return node;
      //   })
      // );
      console.log(taskname,taskdesc,nextUser,days)
      console.log(selectedNode.id);
    }
    const createNode=()=>{
      // for(var i=0;i<initialNodes.length;i++){
      //   if(nextUser==initialNodes[i].id){
      //     {
      //       edge.length==0 ?
      //       setEdge([...edge,{ id:Math.random()*1000,type: 'smoothstep'}]) :
      //       setEdge([...edge,{ id:Math.random()*1000,label: 'Task from '+nextUser,type: 'smoothstep', source:responsibleUser, target:nextUser}]);
      //     }
      //     break;
      //   }
      // }
      {
        items.length==0 ?
        setItems([...items, {id:'random',data:{label:taskname},position: {x:0,y:0}}]) :
        setItems([...items, {id:'random',data:{label:taskname},position: {x:0,y:0}}]);
      }
      {
        edge.length==0 ?
        setEdge([...edge,{ id:Math.random()*Math.pow(10,16),type: 'smoothstep'}]) :
        setEdge([...edge,{ id:Math.random()*Math.pow(10,16),label: 'Task from '+responsibleUser,type: 'smoothstep', source:'D', target:'random'}]);
      }
      console.log("Edge array",edge);
      console.log("item array",items);
    }
    const print=()=>{
      console.log(items);
      console.log(edge);
      // console.log(selectedNode);
    }
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
    return(
           <div className='flow-container'>
              <div className="main-container" style={{width:'40%',height:'600px'}}>
                  <div className="task-input-div">
                      <p className="text-para">
                          Task Assigned To:
                      </p>
                      <input className="user-id-field"
                          placeholder="Enter assignie User ID"
                          onChange={(nextUserID)=>setNextUser(nextUserID.target.value)}
                      />
                  </div>
                  <div className="task-input-div">
                      <p className="text-para">
                          Task Name:
                      </p>
                      <input className="user-id-field"
                          placeholder="Enter Task Name"
                          onChange={(taskname)=>settaskName(taskname.target.value)}
                      />
                  </div>
                  <div className="task-input-div">
                      <p className="text-para">
                          Task Description:
                      </p>
                      <input className="user-id-field"
                          placeholder="Enter Task Description"
                          onChange={(taskDesc)=>settaskDesc(taskDesc.target.value)}
                      />
                  </div>
                  <div className="task-input-div">
                      <p className="text-para">
                          Tentative days Needed:
                      </p>
                      <input className="user-id-field"
                          placeholder="Enter Days"
                          onChange={(days)=>setDays(days.target.value)}
                      />
                  </div>
                  <div>
                  <div className='button-divs'>
                      <div className='accept-button' 
                        onClick={()=>createNode()}
                      >
                          <p>Save</p>
                      </div>
                      <div className='accept-button'  
                      onClick={()=>print()}
                      >
                          <p>Finish</p>
                      </div>
                      </div>
                  </div>
              </div> 
             <div style={{width:'60%',height:'600px',backgroundColor:'#e0eaff'}}>
              <ReactFlowProvider >
                  <ReactFlow
                      // style={{width:'50%',height:500,backgroundColor:'#e0eaff'}}
                      defaultNodes={items}
                      defaultEdges={edge}
                      onNodesChange={onitemsChange}
                      onEdgesChange={onEdgeChange}
                      onInit={onInit}
                      onConnect={onConnect}
                      connectionLineStyle={{stroke:"black",strokeWidth:2}}
                      connectionLineType="bezier"
                      snapToGrid={true}
                      onEdgeUpdate={onEdgeUpdate}
                      snapGrid={[16,16]}
                      onNodeClick={captureElementClick ? onNodeClick : undefined}
                      onNodeDragStart={onNodeDragStart}
                      onNodeDragStop={onNodeDragStop}
                      nodesConnectable={false}
                      nodesDraggable={false}
                  >
                    {/* <Background gap={20} color="black"/> */}
                    <MiniMap nodeColor='black'/>
                    <Controls/>
                  </ReactFlow>
              </ReactFlowProvider>
             </div>
      </div>

    )
}
export default Node;