const router = require('express').Router();
const { User, Comment, Post } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({});
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req,res) => {
  console.log(req.body)
  try{
      const commentData = await Comment.create(req.body);
      res.status(200).json(commentData);
  } catch (err) {
      res.status(400).json(err);
      console.log(err);
  }
})




router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
