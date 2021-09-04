import {NewAgentType} from "../type";
import {CHANGE_POPOVER, DELETE_RESOURCE, SET_NEW_AGENTS, UPDATE_RESOURCES} from "../shared/constants";

export interface Istate {
  agents:Array<NewAgentType>
}
const initialState:Istate={
  agents:[] as Array<NewAgentType>
}


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
export default function agentReducer(state=initialState,action:AgentsActionTypes): Istate {
    switch (action.type) {
      case SET_NEW_AGENTS:
        const newState:NewAgentType[]=[]
        action.payload.agents.forEach((agent) => newState.push({...agent, showPopover: false}))
        return {
          ...state,
          agents:newState
        }

        case CHANGE_POPOVER:
            return {
              ...state,
             agents: state.agents.map((agent: NewAgentType) => {
                  if (agent.id === action.payload.id) {
                    return {...agent, showPopover: action.payload.status}
                  }
                  return agent
                }
              )
            }
        case UPDATE_RESOURCES:
        return {
          ...state,
          agents:state.agents.map((agent: NewAgentType) => {
              if (agent.id === action.payload.id) {
                return {...agent, resources: [...agent.resources, ...action.payload.resources]}
              }
              return agent
            }
          )
        }
        case DELETE_RESOURCE:
            return {
              ...state,
              agents:state.agents.map(agent => {
                  if (agent.id === action.payload.id) {
                    const resourcesAddArray = agent.resources.filter(resource => resource !== action.payload.resourceName)
                    return {...agent, resources: resourcesAddArray}
                  }
                  return agent
                }
              )
            }
        default:
            return state

    }
}
