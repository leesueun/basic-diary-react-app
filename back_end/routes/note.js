const express = require('express');
const router = express.Router();
const Note = require('../model/note');

// 일기 전체 조회
router.get('/', (req, res, next) => {
    Note.find().sort({createdAt:-1})
        .then((users) => {
          res.json(users);
        })
        .catch((err) => {
          console.error(err);
          next(err);
        });
});

// 일기 생성
router.post('/', (req, res, next) => {
  const note = new Note({
    author: req.body.author,
    content: req.body.content,
    emotion: req.body.emotion,
    private : req.body.private,
  })
  note.save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.delete('/remove', (req, res, next) => {
  Note.findOneAndDelete({id: req.body.id})
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
})

router.put("/edit", (req, res, next) => {
  console.log('req의 Body',req.body);
  Note.findOneAndUpdate({
    id: req.body.data.id
  }, {content:req.body.data.content})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
  
})

module.exports = router;