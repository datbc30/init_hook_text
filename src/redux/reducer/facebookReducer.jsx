import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment:[
        {name:'dat-vip',comment:'123'},
        {name:'hanh-vip',comment:'asdasdasd'}
    ]
}

const facebookReducer = createSlice({
  name: 'facebookReducer',
  initialState,
  reducers: {
        addComment: (state, action) => {
            console.log(action);
            //b1:lấy dữ liệu action gửi lênlên
            const useComment = action.payload
            //b2: cập nhật state 
            state.arrComment.push({...useComment})
        }
  }
});

export const {addComment} = facebookReducer.actions

export default facebookReducer.reducer


//----------------action----------------