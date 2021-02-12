var members = ['hello','world','easy'];
console.log(members[1]);
var roles = {
  'programmer' : 'sms',
  'designer' : 'k55',
  'manager' : 'hack'
}

console.log(roles.designer);

for(var name in roles){
  console.log(name, roles[name]);
}
