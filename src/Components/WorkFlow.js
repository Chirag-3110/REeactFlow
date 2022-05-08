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
const WorkFow=()=>{
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
    const [workFlowBox,showWorkFlowBox]=useState(false);
    const [flowBox,setFlowBox]=useState(false);
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
        <>
           <div>
                <div className='admin-page-workflow'>
                  <h1>Super User Mode</h1>
                  <h2>Manage Your WorkFlows</h2>
                  { flowBox ?
                    <div className='workflow-name-container'>
                      <div className='title-input'>
                          <p className='workflow-box'>Name of WorkFlow</p>
                          <input className='worflow-input-field'
                                placeholder='Please provide a short name to identify the workflow.'
                          />
                      </div>
                      <div className='title-input'>
                          <p className='workflow-box'>Description of WorkFlow</p>
                          <textarea className='worflow-input-field'
                                placeholder='Please Provide a Description'
                          />
                      </div>
                      <div className='buttons-container'>
                        <div className='btn' onClick={()=>setFlowBox(false)}>
                          <p className='btn-text'>Cancel</p>
                        </div>
                        <div className='btn' >
                          <p className='btn-text'>Save</p>
                        </div>
                      </div>
                    </div>:  
                  <div className='btn' onClick={()=>setFlowBox(true)}>
                    <p className='btn-text'>Create WorkFlow</p>
                  </div>
                  }                
                </div>
                <div style={{width:'100%',height:'600px',backgroundColor:'#e0eaff'}}>
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
                        // onNodeDragStart={onNodeDragStart}
                        // onNodeDragStop={onNodeDragStop}
                        nodesConnectable={false}
                        nodesDraggable={true}
                    >
                        <Background gap={20} color="black"/>
                        <MiniMap nodeColor='black'/>
                        <Controls/>
                    </ReactFlow>
                </ReactFlowProvider>
                </div>
           </div>
        </>
    )
}
export default WorkFow;