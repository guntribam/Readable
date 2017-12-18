import React from 'react';
import Post from "../Post";

const Posts = ({posts}) =>
    <div>
        {posts && posts.map(post =>
            <Post key={post.id}
                  title={post.title}
                  body={post.body}
                  author={post.author}
                  timestamp={post.timestamp}
                  category={post.category}
                  voteScore={post.voteScore}
                  deleted={post.deleted}
                  commentCount={post.commentCount}
                  id={post.id}
            />
        )}
    </div>
export default Posts;