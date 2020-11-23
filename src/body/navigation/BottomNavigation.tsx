import React from 'react'
import {Link} from 'react-router-dom';
import './BottomNavigation.css'
import {GiTrophyCup} from "react-icons/gi";
import {AiTwotoneHome} from "react-icons/ai"
import {GiPodiumWinner} from "react-icons/gi"
import IconButton from '@material-ui/core/IconButton';
interface prop{

}



export const BottomNavigation:React.FC<prop> = ()=>{
    const bottom = [
        {
            name:'Home',
            icon:<AiTwotoneHome/>,
        },
        {
            name:'My Matches',
            icon:<GiTrophyCup/>,
        },{
            name:'Winners',
            icon:<GiPodiumWinner/>,
        }
    ]
    return(
        <div >
            <div className="BottomNav">
                    {bottom.map((iteam,idx)=>{
                        return(
                            <div className="Content" key={idx}>
                                <Link to={iteam.name}>
                                        <IconButton>
                                            {iteam.icon}
                                        </IconButton>
                                        <span className="BottomName">{iteam.name}</span>
                                </Link>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}