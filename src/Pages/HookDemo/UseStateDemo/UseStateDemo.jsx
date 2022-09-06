import React, { useState } from 'react'
import Comment from '../UseCallBlackDemo/Comment'

export default function UseStateDemo() {
  const [like,setLike] = useState(1)



  return (
    <div className='container'>
      <div className='card w-25'>
        <img src="https://i.pravatar.cc?u=1" alt="avatar" />
      </div>
      <div className='card-body'>
        <h3>Họ tên: vũ thành đạt</h3>
        <p>tuoi: 18</p>
        <p>like: {like}</p>
        <button className='btn btn-success' onClick={() => {
          setLike(like + 1)

          // setLike((state) => {
          //   return like + 1
          // })

        }}>like</button>
      </div>
      <Comment />
    </div>
  )
}
