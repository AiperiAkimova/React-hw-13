import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Avatar } from "@mui/material";
// import { Component } from "react";

const UserList = ({ users }) => {
  return (
    <>
      <List
        sx={{ width: "40%", bgcolor: "background.paper", margin: "10px auto" }}
      >
        {users.map((user) => (
          <ListItem key={user.id}>
            <Avatar
              alt="Remy Sharp"
              src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
            />
            {user.name} ({user.age} years old)
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default UserList;

// class UserList extends Component {
//   render() {
//     return (
//       <>
//         <List
//           sx={{
//             width: "40%",
//             bgcolor: "background.paper",
//             margin: "10px auto",
//           }}
//         >
//           {this.props.users.map((user) => (
//             <ListItem key={user.id} name={user.name} age={user.age} />
//             //   <Avatar
//             //     alt="Remy Sharp"
//             //     src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
//             //   />
//             //   {user.name} ({user.age} years old)
//             // </ListItem>
//           ))}
//         </List>
//       </>
//     );
//   }
// }
