import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Box } from "@mui/material";
import ErrorModal from "../UI/ErrorModal";
// import { Component } from "react";

//FUNC COMPONENT
const AddUsers = ({ onAddUser }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const getNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const getAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUsersHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter values",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age > 0",
      });
      return;
    }
    console.log(enteredName, enteredAge);
    onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const errorCloser = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorCloser}
        />
      )}
      <Box
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "35ch",
            height: "25ch",
            margin: "20px auto",
            background: "white",
          },
        }}
      >
        <form onSubmit={addUsersHandler}>
          <TextField
            id="margin-normal"
            type="text"
            label="Username"
            margin="normal"
            variant="outlined"
            onChange={getNameHandler}
            value={enteredName}
          />
          <TextField
            id="margin-normal"
            type="number"
            label="Age"
            margin="normal"
            variant="outlined"
            onChange={getAgeHandler}
            value={enteredAge}
          />
          <Button type="submit" variant="outlined">
            AddUser
          </Button>
        </form>
      </Box>
    </>
  );
};
export default AddUsers;

//CLASS COMPONENT

//  class AddUsers extends Component {
//   constructor() {
//     super();
//     this.state = {
//       enteredName: "",
//       enteredAge: "",

//     };
//   }

//   getNameHandler=(e)=>{
//     this.setState({
//       enteredName: e.target.value,
//     });
//   }

//   getAgeHandler=(e)=>{
//     this.setState({
//       enteredAge: e.target.value,
//     });
//   }

//   addUsersHandler = (e) => {
//     e.preventDefault();
// const listData = {
//     name: this.state.enteredName,
//     age: this.state.enteredAge,
//     id: Math.random().toString(),

// }
//     // this.props.onAddUser(this.state.enteredName, this.state.enteredAge);
//     this.props.onAddUser(listData)
//     console.log(this.enteredName, this.enteredAge);
//   };

//   render() {
//     return (
//       <>
//         <Box
//           sx={{
//             "& > :not(style)": {
//               m: 1,
//               width: "35ch",
//               height: "25ch",
//               margin: "20px auto",
//               background: "white",
//             },
//           }}
//         >
//           <form onSubmit={this.addUsersHandler}>
//             <TextField
//               id="margin-normal"
//               type="text"
//               label="Username"
//               margin="normal"
//               variant="outlined"
//               onChange={this.getNameHandler}
//               value={this.state.enteredName}
//             />
//             <TextField
//               id="margin-normal"
//               type="number"
//               label="Age"
//               margin="normal"
//               variant="outlined"
//               onChange={this.getAgeHandler}
//               value={this.state.enteredAge}
//             />
//             <Button type="submit" variant="outlined">
//               AddUser
//             </Button>
//           </form>
//         </Box>
//       </>
//     );
//   }
// }
