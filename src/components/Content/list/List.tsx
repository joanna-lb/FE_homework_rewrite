import * as React from "react";
import 'react-dom'
import '../style/index.scss'
import ListItem from "./ListItem/ListItem";
import {NewAgentType} from "../../../type";
import {ALL, PHYSICAL, VIRTUAL} from "../../../shared/constants";


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

interface ListProps {
    agents: Array<AgentType>
    filterType: string
    newAgents: Array<NewAgentType>
    changePopover: (id: number, status: boolean) => void
    updateResources: (id: number, resources: Array<string>) => void
    deleteResource: (id: number, resourceName: string) => void
  checkIfResourceChange:(resourceChange:boolean)=>void
  ifResourceChange:boolean
}

const List = ({checkIfResourceChange,
                ifResourceChange,
                  filterType,
                  newAgents,
                  changePopover,
                  updateResources,
                  deleteResource
              }: ListProps) => {


    const handleChangePopover = (id: number, status: boolean) => {
        return changePopover(id, status)

    }

    return (
        <>
            {
                newAgents.map(agent =>
                    filterType === ALL &&
                    <ListItem
                      ifResourceChange={ifResourceChange}
                      checkIfResourceChange={checkIfResourceChange}
                        deleteResource={deleteResource}
                        updateResources={updateResources}
                        handleChangePopover={handleChangePopover}
                        agent={agent}
                        key={agent.id}/>
                    ||
                    filterType === PHYSICAL &&
                    agent.type === PHYSICAL &&
                    <ListItem
                      ifResourceChange={ifResourceChange}
                      checkIfResourceChange={checkIfResourceChange}
                        deleteResource={deleteResource}
                        updateResources={updateResources}
                        handleChangePopover={handleChangePopover}
                        agent={agent}
                        key={agent.id}/>
                    ||
                    filterType === VIRTUAL &&
                    agent.type === VIRTUAL &&
                    <ListItem
                      ifResourceChange={ifResourceChange}
                      checkIfResourceChange={checkIfResourceChange}
                        deleteResource={deleteResource}
                        updateResources={updateResources}
                        handleChangePopover={handleChangePopover}
                        agent={agent}
                        key={agent.id}/>
                )
            }

        </>
    )
};
export default List;

