import React, { useReducer, useEffect, useState} from 'react';
import '../App.css'
import Postform from './Postform';
import Post from './Post';
import UserBar from './UserBar'
import appReducer from './Reducers'
import Header from './Header'
import ChangeTheme from './ChangeTheme'
import { ThemeContext, StateContext } from './context'



//the userReducer function is defined in Reducers.js now
//and we can move on to defining the Reducer Hook

function App() {

  const [ theme, setTheme ] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

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

  // function delPost(id) {
  //   dispatch(prevPosts => {
  //     return prevPosts.filter((postItem, index) =>{
  //       return index !== id;
  //     })
  //   }

    
  
  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={ theme }>
          <Header text="React Hook Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br />
          <UserBar />
          {user && <Postform />}
          {posts.map((postItem, index) => {
            return (
              <div>
                <Post
                  key={index}
                  id={index}
                  title={postItem.title}
                  content={postItem.content}
                />
                <hr />
              </div>
            );
          })}
        </ThemeContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
