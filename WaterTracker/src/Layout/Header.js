import React,{Fragment} from "react";
import waterImage from '../assets/water.jpg'
import classes from './Header.module.css'


const Header = props =>{
  
    return (<Fragment>
        <header className={classes.header}>
            <h1>Water Tracker</h1>
        </header>
        <div className={classes['main-image']}>
            <img src={waterImage} alt="water"/>
        </div>
    </Fragment>)
};


export default Header;