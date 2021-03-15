// eslint-disable-next-line
const regExpPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

module.exports = {

    validate: (password) => {
        if(regExpPassword.test(password)){
            return true;
        }else{
            return false;
        }
    },

};