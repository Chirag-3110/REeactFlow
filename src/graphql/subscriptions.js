/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkflow = /* GraphQL */ `
  subscription OnCreateWorkflow {
    onCreateWorkflow {
      workflowName
      workflowdefinitions {
        nextToken
      }
      WorkFlowJSON
      WorkFlowDescription
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWorkflow = /* GraphQL */ `
  subscription OnUpdateWorkflow {
    onUpdateWorkflow {
      workflowName
      workflowdefinitions {
        nextToken
      }
      WorkFlowJSON
      WorkFlowDescription
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWorkflow = /* GraphQL */ `
  subscription OnDeleteWorkflow {
    onDeleteWorkflow {
      workflowName
      workflowdefinitions {
        nextToken
      }
      WorkFlowJSON
      WorkFlowDescription
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkflowDefinition = /* GraphQL */ `
  subscription OnCreateWorkflowDefinition {
    onCreateWorkflowDefinition {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      WorkFlowName
      id
      createdAt
      updatedAt
      workflowWorkflowdefinitionsId
    }
  }
`;
export const onUpdateWorkflowDefinition = /* GraphQL */ `
  subscription OnUpdateWorkflowDefinition {
    onUpdateWorkflowDefinition {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      WorkFlowName
      id
      createdAt
      updatedAt
      workflowWorkflowdefinitionsId
    }
  }
`;
export const onDeleteWorkflowDefinition = /* GraphQL */ `
  subscription OnDeleteWorkflowDefinition {
    onDeleteWorkflowDefinition {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      WorkFlowName
      id
      createdAt
      updatedAt
      workflowWorkflowdefinitionsId
    }
  }
`;
