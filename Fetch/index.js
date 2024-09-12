// write code to get data from https://jsonplaceholder.typicode.com/users (receive statusCode and data)


function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('Status Code:', response.status); 
        return response.json();
      })
      .then(data => {
        console.log('Users:', data);  
        getPosts(data[0].id);  
      })
      .catch(error => console.log('Error:', error)); 
  }
  
  
// write code to get data from https://jsonplaceholder.typicode.com/users then get id of first user and using this id get posts of this user using
// https://jsonplaceholder.typicode.com/posts?userId={id of ur user}



function getPosts(userId) {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
      .then(response => response.json())
      .then(data => {
        console.log('Posts for User ID ' + userId + ':', data);  
      })
      .catch(error => console.log('Error:', error));  
  }
  getUsers(); 
  