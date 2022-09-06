import React, { useState } from 'react'
import Comment from './Comment';

export default function UseCallBackDemo() {

    const [like,setLike] = useState(1)

  return (
    <div className='container'>
        <div className='card w-25'>
            <img src="https://i.pravatar.cc?u=1" alt="..." />
            <div className='card-body'>
                <p>like: {like} <i class="fa fa-heart" aria-hidden="true"></i></p>
                <p></p>
                <button className='btn btn-success' onClick={()=> {
                    setLike(like + 1)
                    console.log(123);
                }}>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <Comment like={like}/>
    </div>
  )
}
