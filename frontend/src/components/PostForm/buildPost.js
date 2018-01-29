import uuidv1 from "uuid/v1";

export default (post) => ({
    id: uuidv1(),
    timestamp: new Date(),
    title: post.title,
    body: post.body,
    author: post.author,
    category: post.category,
    voteScore: 1,
    deleted: false,
    commentCount: 0
});