import * as React from "react";
import 'react-dom'
import '../../style/index.scss'
import Tag from "./Tag";
import {NewAgentType} from "../../../../type";
import Popover from "./Popover";
import {checkLogoImage} from "../../../../shared/functions";
import InfoHeader from "./InfoHeader";

interface ListItemProps {
    handleChangePopover: (id: number, status: boolean) => void
    agent: NewAgentType
    updateResources: (id:number, resources:Array<string>) => void
    deleteResource: (id: number, resourceName: string) => void
}

const ListItem = ({handleChangePopover, agent, updateResources,
                 deleteResource
                  }: ListItemProps) => {


    return (
        <div className="list-item">
            <div className="logo">
                <img src={checkLogoImage(agent)} alt=""/>
            </div>
            <div className="info">
                <InfoHeader agent={agent}/>
                <Tag
                    status={agent.status}
                    deleteResource={deleteResource}
                    handleChangePopover={handleChangePopover}
                    resources={agent.resources}
                    id={agent.id}
                />

                {agent.showPopover && <Popover
                    addResources={updateResources}
                    IfPopoverWindowOpen={handleChangePopover}
                    agentShow={agent}
                    id={agent.id}
                />}
            </div>
        </div>

    )
}
export default ListItem