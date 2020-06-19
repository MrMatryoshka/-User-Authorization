var users= [
    user1 = {
      name: "Kirill" ,
      login: 'Kirill1' ,
      password : 123456
    },
    user2 = {
      name: "Anastasia" ,
      login: 'nasty' ,
      password : 'ananas'
    },
    user3 = {
      name: "Oleg" ,
      login: 'lego' ,
      password : "lego_go"
    }
 ];

function check() {
  var login = prompt('Напишите ваш логин','') ;
  var password= prompt('Напишите ваш пароль','');
if (login == user1.login && password == user1.password) {
  alert('Hello' +' '+  user1.name);
  }else if (login == user2.login && password == user2.password) {
    alert('Hello' +' '+  user2.name);
    }else if (login == user3.login && password == user3.password) {
        alert('Hello' +' '+ user3.name);
      }else {
      alert('Ошибка авторизации!')
    }
}
check()
