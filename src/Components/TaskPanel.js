import React from "react";
import App from "../App";
import '../App.css';
const TaskPanel=()=>{
    return(
        <>
            <div className="main-container" style={{width:'40%',height:'600px'}}>
                <div className="task-input-div">
                    <p className="text-para">
                        Task Assigned To:
                    </p>
                    <input className="user-id-field"
                        placeholder="Enter assignie User ID"
                    />
                </div>
                <div className="task-input-div">
                    <p className="text-para">
                        Task Name:
                    </p>
                    <input className="user-id-field"
                        placeholder="Enter Task Name"
                    />
                </div>
                <div className="task-input-div">
                    <p className="text-para">
                        Task Description:
                    </p>
                    <input className="user-id-field"
                        placeholder="Enter Task Description"
                    />
                </div>
                <div className="task-input-div">
                    <p className="text-para">
                        Tentative days Needed:
                    </p>
                    <input className="user-id-field"
                        placeholder="Enter Days"
                    />
                </div>
            </div>
        </>
    )
}
export default TaskPanel;