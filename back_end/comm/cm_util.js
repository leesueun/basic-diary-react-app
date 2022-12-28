var cm_util = {
    isEmptyObj(prm) {
        // 다양한 data type 의 빈 값을 고려해 수정
        // javascript 의 다양한 데이터 타입을 고려
        if ( prm == undefined ) {
            return true;
        }

        if ( prm == null ) {
            return true;
        }
        
        if (prm == [] || prm == {}) {
            return true;
        } 
        if (prm == "") {
            return true;
        }
        
        return false;
    }
};

module.exports = cm_util;