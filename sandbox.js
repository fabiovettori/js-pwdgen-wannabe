// Password GEN
var name = prompt('Insert your Name');
var surname = prompt('Insert your Surname');
var color = prompt('Insert your preferred color');

var fullName = name + ' ' + surname;
// console.log(fullName);
document.getElementById('fullname').innerHTML = 'Hi' + ' ' + fullName;
document.getElementById('password').innerHTML = 'your password is: ' + name + surname + color + '20';
