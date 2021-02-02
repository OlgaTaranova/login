const login = 'TaranovaOlga';
let currentLogin;


let question = confirm('Wanna to login?');

if (!question) {
  
  let reasons = {
    1: "don't have an account",
    2: "don't need to use your account",
    3: "want to leave the site",
  }

  let reason = prompt("Please, enter the number of reason (1, 2 or 3): \n 1 - you don't have an accont \n 2 - you don't need to use your account \n 3 - you want to leave the site");
  
  if (reason in reasons) {
    alert(`You finished bacause you ${reasons[reason]}`);
  } else {
    alert("You finished withought pointing the reason");
  }
  
} else {
  checkLogin();
}


function checkLogin() {
   
    if (currentLogin === '') {
      currentLogin = prompt('Please, check the login and try one more time');
    } else {
      currentLogin = prompt('Please, enter your login');
    }
    
 
    if (typeof currentLogin === 'object') { 
      let reask = confirm('Are you sure?');
      if (reask) {
        alert('See you next time');
      } else {
        checkLogin();
      }
      
    } else if (currentLogin === login) {
        alert('You log in!');
    } else {
        currentLogin = '';
        checkLogin();
      }
    
    }