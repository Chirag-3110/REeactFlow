import react ,{useEffect, useState} from 'react'
import './App.css'
import Node from './Components/NodeComponent';
import WorkFlowDefinition from './Components/WorkFlowDefinition';
import TaskPanel from './Components/TaskPanel';
import TaskTopBar from './Components/TaskTopBar';
import WorkFow from './Components/WorkFlow';
function App() {    
        return(
          <div className='container'>
            {/* <TaskTopBar/> */}
              {/* <WorkFlowDefinition  /> */}
            {/* <Node/> */}
            <WorkFow/>
          </div>
        )
}

export default App;
