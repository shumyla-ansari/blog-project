import React, {useState} from 'react';
import '../App.css'
import Register from './Register'
import Login from './Logout'
import Logout from './Login';
import Postform from './Postform';
import Post from './Post';
import UserBar from './UserBar'


function useReducer (state, action) {
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
//the userReducer function is defined, 
//and we can move on to defining the Reducer Hook

function App() {

 const [ user, setUser ] = useState("");
  const [posts, setPosts] = useState([]);
 

  function addPost(newPost){
    setPosts( prevPosts => {
      return [...prevPosts, newPost]
    })
  }

  function delPost(id) {
    setPosts(prevPosts => {
      return prevPosts.filter((postItem, index) =>{
        return index !== id;
      })
    }

    )}
  
  return (
    <div>
       <UserBar user={user} setUser={setUser} /> 
  
     {user &&  <Postform 
     user={user}
      onAdd={addPost} />}

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
