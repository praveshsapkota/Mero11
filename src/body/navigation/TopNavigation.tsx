import React from 'react'
import './TopNavigation.css'
import { GiSoccerBall,GiCricketBat,GiBasketballBall} from 'react-icons/gi'
import {IoIosBaseball} from 'react-icons/io'
import {FaFootballBall} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function TopNavigation() {
    const games= [
        {
            title:'Football',
            icon:<GiSoccerBall/>,
            classname:'games',
        },
        {
            title:'Cricket',
            icon:<GiCricketBat/>,
            classname:'games',
        },
        {
            title:'Basketball',
            icon:<GiBasketballBall/>,
            classname:'games',
        },
        {
            title:'Baseball',
            icon:<IoIosBaseball/>,
            classname:'games',
        },
        {
            title:'NFL',
            icon:<FaFootballBall/>,
            classname:'games',
        },
    ]
    return (
        <>
            <div className="topNavigation">
                {games.map((iteam,index)=>{
                    return(
                        <div key ={index} className={iteam.classname}>
                        <Link to={iteam.title}>
                                {iteam.icon}
                        <span>{iteam.title}</span>
                        </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TopNavigation
