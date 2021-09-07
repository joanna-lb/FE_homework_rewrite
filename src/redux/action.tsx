import {AgentType} from "../components/Content/list/List";
import {CHANGE_POPOVER, DELETE_RESOURCE, SET_NEW_AGENTS, UPDATE_RESOURCES} from "../shared/constants";

const setNewAgents=(agents:Array<AgentType>)=>{
    return ({type:SET_NEW_AGENTS,payload:{agents}})
}
const changePopover=(id: number, status: boolean)=>{
    return({type:CHANGE_POPOVER,payload:{id,status}})
}

const updateResources=(id:number, resources:Array<string>)=>{
    return({type:UPDATE_RESOURCES,payload:{resources}})
}

const deleteResource=(id: number, resourceName: string)=>{
    return({type:DELETE_RESOURCE,payload:{resourceName}})
}
export {setNewAgents,changePopover,updateResources,deleteResource}
