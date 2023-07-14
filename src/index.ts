import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'Silvester',
  age: 20,
});

const getUser = async () => {
  const user = await axios.get('http://localhost:3000/users/1');
  console.log(user.data);
};

getUser();
