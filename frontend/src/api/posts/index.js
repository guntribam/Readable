export const getPostsServer = () =>
    masterFetch('http://localhost:3001/posts', {headers: {Authorization: 'authorized'}})


export const createPostServer = (post) =>
    masterFetch('http://localhost:3001/posts',
        {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {'Content-Type': 'application/json', 'Authorization': 'authorized'}
        }
    );


export const updatePostServer = (post) =>
    masterFetch(`http://localhost:3001/posts/${post.id}`,
        {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {'Content-Type': 'application/json', 'Authorization': 'authorized'}
        }
    );

const masterFetch = (url, config) =>
    fetch(url, config)
        .then(response => response)
        .catch(error => error)