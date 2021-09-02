import * as React from "react";
import 'react-dom'
import './style/index.scss'
import MenuItem from "./MenuItem";
import {MENU_ITEMS} from "../../shared/constants";
import {BrowserRouter,Link,Route,Switch,NavLink} from 'react-router-dom'


const Menu = () => {
    const iconNames = ['icofont-dashboard', 'icofont-site-map', 'icofont-ship', 'icofont-life-buoy']
    return (
        <section className="menus">
            <div className="left-bar">
                <ul className="left-bar-menu">
                    {Object.keys(MENU_ITEMS).map((key, index) => (
                      <li key={key}>
                        <Link to={`/${key==='AGENT'?'':key.toLowerCase()}`} key={key}>
                        {<i className={iconNames[index]}></i>}{key}
                        </Link>
                      </li>
                    ))}
                </ul>

                <div className="history">
                    <span className="history-title">History</span>
                    <MenuItem/>
                </div>
            </div>

        </section>
    )
}
export default Menu
