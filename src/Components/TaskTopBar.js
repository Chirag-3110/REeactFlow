import React from 'react'
import '../App.css';
const TaskTopBar=()=>{
    return(
        <>
            <div className='top-bar-container'>
                <h2>Please update the details of the tasks</h2>
                <div className='title-pair-div'>
                    <div className='about-title'>
                        <p className='detail-title'>Order Number:</p>
                        <h3>102542</h3>
                    </div>
                    <div className='about-title'>
                        <p className='detail-title'>WorkFlowName:</p>
                        <h3>Project</h3>
                    </div> 
                </div>
                <div className='title-pair-div'>
                    <div className='about-title'>
                        <p className='detail-title'>Priority:</p>
                        <h3>Medium</h3>
                    </div>
                    <div className='about-title'>
                        <p className='detail-title'>Due Date:</p>
                        <h3>05/02/2022</h3>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default TaskTopBar;