import React from "react";

function Table() {
  const [user, setUser] = React.useState([
    {
      name: "hend",
      age: "20",
      address: "mansoura",
    },
    {
      name: "hana",
      age: "20",
      address: "mansoura",
    },
    {
      name: "mhmd",
      age: "22",
      address: "cairo",
    },
    {
      name: "ali",
      age: "22",
      address: "aswan",
    },
    {
      name: "ahmed",
      age: "21",
      address: "alex",
    }
  ]);

  function deleteUser(index) {
    user.splice(index, 1);
    setUser([...user]);
  }
  return (
    <div>
      <h1>Table</h1>
      <table border={3}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>address</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>
                <button onClick={deleteUser}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
