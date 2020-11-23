import React,{useState} from 'react'
import {NavBar} from './navComponent/NavBar/NavBar'
import SideBar from './navComponent/SideBar/SideBar'
import TopNavigation from './navigation/TopNavigation'
import BackDrop from './BackDrop/BackDrop'
import {BottomNavigation} from './navigation/BottomNavigation' 
import './Body.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import BaseBall from './shared/baseball/Baseball'
import Basketball from './shared/basketball/Basketball'
import Coupons from './shared/coupons/Coupons'
import Cricket from './shared/cricket/Cricket'
import Earn from './shared/earn/Earn'
import Find from './shared/find/Find'
import How from './shared/how/How'
import MatchesPlayed from './shared/matchesPlayed/MatchesPlayed'
import More from './shared/more/More'
import Nfl from './shared/nfl/Nfl'
import Notification from './shared/notification/Notification'
import PointSystem from './shared/pointsystem/PointSystem'
import Profile from './shared/profile/Profile'
import Setting from './shared/setting/Setting'
import Wallet from './shared/wallet/Wallet'
import Winners from './shared/winners/Winners'
import Football from './shared/football/Football'



function Body() {
    const [sidebar,setSidebar] = useState(false)
    const toggler = ()=>{
        return(
            setSidebar(!sidebar)
        )
    }

    let Backdrop;
    if (sidebar){
        Backdrop = <BackDrop toggler={toggler}/>
    }

    return (
        <Router>
        <div className="body">
            <NavBar toggler={toggler} />
            <SideBar state = {sidebar}/>
            {Backdrop}
            <TopNavigation/>
            <BottomNavigation />
            <Switch>
            <Route path="/Football" component={Football}/>
            <Route path="/Cricket" component={Cricket}/>
            <Route path="/Baseketball" component={Basketball}/>
            <Route path="Baseball" component={BaseBall}/>
            <Route path="NFL" component={Nfl}/>
            <Route path="/My%20Matches" component={MatchesPlayed}/>
            <Route path="/Winners" component={Winners}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/wallet" component={Wallet}/>
            <Route path="/earn" component={Earn}/>
            <Route path="/find" component={Find}/>
            <Route path="/coupons" component={Coupons}/>
            <Route path="/how" component={How}/>
            <Route path="/pointsystem" component={PointSystem}/>
            <Route path="/setting" component={Setting}/>
            <Route path="/more" component={More}/>
            <Route path="/notification" component={Notification}/>
            </Switch>
        </div>
        </Router>
    )
}

export default Body
