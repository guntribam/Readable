export const GET_POSTS = "GET_POSTS"
export const FETCH_POSTS = "FETCH_POSTS"

export const fetchPosts = () => ({type: FETCH_POSTS})
export const getPosts = (posts) => ({type: GET_POSTS, posts})


