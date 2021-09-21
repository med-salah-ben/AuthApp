import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logoutUser } from '../../JS/Actions.js/authActions';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Button2 from '@material-ui/core/Button';
import {NavLink} from "react-bootstrap"
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 const AppNavBar =()=> {
   const dispatch = useDispatch()
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const user = useSelector(state => state.authReducer.user)
  const classes = useStyles();
  
  const logout = ()=>{
    dispatch(logoutUser())
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link to="/dashboard">
           Auth WS
           </Link>
          </Typography>
        {!isAuth?( 
         <div>
          <Register/>
          <Login />
         </div>):(
           <div>
           <span style={{marginRight:"2rem"}}>
           <strong>
           <span style={{marginRight:"1rem"}}>
           Welcome
           </span>
            {  user.name}
           </strong>
           </span>
           
           <Button2 variant="contained" color="primary" onClick={logout} >
       <NavLink href="#" > Logout</NavLink>
      </Button2>
           </div>
         )}
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default AppNavBar
