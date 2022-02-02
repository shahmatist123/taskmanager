import React from 'react';
import TaskList from "../Tasks/TaskList";
const All = () =>{
    return(
        <div>
            <h1>All</h1>
            <TaskList status='all'/>
        </div>
    )
}
export default All;
