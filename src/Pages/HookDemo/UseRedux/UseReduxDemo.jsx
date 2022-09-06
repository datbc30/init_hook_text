import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeNumber } from '../../../redux/reducer/numberReducer';

export default function UseReduxDemo() {

    const number = useSelector((state)=>state.number)

    const dispatch = useDispatch()

    console.log(number);
  return (
    <div className='container'>
        <h3> {number} </h3>
        <button className='btn btn-danger' onClick={() => {
            // const action = {
            //     type:'CHANGE_NUMBER',
            //     payload:number +1
            // }
            const action = changeNumber(number + 1)
            console.log(action);
            dispatch(action)
        }}>+</button>
    </div>
  )
}
