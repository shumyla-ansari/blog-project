import React, {useState, useReducer} from 'react';
import '../App.css'
import Postform from './Postform';
import Post from './Post';
import UserBar from './UserBar'


function userReducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.username

    case 'LOGOUT':
      return ''

    default:
      throw new Error()  

  }
}

function postsReducer (state, action) {
  switch (action.type) {
    case 'POST_FORM' :
      const newPost = { title: action.title, content: action.content, author: action.author}
      return [ newPost, ...state ]

      default:
        throw new Error()
  
    }
}
//the userReducer function is defined, 
//and we can move on to defining the Reducer Hook

function App() {

//Here we are removing useStatehook and replacing it with
//useReducer hook.
 //const [ user, setUser ] = useState("");
 const [ user, dispatchUser ] = useReducer(userReducer, '' )
 //initial state value is empty string
 //userReducer is the reducer function, which will take current state
 //and an action.

  //const [posts, setPosts] = useState([]);
 //Now we will define reducer app for posts:
  const [ posts, dispatchPosts ] = useReducer(postsReducer, [])

  function addPost(newPost){
    dispatchPosts( prevPosts => {
      return [...prevPosts, newPost]
    })
  }

  function delPost(id) {
    dispatchPosts(prevPosts => {
      return prevPosts.filter((postItem, index) =>{
        return index !== id;
      })
    }

    )}
  
  return (
    <div>
       <UserBar user={user} dispatch={dispatchUser} /> 
  
     {user &&  <Postform 
     user={user}
     posts={posts}
      onAdd={addPost}
      dispatch={dispatchPosts} />}

      {posts.map((postItem, index) => {
        return(
          <Post
          key = {index}
          id= {index}
          title= {postItem.title}
          content= {postItem.content}
          handleDelete ={delPost}
          author={user}/>
        )
      })}
     
    
    </div>
  );
}

export default App;
