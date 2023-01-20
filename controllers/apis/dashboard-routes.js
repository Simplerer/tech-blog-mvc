const router = require('express').Router();
const { User, Post } = require('../../models');



// Get user's posts

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        
      })
      console.log(postData);
      res.json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/:user_id', async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: {
            user_id: req.params.user_id
        }, 
        include: [{ 
            model: User,
            attributes: ['username']
         }]
      })
      res.json(postData);
    //   res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req,res) => {
    console.log(req.body)
    try{
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update({
            title: req.body.title,
            content: req.body.content,
        },
        {
            where: {
                id: req.params.id,
            }
        })
        res.json(postData)
    } catch(err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try{
      const postData = await Post.destroy({
      where: { id: req.params.id } });
      res.json(postData);
      } catch (err) {
          console.error(err);
          res.json(err);
      }
  });





module.exports = router;