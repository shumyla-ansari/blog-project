import React, {useState} from 'react'

export default function Postform({dispatch, user, posts, onAdd}) {
    
    const [post, setPost] = useState({
    title: '',
    content: ''
})

function handleChange(evt){
    const { name, value } = evt.target;

setPost(prevNote => {
    return{
        ...prevNote,
        [name]: value
    }
})
}

function submitNote(evt){
    dispatch({ type: 'POST_FORM', title: post.title, content: post.content, author: user })
   // onAdd(post);
    setPost({
        title: "",
        content:""
    })
    evt.preventDefault();
}


    return (
        <div>
            <form>
                <h2>Create Post: </h2>
                Title: <input onChange={handleChange} name="title" type="text" placeholder="title" 
                value={post.title}></input>
                Content: <input onChange={handleChange} name="content"  type="textarea" rows="4" cols="20" placeholder="content" 
                value={post.content}></input>
                <button onClick={submitNote} type="submit">Submit</button>
            </form>
        </div>
    )
}
