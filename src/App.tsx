import * as React from "react";

import './index.scss'

import {useEffect, useState} from "react";
import {NewAgentType} from "./type";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Content, {AgentType} from "./components/Content/Content";
import {changePopover, deleteResource, setNewAgents} from "./redux/action";
import {fetchAgents} from "./server/server";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import * as Actions from './redux/action'

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
  // @ts-ignore
  useEffect(async ()=>{

    await fetchAgents().then(
      res=> {
        if (res.data) {
          setAgents(res.data)
          setNewAgents(res.data)
        }
      }
    )


  },[])


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
      />}
      <Footer/>

    </div>
  );

}

const mapStateToProps = (state: Array<NewAgentType>) => ({
  newAgents: state
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

