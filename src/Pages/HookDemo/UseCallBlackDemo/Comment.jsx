import React, { memo } from "react";

function Comment(props) {

    console.log('comment');

  return (
    <div className="mt-2">
        <span>ban da tha {props.like} <i class="fa fa-heart" aria-hidden="true"></i></span>
      <textarea></textarea> <br />
      <button>Gửi</button>
    </div>
  );
}

export default memo(Comment)
