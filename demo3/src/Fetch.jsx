import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/fetchUsers')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <img src={user.image_url} alt={`${user.first_name} ${user.last_name}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
