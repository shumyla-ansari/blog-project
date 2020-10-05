import React, {useState} from 'react';
import '../App.css'
import Register from './Register'
import Login from './Login'
import Logout from './Logout';
import Postform from './Postform';
import Post from './Post';
import UserBar from './UserBar'



function App() {

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
  
      <Postform onAdd={addPost} />
      {posts.map((postItem, index) => {
        return(
          <Post
          key = {index}
          id= {index}
          title= {postItem.title}
          content= {postItem.content}
          author="Shumyla" 
          handleDelete ={delPost}/>
        )
      })}
     
    
    </div>
  );
}

export default App;
