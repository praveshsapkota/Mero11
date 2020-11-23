import React from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import IconButton from '@material-ui/core/IconButton';
import './navBar.css'


interface props {
  toggler : () => void;
}

export const NavBar: React.FC<props> = ({toggler})=> {
  return (
    <div>
      <div className="navBar">
        <Link to='#' className='menuBar'>
          <IconButton onClick={toggler}>
          <MenuIcon/>
          </IconButton>
        </Link>
        <span className="logo">MERO-11</span>
        <div className="navSideComponent">
          <NotificationsActiveSharpIcon/>
          <AccountBalanceWalletRoundedIcon/>
        </div>
      </div>
    </div>
  )
}


