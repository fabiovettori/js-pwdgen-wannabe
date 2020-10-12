// user info
var name = prompt('Insert your Name');
var surname = prompt('Insert your Surname');
var color = prompt('Insert your preferred color');

// user welcome message
var fullName = name + ' ' + surname;
document.getElementById('fullname').innerHTML = 'Hi' + ' ' + name + '!';

// password gen
var password = name + surname + color + '20';
var userPassword = password.toLowerCase();
document.getElementById('password').innerHTML = userPassword;
