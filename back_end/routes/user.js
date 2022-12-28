const express = require('express');
const router = express.Router();
const User = require('../model/user');

//회원 전체 조회
router.get('/', (req, res, next) => {
    User.find().sort({createdAt:-1})
        .then((users) => {
          res.json(users);
        })
        .catch((err) => {
          console.error(err);
          next(err);
        });
});

// 회원가입
router.post('/create', (req, res, next) => {
  const user = new User({
    userId: req.body.userId,
    password: req.body.password,
    name: req.body.name,
    nickname: req.body.nickname,
    age: req.body.age,
    userStatus: req.body.userStatus
  })
  user.save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;