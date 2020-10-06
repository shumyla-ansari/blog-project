import React, { useReducer, useEffect} from 'react';
import '../App.css'
import Postform from './Postform';
import Post from './Post';
import UserBar from './UserBar'
import appReducer from './Reducers'



//the userReducer function is defined in Reducers.js now
//and we can move on to defining the Reducer Hook

function App() {


  const [ state, dispatch ] = useReducer(appReducer, {user: '', posts: [] })

  //we extract the user and posts values from our state object, using destructuring:
  const { user, posts } = state

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`
    }
    else {
      document.title = "React Hooks Blog"
    }
  }, [user])

//Here we are removing useStatehook and replacing it with
//useReducer hook.
 //const [ user, setUser ] = useState("");
// const [ user, dispatchUser ] = useReducer(userReducer, '' )
 //initial state value is empty string
 //userReducer is the reducer function, which will take current state
 //and an action.

  //const [posts, setPosts] = useState([]);
 //Now we will define reducer app for posts:
  //const [ posts, dispatchPosts ] = useReducer(postsReducer, [])

  // function addPost(newPost){
  //   dispatch( prevPosts => {
  //     return [...prevPosts, newPost]
  //   })
  // }

  function delPost(id) {
    dispatch(prevPosts => {
      return prevPosts.filter((postItem, index) =>{
        return index !== id;
      })
    }

    )}
  
  return (
    <div>
       <UserBar user={user} dispatch={dispatch} /> 
  
     {user &&  <Postform 
     user={user}
     posts={posts}
      //onAdd={addPost}
      dispatch={dispatch} />}

      {posts.map((postItem, index) => {
        return(
          <Post
          key = {index}
          id= {index}
          title= {postItem.title}
          content= {postItem.content}
          dispatch ={dispatch}
          author={user}/>
        )
      })}
     
    
    </div>
  );
}

export default App;
