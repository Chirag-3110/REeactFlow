import react ,{useEffect, useState} from 'react'
import './App.css'
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
function App() {    
    const workflowDetails={
      workflowName: "project",
      WorkFlowJSON: "{\"a\":1, \"b\":3, \"string\": 234}",
      WorkFlowDescription: "new project", 
      SaveAsDraft: false,
      CreatedBy: "chirag tak",
      OwnedBy: "chirag tak"
    }
    const workflowdefinition={
      workflowdefinitionid: "first definition",
      NodeName: "Task 1",
      NextNodeName: "[Task 2,Task 3]",
      Description: "Hello new definition",
      isRootNode: true,
      WorkFlowName: "project",
      id: "4ww4-45qw-qw1w-45wq",
      workflowWorkflowdefinitionsId: "project"
    }
    const updateWorkflowDetails={
      workflowName: "project",
      SaveAsDraft: true,
    }
    const updateWorkflowDefinition={
      id: "4ww4-45qw-qw1w-45wq",
      NodeName: "Task 2",
    }
    const addWorkFlow=async()=>{
      try {
        const workFlowData=await API.graphql({query:mutations.createWorkflow,variables:{input:workflowDetails}});
        console.log(workFlowData);
      } catch (error) {
        console.log("error is ",error);
      }
    }
    const updateWorkflow=async()=>{
      try {
        const updatedData=await API.graphql({query:mutations.updateWorkflow,variables:{input:updateWorkflowDetails}});
        console.log(updatedData);
      } catch (error) {
        console.log("Error is ",error);
      }
    }
    const deletWorkFlow=async()=>{
      try {
        const deletedItem=await API.graphql({query:mutations.deleteWorkflow,variables:{workflowName: "project"}})
        console.log(deletedItem);
      } catch (error) {
        console.log("Error is ",error);
      }
    }
    const addWorkFlowDefinition=async()=>{
      try {
        const workFlowDefinitionData=await API.graphql({query:mutations.createWorkflowDefinition,variables:{input:workflowdefinition}});
        console.log(workFlowDefinitionData);
      } catch (error) {
        console.log("Error is ",error);
      }
    }
    const updatedefiniton=async()=>{
      try {
        const updateWorkFlowDefinition=await API.graphql({query:mutations.updateWorkflowDefinition,variables:{input:updateWorkflowDefinition}});
        console.log(updateWorkFlowDefinition);
      } catch (error) {
        console.log("Error is ",error);
      }
    }
    const deleteDefinition=async()=>{
      try {
        const deleteWorkFlowDefinition=await API.graphql({query:mutations.deleteWorkflowDefinition,variables:{id: "4ww4-45qw-qw1w-45wq"}});
        console.log(deleteWorkFlowDefinition);
      } catch (error) {
        console.log("Error is ",error);
      }
    }
    const listWorkLFlow=async()=>{
      try {
        const list=await API.graphql({query:queries.listWorkflows});
        console.log(list);
      } catch (error) {
        console.log("error is ",error);
      }
    }
    const listDefintions=async()=>{
      try {
        const listDefintion=await API.graphql({query:queries.listWorkflowDefinitions});
        console.log(listDefintion);
      } catch (error) {
        console.log("error is ",error);
      }
    }
      return(
        <div className='container'>
          <button onClick={()=>addWorkFlow()}>Create workflow</button>
          <button onClick={()=>deletWorkFlow()}>delete workflow</button>
          <button onClick={()=>updateWorkflow()}>updated workflow</button>
          <button onClick={()=>listWorkLFlow()}>list workflow</button>
          <button onClick={()=>addWorkFlowDefinition()}>Create workflow Definition</button>
          <button onClick={()=>updatedefiniton()}>update workflow Definition</button>
          <button onClick={()=>deleteDefinition()}>delete workflow Definition</button>
          <button onClick={()=>listDefintions()}>list workflow Definition</button>
        </div>
      )
}

export default App;
