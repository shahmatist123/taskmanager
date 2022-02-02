import React from 'react';
import TaskList from "../Tasks/TaskList";
const Deleted = () =>{
    return(
        <div>
            <h1>Deleted</h1>
            <TaskList status='deleted'/>
        </div>
    )
}
export default Deleted;
