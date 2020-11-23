import React,{useState} from 'react'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FilterFramesIcon from '@material-ui/icons/FilterFrames';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import MoreIcon from '@material-ui/icons/More';
import './sideBar.css'

const SideBarContent = [
            {
                title : 'Mero Wallet',
                path:'/wallet',
                icon: <AccountBalanceWalletIcon/>,
                className : 'navText'
            },
            {
                title : 'Earn inviting',
                path:'/earn',
                icon: <LocalAtmIcon/>,
                className : 'navText'
            },
            {
                title : 'Find Friends',
                path:   '/find',
                icon:   <SearchIcon/>,
                className : 'navText'
            },
            {
                title : 'Coupons',
                path: '/coupons',
                icon:   <CardGiftcardIcon/>,
                className : 'navText'
            },
            {
                title : 'How to Play',
                path:   '/how',
                icon:   <SportsEsportsIcon/>,
                className : 'navText'
            },
            {
                title : 'Point System',
                path:   '/pointsystem',
                icon:   <FilterFramesIcon/>,
                className : 'navText'
            },
            {
                title : 'Setting',
                path:   '/setting',
                icon:   <SettingsIcon/>,
                className : 'navText'
            },
            {
                title : 'More',
                path:   '/more',
                icon:   <MoreIcon/>,
                className : 'navText'
            }
]

interface prop {

  state : boolean
}


const SideBar:React.FC<prop> = ({state})=>{

    return(
        <nav className={state ? "navMenu active" : "navMenu"}>
        <div className='sideTop'>
            <Link to='/profile'>
              <table>
                <tbody>
                <tr>
                  <td className="Avatar">
                    <Avatar/>
                  </td>
                  <td className="profileName">
                    <span>Pravesh Sapkota</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </Link>
        </div>
        <div className="sideBar">
          <ul className="sideNavIteam">
            {SideBarContent.map((iteam,index)=>{
              return(
                <li key={index} className = {iteam.className}>
                  <Link to={iteam.path}>
                    {iteam.icon}
                    <span>{iteam.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
}

export default SideBar
