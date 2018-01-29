export default (post) => ({
    id: post.id,
    timestamp: post.timestamp,
    title: post.title,
    body: post.body,
    author: post.author,
    category: post.category,
    voteScore: post.voteScore,
    deleted: post.deleted,
    commentCount: post.commentCount
});