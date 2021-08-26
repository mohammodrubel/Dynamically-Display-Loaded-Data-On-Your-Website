function loadData (){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(Response => Response.json())
  .then (json => console.log(json))
} 

function loadUsers(){
  fetch ('https://jsonplaceholder.typicode.com/users')
  .then(Response => Response.json())
  .then(Data => displayUsers(Data))
}

function loadPost (){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then (Response => Response.json())
  .then(json => console.log(json))
}

// DISPLAY USERS NAME 
function displayUsers(Data){
  const ul = document.getElementById('user')
  for (const user of Data){
    // console.log(user.name)
    const li = document.createElement('li')
    li.innerText = `name: ${user.name}`;
    ul.appendChild(li)
  }
}
// DISPLAY USERS EMAIL