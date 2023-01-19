const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


// User.hasMany(Comment, {
//     through: Post
// })


// Comment.belongsToMany(User, {
//     through: Post
// })

// Post.hasMany(Comment, {
//     through: {
//         model: User,
//         unique: false,
//     }
// })

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Comment.belongsToMany(User, {
    through: {
        model: Post,
    }
})





module.exports = { User, Comment, Post };