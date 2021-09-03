import {NewAgentType} from "../type";
import {AgentType} from "../components/Content/Content";
import {ALL} from "./constants";

export const checkLogoImage=(agent:NewAgentType)=>{
    switch (agent.os) {
        case 'windows':
            return 'https://i.loli.net/2021/08/23/UxhJGTVLygZbAza.png'
        case 'ubuntu':
            return'https://i.loli.net/2021/08/24/SWHlcKoFqCIXkY3.png';
        case 'debian':
            return'https://i.loli.net/2021/08/24/tuC6FSTfknQWZoJ.png';
        case 'suse':
            return 'https://i.loli.net/2021/08/24/8uGpgfWw13sOy2R.png';
        case 'centos':
            return 'https://i.loli.net/2021/08/23/AFcV5NJimQSZ2ou.png' ;
        default:
            return 'https://i.loli.net/2021/08/23/UxhJGTVLygZbAza.png'
    }
}

export const checkBuildingNumbers=(agents:Array<AgentType>,checkType:string)=>{
  return  agents.filter(agent=>agent.status===checkType).length
}

export const checkTypeNumbers=(agents:Array<AgentType>,checkType:string)=>{
   return  checkType===ALL?agents.length: agents.filter(agent=>agent.type===checkType).length
}

export const checkIfResourcesChange = (currentResources: Array<string>, originResources: Array<string>) => {
    let sameNum: number = 0
    let length=currentResources.length
    if (currentResources.length === originResources.length) {
        for (let i = 0; i < originResources.length; i++) {
            if (originResources[i] === currentResources[i]) {
                sameNum++
            }
        }
        return length-sameNum
    }
return null;
}
export const checkIfResourcesLengthChange=(currentResources:Array<string>)=>{
    return currentResources.length
}


