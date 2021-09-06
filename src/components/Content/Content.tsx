import * as React from "react";
import 'react-dom'
import './style/index.scss'
import {useState} from "react";
import Numbers from "./Numbers";
import Filter from "./Filter";
import List from "./list/List";
import {NewAgentType} from "../../type";
import {ALL} from "../../shared/constants";





export interface AgentType{
  name:string,
  os:string,
  status:string,
  type:string,
  ip:string,
  location:string,
  resources:Array<string>,
  id:number,
  iconSrc?:string,
}

interface ContentProp {
  agents:Array<AgentType>
  newAgents:Array<NewAgentType>
  changePopover:(id:number,status:boolean)=>void
  updateResources:(id:number, resources:Array<string>)=>void
  deleteResource:(id: number, resourceName: string)=>void
  checkIfResourceChange:(resourceChange:boolean)=>void
  ifResourceChange:boolean
}

const Content=({ifResourceChange,agents,newAgents,changePopover,updateResources,deleteResource, checkIfResourceChange}:ContentProp)=>{
     const[filterType,setFilterType]=useState(ALL)

    const handleChangeShowContent=(filterType:string)=>{
       setFilterType(filterType)
    }


    return(
        <>
            <section className="content">
                <div className="agent-page">
                    <Numbers
                        agents={agents}
                    />
                  <Filter
                    handleChangeShowContent={handleChangeShowContent}
                    filterType={filterType}
                  />
                  <List
                    ifResourceChange={ifResourceChange}
                    checkIfResourceChange={checkIfResourceChange}
                    updateResources={updateResources}
                    newAgents={newAgents}
                    filterType={filterType}
                    agents={agents}
                    changePopover={changePopover}
                    deleteResource={deleteResource}
                  />
                </div>
            </section>
        </>
)
}
export default Content
