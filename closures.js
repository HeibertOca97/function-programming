require('isomorphic-fetch');

const crudder = domain => resource => {
  let url = `${domain}/${resource}`;

  return ({
    create: (data) => fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json()),
    get: () => fetch(url).then(res => res.json())
  });
}

const base = crudder('https://jsonplaceholder.typicode.com');
const users = base('users');
const todos = base('todos');

users.get().then(data => console.log(data[0]))
todos.get().then(data => console.log(data[0]))
