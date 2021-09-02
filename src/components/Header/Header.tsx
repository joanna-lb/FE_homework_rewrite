import * as React from "react";
import 'react-dom'
import './style/index.scss'
import {useState} from "react";
// @ts-ignore

const Header = () => {
  const [showSignInStyle, setShowSignInStyle] = useState(false)
  const handleShowSignIn = () => {
    setShowSignInStyle(!showSignInStyle)
  }
  return (
      <>
        <header className="header-bar">

          <div className="mid">
            <div className="logo">
              <img src={'https://i.loli.net/2021/08/23/1eOnhxNYf2XVzA5.png'}/>
              <span className="portrait">
              <img src={'https://img0.baidu.com/it/u=3127937678,3486357893&fm=26&fmt=auto&gp=0.jpg'}/>
                &nbsp;
                <button className="portrait-button" onClick={handleShowSignIn}> {'>'} </button>
            </span>

              <ul className={showSignInStyle ? "portrait-sign-in" : 'portrait-sign-in-not-show'}>
                <li>
                  {<i className="icofont-id"></i>}
                  &nbsp;Profile
                </li>
                <li>
                  {<i className="icofont-sign-out"></i>}
                  &nbsp;Sign Out
                </li>
              </ul>
            </div>


        </div>

      </header>
      <div className='test'>123</div>
    </>
  )
}
export default Header