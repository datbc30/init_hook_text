import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../../redux/reducer/facebookReducer';

export default function DemoFacebookApp(props) {

    const {arrComment} = useSelector(state => state.facebookReducer)
    console.log(arrComment);
    const useComment = useRef({name:'',comment:''})
    const dispatch = useDispatch()

    const renderComment = () => {
        return arrComment.map((prod,index) => {
               return <div className='row m-2' key={index}>
                    <div className='col-2'>
                        <img src={`https://i.pravatar.cc?u=${prod.name}`} alt="..." className='w-100' />
                    </div>
                    <div className='col-10'>
                        <h3>{prod.name}</h3>
                        <p>{prod.comment}</p>
                    </div>
                </div>
            
        })
    }

    const handleChangeInput = (e) => {
        //lấy ra id,value của thẻ 
        const {id,value} = e.target
        useComment.current[id] = value
        console.log(useComment.current);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //đưa dữ liệu lên redux 
        //dùng action creater của redux
        const action = addComment(useComment.current)
        dispatch(action)

    }

  return (
    <div className='container'>
        <h3>FACEBOOK APP</h3>
        <div className='card'>
            <div className='card-header'>
                {renderComment()}
            </div>
            <div className='card-body'>
                <form className='frm' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <p>name</p>
                        <input type="text" className='form-control' id='name' onInput={handleChangeInput} />
                    </div>
                    <div className='form-group'>
                        <p>content</p>
                        <input type="text" className='form-control' id='comment' onInput={handleChangeInput}/>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success'>create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
