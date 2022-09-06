import React, { useRef, useState } from 'react'

export default function UseRefDemo(pprops) {

    // const [useLogin,setUseLogin] = useState({
    //     useName:'',
    //     password:''
    // })

    const useLoginRef = useRef({
        useName:'',
        password:''
    })

    // console.log(useLogin);
    const handleChange = (e) => {
        let {id,value} = e.target
        useLoginRef.current[id] = value
        // setUseLogin({
        //     ...useLogin,
        //     [id]:value
        // })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(123);
        console.log(useLoginRef.current);
    } 

  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>use Ref</h3>
        <div className='form-group'>
            <p>use name</p>
            <input type="text" name="name" id="name"  className='form-control' onInput={handleChange}/>
        </div>
        <div className='form-group'>
            <p>password</p>
            <input type="text" name="password" id="password"  className='form-control' onInput={handleChange}/>
        </div>
        <div className='form-group'>
            <button className='btn btn-success' type='submit'>move</button>
        </div>
    </form>
  )
}
