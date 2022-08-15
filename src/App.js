import React, {useState} from "react";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";


function App() {
  const [userList, setUserList] = useState([])

  const saveUserHandler = (userName, userAge) =>{
    setUserList((prevState) => [...prevState, {name: userName, age: userAge, id: Math.random().toString()}])
  }
  return (
    <div className="App">
     <AddUsers onAddUser = {saveUserHandler}/>
     <UserList users={userList} />
    </div>
  );
}



// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       list: data,
      
//     };
//   }
//   saveUserHandler = (obj) =>{
//     this.setState({
//       list: data.concat(obj)
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         <AddUsers onAddUser={this.saveUserHandler} />
//         <UserList users={this.state.list} />
//       </div>
//     );
//   }
// }
export default App;
