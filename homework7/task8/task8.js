function checkLogin(login) {
    let patternLogin = /[\D][\w_!]{1,9}/;
    let numArray = [];
    for(let i = 0;i < login.length;i++){
        if(!isNaN(login[i])){
            numArray.push(login[i]);
            
        }
    }
    
    return {isValid:patternLogin.test(login),
        numbers : numArray   
        
    }
 }

checkLogin("john123");