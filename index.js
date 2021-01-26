const login = 'TaranovaOlga';
let currentLogin;

let question = confirm('Wanna to login?');



if (question == false) {
  let reasons = prompt('Please, enter the reason (1, 2 or 3)');
  alert('Finish');
}else {
  checkLogin();
}


 function checkLogin() {
   
   if (currentLogin === '') {
     currentLogin = prompt('Please, check the login and try one more time');
   }else {
        currentLogin = prompt('Please, enter your login');
   }
 
    if (currentLogin === null) {
    let reask = confirm('Are you sure?');
    if (reask === true) {
      alert('See you next time');
    }else {
      checkLogin();
    }
  }else if (currentLogin === '') {
     checkLogin();
  }else {
    if (currentLogin === login) {
      alert('You log in!');
    }else {
      currentLogin = '';
       checkLogin();
    }
  }
 }
