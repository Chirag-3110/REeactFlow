import React,{createFactory, useState} from 'react';
import '../App.css';
const WorkFlowDefinition=(props)=>{
    const [flowBox,showFlowBox]=useState(true);
    const workflowNameArray = [
        { FlowName: "Project",},
        { FlowName: "College",},
        { FlowName: "Company",},
    ];
    const priorityArray = [
        { priorityName: "Low",},
        { priorityName: "Medium",},
        { priorityName: "High",},
    ];
    const [order,setOrder]=useState(null);
    const [dueDate,setDueDate]=useState(null);
    const [flowname,setflowname]=useState(workflowNameArray[0].FlowName);
    const [priority,setproiority]=useState("Low");
    const createWorkFlow=()=>{
        if(order==null || order==null)
            alert("Enter all fields")
        else{
            showFlowBox(false);
            props.onShowPlane();
            console.log(flowname,order,dueDate,priority)
        }            
    }
    return(
        <div>
            <h1>Workflow</h1>
            <button onClick={()=>showFlowBox(true)}>Create order</button> 
            {
                flowBox ?
                <div className='workflow-create-div'>
                    <div className='input-field-div'>
                        <p>Enter Order Number</p>
                        <input 
                            className='workflow-input' 
                            placeholder='Enter Order Number' 
                            type="text"
                            onChange={(order)=>setOrder(order.target.value)}
                        />      
                    </div>     
                    <div className='input-field-div'>
                        <p>Enter WorkFlow Name</p>
                        <select className='workflow-select' value={flowname} onChange={(flowname)=>setflowname(flowname.target.value )}>
                            {workflowNameArray.map((workflowNameArray) => (
                                <option value={workflowNameArray.FlowName}>
                                    {workflowNameArray.FlowName}
                                </option>
                            ))}
                        </select>      
                    </div>                              
                    <div className='input-field-div'>
                        <p>Enter Due Date</p>
                        <input 
                            className='workflow-input' 
                            placeholder='Enter Due Date' 
                            type="text"
                            onChange={(dueDate)=>setDueDate(dueDate.target.value)}
                        />         
                    </div>                              
                    <div className='input-field-div'>
                        <p>Enter Priority</p>
                        <select className='workflow-select' onChange={(priority)=>setproiority(priority.target.value)} value={priority}>
                            {priorityArray.map((priorityArray) => (
                                <option value={priorityArray.priorityName}>
                                    {priorityArray.priorityName}
                                </option>
                            ))}
                        </select>
                    </div>                              
                    <div className='button-divs'>
                        <div className='accept-button' 
                            onClick={()=>showFlowBox(false)} 
                        >
                            <p>Cancel</p>
                        </div>
                        <div className='accept-button'  
                            onClick={()=>createWorkFlow()}
                        >
                            <p>Create Order</p>
                        </div>
                    </div>
                </div>
                :null
            }
        </div>
    )
}
export default WorkFlowDefinition;