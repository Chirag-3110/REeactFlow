/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorkflow = /* GraphQL */ `
  query GetWorkflow($workflowName: String!) {
    getWorkflow(workflowName: $workflowName) {
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
export const listWorkflows = /* GraphQL */ `
  query ListWorkflows(
    $workflowName: String
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkflows(
      workflowName: $workflowName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        workflowName
        WorkFlowJSON
        WorkFlowDescription
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkflowDefinition = /* GraphQL */ `
  query GetWorkflowDefinition($id: ID!) {
    getWorkflowDefinition(id: $id) {
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
export const listWorkflowDefinitions = /* GraphQL */ `
  query ListWorkflowDefinitions(
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflowDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const nodeByNodeandWorkFlowName = /* GraphQL */ `
  query NodeByNodeandWorkFlowName(
    $NodeName: String!
    $WorkFlowName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodeByNodeandWorkFlowName(
      NodeName: $NodeName
      WorkFlowName: $WorkFlowName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
