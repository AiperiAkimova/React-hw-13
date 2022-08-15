import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { Component } from 'react'
import classes from './ErrorModal.module.css'


class ErrorModal extends Component{
    render(){
        return(
            <>
         <div className={classes.backdrop}/>
        <Box className={classes.modal}>
            <header className={classes.header}>
                <h2>{this.props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{this.props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={this.props.onClose}>Okay</Button>
            </footer>
        </Box>
        </>
        )
    }
}

// const ErrorModal = (props) => {
//     return(
//         <>
//          <div className={classes.backdrop}/>
//         <Box className={classes.modal}>
//             <header className={classes.header}>
//                 <h2>{props.title}</h2>
//             </header>
//             <div className={classes.content}>
//                 <p>{props.message}</p>
//             </div>
//             <footer className={classes.actions}>
//                 <Button onClick={props.onClose}>Okay</Button>
//             </footer>
//         </Box>
//         </>
       
//     )
// }
export default ErrorModal










//backdrop artki fon modalkanin art jagindagi background