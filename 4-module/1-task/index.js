function makeFriendsList(friends) {
  // ваш код...
  let list = document.createElement('ul');
  for (let i = 0; i < friends.length; i++) {
  const li = '<li>' + friends[i].firstName + ' ' + friends[i].lastName + '</li>';
  list.insertAdjacentHTML('beforeEnd', li);
  
  
  }
  return list 
}
