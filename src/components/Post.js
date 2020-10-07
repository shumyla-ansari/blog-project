import React, { useContext } from 'react'
import { ThemeContext } from './context'

export default function Post({id, dispatch, title, content, author}) {

  const { secondaryColor } = useContext(ThemeContext)

    function handleDeletePost(){
      dispatch({type: 'POST_DEL', id})
       // props.handleDelete(props.id) 
    }
    return (
      <div>
        <h3 style={{ color : secondaryColor }}>{title}</h3>
        <p>{content}</p>
        <br />
        <i>Written by <b>{author}</b></i>
        <button onClick={handleDeletePost} type="submit">x</button>
      </div>
    );
}
