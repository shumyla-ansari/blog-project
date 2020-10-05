import React from 'react'

export default function Post(props) {

    function handleDeletePost(){
        props.handleDelete(props.id) 
    }
    return (
      <div>
        <p>{props.title}</p>
        <p>{props.content}</p>
        <button onClick={handleDeletePost} type="submit">x</button>
      </div>
    );
}
