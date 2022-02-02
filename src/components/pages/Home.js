import React from 'react';
import TaskList from "../Tasks/TaskList";
const Home = () =>{
    return(
        <div>
            <h1>Home</h1>
            <TaskList status='active'/>
        </div>
    )
}
export default Home;
