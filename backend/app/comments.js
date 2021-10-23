const express = require('express');
const router = express.Router();
const mysql = require('../mysqlDb');

router.get('/', async (req, res) => {
  console.log(req.query.id);
  if (!req.query.id) {
    const [comments] = await mysql.getConnection().query('SELECT * FROM comments');
    res.send(comments);
  } else {
    const [comments] = await mysql.getConnection().query(
      'SELECT * FROM comments where news_id = ?',
      [req.query.id]);
    res.send(comments);
  }
});

router.delete('/:id', async (req, res) => {
  await mysql.getConnection().query(
    'DELETE FROM comments where id = ?',
    [req.params.id]
  );
  res.send({message: "was DELETED"});
})

router.post('/:id', async (req, res) => {
  if (!req.body.comment || !req.body.newsId) {
    return res.status(400).send({error: 'Data not valid'});
  }

  console.log(req.body.comment);
  console.log(req.body.newsId);
  console.log(req.body.name);

  let name = '';

  if (req.body.name === '') {
    name = 'Anonymous';
  } else {
    name = req.body.name
  }

  const comments  = {
    news_id: req.body.newsId,
    name: name,
    comment: req.body.comment,
  };

  console.log(comments);

  const newComment = await mysql.getConnection().query(
    'INSERT INTO ?? (news_id, name, comment) values (?, ?, ?)',
    ['comments', comments.news_id, comments.name, comments.comment]
  );
  console.log('ok');
  res.send({
    ...comments,
    id: newComment.insertId
  });
});

module.exports = router;