import React, {useState} from 'react';
import TaskItem from "./TaskItem";
import AddTask from "../AddTask/AddTask"

const TaskList = (props) => {
    let [taskListState, setTaskList] = useState(1)
    const tasksEdit = (index, status) => {
        setTaskList(taskListState + 1)
    }

    return (
        <div className='tasks-wrapper'>
            <AddTask/>
            <div className='taskList'>
                {

                    global.tasks.map((task, i) => {
                        if (task.status === props.status) {
                            return (
                                <TaskItem key={i} id={i} tasksEdit={tasksEdit} task={task}/>
                            )
                        } else if (props.status === 'all') {
                            return (
                                <TaskItem key={i} id={i} tasksEdit={tasksEdit} task={task}/>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
export default TaskList
