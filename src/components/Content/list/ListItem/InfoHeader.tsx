import * as React from "react";
import {NewAgentType} from "../../../../type";


interface InfoHeaderProp {
    agent:NewAgentType
}

const InfoHeader=({agent}:InfoHeaderProp)=>{
  return (
    <h5>
        {<i className="icofont-computer"></i>}
        <strong> &nbsp;{agent.name} </strong>
        <span className='agent-status'
              style={{backgroundColor: agent.status === 'building' ? '#FF9A2A' : '#7FBC39'}}> &nbsp;{agent.status}</span>
        {<i className="icon-info"></i>}
        <span className='agent-ip'> &nbsp;{agent.ip}</span>
        {<i className="icon-folder"></i>}
        <span> &nbsp;{agent.location}</span>
    </h5>
    )
}
export default InfoHeader