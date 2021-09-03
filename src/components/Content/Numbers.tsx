import * as React from "react";
import 'react-dom'
import '../Menu/style/index.scss'

import {ALL, BUILDING, IDLE, PHYSICAL, VIRTUAL} from "../../shared/constants";


export interface AgentType {
  name: string,
  os: string,
  status: string,
  type: string,
  ip: string,
  location: string,
  resources: Array<string>,
  id: number,
  iconSrc?: string,
}

interface NumbersProp {
    agents:Array<AgentType>
}

const Numbers=({agents}:NumbersProp)=>{

    return(
        <ul className="numbers">
            <li className="flex-item">
                <div className="number-card">
                    Building
                    <i className='icofont-gear-alt'></i>
                    <span className="number-card-number"></span>
                </div>

            </li>
            <li className="flex-item">
                <div className="number-card">
                    Idle
                    <i className='icofont-coffee-cup'></i>
                    <span className="number-card-number"></span>
                </div>
            </li>
            <li className="flex-item">
                <div className="grate_num">
                    <div className="item">
                        <div className="item-components">
                            <div>ALL</div>
                            <div className="item-number"></div>
                        </div>

                        <div className="item-components">
                            <div>PHYSICAL</div>
                            <div className="item-number"></div>
                        </div>
                        <div className="item-components">
                            <div>VIRTUAL</div>
                            <div className="item-number"></div>
                        </div>

                    </div>
                </div>
            </li>
        </ul>
    )
}
export default Numbers
