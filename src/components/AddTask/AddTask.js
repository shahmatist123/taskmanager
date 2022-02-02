import React from 'react'

import '../../global'


const AddTask = () => {

    return (
            <div className="add-task">
                <form>
                    <input type="text" className='add-task__header' placeholder='Header'/>
                    <textarea placeholder='Text' className='add-task__text' />
                    <input type="submit" className='add-task__push' value='Push' />
                </form>
            </div>
    )
}
export default AddTask
