import { useEffect, useState } from "react";
import classes from "./Users.module.css";
import Modal from "../../Layout/Modal";

const users = (props) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  
  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      setUsersData(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  let content = <p>Found no users</p>;
  if(isLoading){
    content = <p className={classes.p}>Loading !!</p>
  }
   if(!isLoading && error){
    content = <p className={classes.error}>{error}</p>
  }
  if(!isLoading && usersData.length > 0) {
    content =   <table>
    <tbody>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>User Name</th>
        <th>Email</th>
      </tr>
    </tbody>
    {usersData.map((user) => {
      return (
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      );
    })}
  </table>
  }
  return (
    <Modal onClose={props.onClose}>
   {content}
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        {" "}
        Close
      </button>
    </div>
  </Modal>
  );
};

export default users;
