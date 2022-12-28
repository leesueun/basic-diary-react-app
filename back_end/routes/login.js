const express = require('express');
const router = express.Router();
const User = require('../model/user');
const cm_util = require('../comm/cm_util');

// 로그인
router.post('/', async (req, res, next) => {
    if ( cm_util.isEmptyObj(req.body.userId) || cm_util.isEmptyObj(req.body.password) ) {
        res.status(400).json({message:'입력값이 입력되지 않았습니다.'});
        return;
    }

    let dbUser = await User.find({userId:req.body.userId});

    
    // 어떠한 값을 줘야함
    // STEP1 : 어떠한 값 => 로그인 한 사용자를 식별할 수 있는 정보(인증값 => _id)
    // STEP2 : 어떠한 값 추가 => 로그인 한 사용자의 권한 정보(인가값 => 권한 테이블의 값)
    // STEP4 : JWT => 인증과 인가에 대한 정보를 암호화 하여 토큰을 생성합니다

    // 코딩하기 전에 꼭 해야할 일
    // 1. 무엇을 해야하는지 생각한다
    // 2. 무엇을 해야하는지 순서대로 적어본다(한글로)
    // 3. 단계별로 해야할 일을 적어본다(한글로)
    // 4. 소스 작성
    // 5. 리팩토링(공통적으로 사용하는 요소에 대해서 공통화, 보기좋게 라인 정리)

    // 로그인
    // STEP 1 기본 파라미터 체크
    // 1. 클라이언트에서 아이디, 비밀번호를 전달받는다
    // 1-1. 아이디, 비밀번호가 전달되었는지 확인한다
    // 1-1-1. 아이디, 비밀번호가 존재하는지 확인
    // 1-1-1-1. 아이디, 비밀번호가 존재하지 않을 경우 에러 코드 400 에러 메시지 올바르지 않은 입력값입니다
    // 1-1-1-2. 아이디, 비밀번호가 존재할 경우 1-1-2
    // 1-1-2. 전달 받은 아이디, 비밀번호가 아이디 규칙, 비밀번호 규칙에 맞는지 확인한다
    // 1-1-2-1. 전달 받은 아이디, 비밀번호가 아이디 규칙, 비밀번호 규칙에 맞지 않을 경우 에러 코드 400 에러 메시지 올바르지 않은 입력값입니다
    // 1-1-2-2. 전달 받은 아이디, 비밀번호가 아이디 규칙, 비밀번호 규칙에 맞을 경우 2
    // STEP 2 DB 조회
    // 2. 아이디가 디비에 존재하는지 확인한다
    // 2-1. 없을 경우 에러 코드 400, 에러 메시지 존재하지 않는 회원입니다
    if (cm_util.isEmptyObj(dbUser)) {
        res.status(400).json({message:'존재하지 않는 회원입니다'})
    }
    // 2-2. 있을 경우 전달받은 비밀번호와 디비에 등록된 비밀번호가 일치하는지 확인한다
    if (req.body.password != dbUser[0].password) {
        res.status(400).json({message:'비밀번호가 일치하지 않습니다'})
    } else {
        unique_id = JSON.stringify(dbUser[0]._id)
        res.status(200).json({
            message:'로그인 되었습니다 ', 
            unique_id: JSON.parse(unique_id),
            userid: dbUser[0].userId,
        });    }
    // 2-2-1. 일치하지 않을 경우 에러 코드 400, 에러 메시지 비밀번호가 일치하지 않습니다
    // 2-2-2. 일치할 경우 3으로 이동
    // STEP 3 정상 결과 처리
    // 3. 로그인 처리 
    return;
});

module.exports = router;