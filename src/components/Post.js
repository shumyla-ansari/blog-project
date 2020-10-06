import React from 'react'

export default function Post({id, dispatch, title, content, author}) {

    function handleDeletePost(){
      dispatch({type: 'POST_DEL', id})
       // props.handleDelete(props.id) 
    }
    return (
      <div>
        <p>{title}</p>
        <p>{content}</p>
        <br />
        <i>Written by <b>{author}</b></i>
        <button onClick={handleDeletePost} type="submit">x</button>
      </div>
    );
}
