/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWorkflow = /* GraphQL */ `
  mutation CreateWorkflow(
    $input: CreateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    createWorkflow(input: $input, condition: $condition) {
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
export const updateWorkflow = /* GraphQL */ `
  mutation UpdateWorkflow(
    $input: UpdateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    updateWorkflow(input: $input, condition: $condition) {
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
export const deleteWorkflow = /* GraphQL */ `
  mutation DeleteWorkflow(
    $input: DeleteWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    deleteWorkflow(input: $input, condition: $condition) {
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
export const createWorkflowDefinition = /* GraphQL */ `
  mutation CreateWorkflowDefinition(
    $input: CreateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    createWorkflowDefinition(input: $input, condition: $condition) {
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
export const updateWorkflowDefinition = /* GraphQL */ `
  mutation UpdateWorkflowDefinition(
    $input: UpdateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    updateWorkflowDefinition(input: $input, condition: $condition) {
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
export const deleteWorkflowDefinition = /* GraphQL */ `
  mutation DeleteWorkflowDefinition(
    $input: DeleteWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    deleteWorkflowDefinition(input: $input, condition: $condition) {
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
