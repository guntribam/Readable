import React from 'react';
import Post from "../Post";
import {connect} from 'react-redux'

const Posts = ({posts}) =>
    <div className="col-md-8">
        <h2>Posts</h2>
        <hr className="my-3"/>
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

const mapStateToProps = ({posts}) => {
    return {posts:  Object.values(posts)}
}

export default connect(mapStateToProps)(Posts);