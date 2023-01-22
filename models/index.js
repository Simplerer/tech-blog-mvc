const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsToMany(User, {
    through: {
        model: Post,
    }
})

Comment.belongsTo(Post);




module.exports = { User, Comment, Post };