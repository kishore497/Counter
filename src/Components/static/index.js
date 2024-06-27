import React, {useState} from 'react'

const Demo = () =>{
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }


    const submitHandler = (e) => {
        e.preventDefault();
        data.password === data.confirmpassword ? console.log(data) : console.log("Hi")
    }



    return(
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <input type='text' name='name' value={data.name} onChange={changeHandler}/><br/>
                    <input type='email' name='email' value={data.email} onChange={changeHandler}/><br/>
                    <input type='password' name='password' value={data.password} onChange={changeHandler}/><br/>
                    <input type='password' name='confirmpassword' value={data.confirmpassword} onChange={changeHandler}/><br/>
                    <input type='submit' />
                </form>
            </center>
        </div>
    )
}

export default Demo