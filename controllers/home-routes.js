const router = require('express').Router();
const { User, Comment, Post } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ 
        model: User,
        attributes: ['username'] 
      }]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { 
      posts, 
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user's posts for Dashboard

router.get('/dashboard/:id', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    const postData = await Post.findAll({
      include: [{ model: User }],
      where: {
        userId: req.params.id,
      }
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { posts,
      loggedIn: req.session.loggedIn,
      user: req.session.username,
        layout: 'home' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// renders new posts view

router.get('/posts', async (req, res) => {
  try {
    res.render('posts', {
      loggedIn: req.session.loggedIn,
      user: req.session.username,
      id: req.session.userId,
        layout: 'home' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit post view

router.get('/post/edit/:id', (req, res) => {
  res.render('edit-post', {
    userId: req.session.userId, 
    layout: 'user'
  })
})

// add comment to a post by post's id

router.get('/post/comment/:id', async (req, res) => {
  try {
    const editData = await Post.findByPk(req.params.id,
      {include: [{ 
        model: User,
        attributes: ['username', 'id'] 
      }]}
      )
      const data = await editData.get({ plain: true })
      console.log(data)
      res.render('comment', {
        data: data,         
        layout: 'user'
      })
  } catch (err) {
    res.status(500).json(err);
  }
})

// get login page

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login', { layout: 'user' });
});

// get signup page

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup', { layout: 'user' });
});

module.exports = router;
