import * as React from "react";
import 'react-dom'
import '../Menu/style/index.scss'
import {AgentType} from "./list/List";
import {ALL, BUILDING, IDLE, PHYSICAL, VIRTUAL} from "../../shared/constants";
import {checkBuildingNumbers, checkTypeNumbers} from "../../shared/functions";



export interface NumbersProp {
    agents:Array<AgentType>
}

const Numbers=({agents}:NumbersProp)=>{

    return(
        <ul className="numbers">
            <li className="flex-item">
                <div className="number-card">
                    Building
                    <i className='icofont-gear-alt'></i>
                    <span className="number-card-number">{checkBuildingNumbers(agents,BUILDING)}</span>
                </div>

            </li>
            <li className="flex-item">
                <div className="number-card">
                    Idle
                    <i className='icofont-coffee-cup'></i>
                    <span className="number-card-number">{checkBuildingNumbers(agents,IDLE)}</span>
                </div>
            </li>
            <li className="flex-item">
                <div className="grate_num">
                    <div className="item">
                        <div className="item-components">
                            <div>ALL</div>
                            <div className="item-number">{checkTypeNumbers(agents,ALL)}</div>
                        </div>

                        <div className="item-components">
                            <div>PHYSICAL</div>
                            <div className="item-number" data-testid='physical-number'>{checkTypeNumbers(agents,PHYSICAL)}</div>
                        </div>
                        <div className="item-components">
                            <div>VIRTUAL</div>
                            <div className="item-number">{checkTypeNumbers(agents,VIRTUAL)}</div>
                        </div>

                    </div>
                </div>
            </li>
        </ul>
    )
}
export default Numbers
