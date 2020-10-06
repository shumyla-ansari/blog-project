function userReducer (state, action) {
    switch (action.type) {
      case 'LOGIN':
      case 'REGISTER':
        return action.username
  
      case 'LOGOUT':
        return ''
  
      default:
        return state 
  
    }
  }
  
  function postsReducer (state, action) {
    switch (action.type) {
      case 'POST_FORM' :
        const newPost = { title: action.title, content: action.content, author: action.author}
        return [ newPost, ...state ]

      case 'POST_DEL'  :
          //const prevPosts = [{id: action.id}]
              return state.filter(
                  (prevItem, index, id) => { return index !== action.id
              })
            

        default:
          return state
    
      }
  }

  export default function appReducer (state, action) {
      return{
          user: userReducer(state.user, action),
          posts: postsReducer(state.posts, action)
      }
  }