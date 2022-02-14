function makeFriendsList(friends) {
  // ваш код...

  for (let i = 0; i < friends.lenght; i++) {
  let li = friends.firstName[i] + friends.lastName[i]
  let list = document. createElement('ul');
  list.innerHTML = '<li>${li}</li>' ;
  list.appendChild(li);
  }
  
}
