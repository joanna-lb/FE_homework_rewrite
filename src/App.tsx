import * as React from "react";

import './index.scss'

import {useEffect, useState} from "react";
import {NewAgentType} from "./type";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Content from "./components/Content/Content";
import {AgentType} from "./components/Content/list/List";

import {fetchAgents} from "./server/server";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import * as Actions from './redux/action'
import {checkIfResourcesLengthChange} from "./shared/functions";
import {Istate} from "./redux/reducer";

interface DispatchProps {
  newAgents:Array<NewAgentType>
  setNewAgents:(agents:Array<AgentType>)=>void
  changePopover:(id:number,status:boolean)=>void
  updateResources:(id:number, resources:Array<string>)=>void
  deleteResource:(id: number, resourceName: string)=>void
}

function App({newAgents,setNewAgents,changePopover,updateResources,deleteResource}:DispatchProps) {
  const initialAgents:Array<AgentType>=[]
  const[agents,setAgents]=useState(initialAgents)
  const[ifResourceChange,setIfResourceChange]=useState(false)

  // @ts-ignore
  useEffect(()=>{
    try{
      fetchAgents().then(
        res=> {
          if (res.data) {
            setAgents(res.data)
            setNewAgents(res.data)
          }
        }
      )
    }catch (e) {
      throw  e
    }

  },[ifResourceChange])

  const checkIfResourceChange=(ifChange:boolean)=>{
    setIfResourceChange(ifChange)
  }



  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Route  component={Menu}/>
      </BrowserRouter>
      {agents.length>0 &&
      <Content
        updateResources={updateResources}
        newAgents={newAgents}
        agents={agents}
        changePopover={changePopover}
        deleteResource={deleteResource}
        checkIfResourceChange={checkIfResourceChange}
        ifResourceChange={ifResourceChange}
      />}
      <Footer/>

    </div>
  );

}

const mapStateToProps = (state:Istate) => ({
  newAgents: state.agents
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

