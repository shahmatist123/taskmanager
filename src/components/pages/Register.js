import React, {useState} from 'react';
import {useHttp} from '../../hooks/http.hook'

const Register = () => {
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const {loading, error, request} = useHttp()
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const registerHandler = async () => {
        try {
            const data = await request('/api/register', 'POST', {...form})
        } catch (e) {

        }
    }
    return (
        <div className="register add-task ">
            <input type="text" onChange={changeHandler} className='add-task__header' name='email' value={form.email} placeholder='Email'/>
            <input type="text" onChange={changeHandler} className='add-task__header' name='password' value={form.password}  placeholder='Password'/>

            <input type="submit" onClick={registerHandler} className='add-task__push' value='Push'/>
        </div>


    )
}
export default Register
