import {NewAgentType} from "../type";
import {CHANGE_POPOVER, DELETE_RESOURCE, SET_NEW_AGENTS, UPDATE_RESOURCES} from "../shared/constants";

const initialState:Array<NewAgentType>=[]


export interface AgentsActionTypes {
    type: string,
    payload: {
        agent: NewAgentType;
        agents: NewAgentType[];
        id: number;
        status: boolean;
        resource: string;
        resources:Array<string>
        resourceName:string
    }
}

// @ts-ignore
export default function agentReducer(state=initialState,action:AgentsActionTypes): Array<NewAgentType> {
    switch (action.type) {
        case SET_NEW_AGENTS:
            const newState: Array<NewAgentType> = []
            action.payload.agents.map((agent) => newState.push({...agent, showPopover: false}))
            return newState
        case CHANGE_POPOVER:
            return state.map((agent:NewAgentType) => {
                        if (agent.id === action.payload.id) {
                            return {...agent, showPopover: action.payload.status}
                        }
                        return agent
                    }
                )
        case UPDATE_RESOURCES:
        return state.map((agent:NewAgentType) => {
                if (agent.id === action.payload.id) {
                 return   {...agent, resources: [...agent.resources, ...action.payload.resources]}
                }
                return agent
            }
        )
        case DELETE_RESOURCE:
            return state.map(agent => {
                        if (agent.id === action.payload.id) {
                            const resourcesAddArray = agent.resources.filter(resource => resource !== action.payload.resourceName)
                            return {...agent, resources: resourcesAddArray}
                        }
                        return agent
                    }
                )

        default:
            return state

    }
}
