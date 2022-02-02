import React, {useState} from 'react';

const TaskItem = (props) => {

    let taskStatus = props.task.status
    let statusColor = {
            color: taskStatus === 'active' ? '#000' : (taskStatus === 'deleted' ? 'red' : '#0eff00')
        },
        borderStyle = {
            'borderColor': taskStatus === 'active' ? '#000' : (taskStatus === 'deleted' ? 'red' : '#0eff00'),
        }
    let [task, setTask] = useState(props.task)
    return (
        <div style={borderStyle} className='taskItem'>
            <div className="taskItemHeader">
                <h2>{props.task.title}</h2>
                <span style={statusColor} className='taskStatus'>{taskStatus}</span>
            </div>
            <p>{props.task.text}</p>
            <div className="taskBtns">
                <button onClick={() => {
                    if (task.status !== 'complied') {
                        props.tasksEdit(props.id,'complied')
                        setTask(task.status = 'complied')
                    }
                }}>
                    Accept
                </button>
                <button onClick={() => {
                    if (task.status !== 'deleted') {
                        props.tasksEdit(props.id,'deleted')
                        setTask(task.status = 'deleted')
                    }
                }}>
                    Delete
                </button>
            </div>
        </div>
    )
}
export default TaskItem
