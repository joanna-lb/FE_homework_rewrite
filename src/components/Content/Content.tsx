import * as React from "react";
import 'react-dom'
import './style/index.scss'
import {useState} from "react";
import Numbers from "./Numbers";
import Filter from "./Filter";






const Content=()=>{
     // const[filterType,setFilterType]=useState(ALL)

    // const handleChangeShowContent=(filterType:string)=>{
    //    setFilterType(filterType)
    // }

    const agents=[{
          "name": "bjstdmngbdr08.thoughtworks.com",
          "os": "windows",
          "status": "building",
          "type": "Virtual",
          "ip": "192.168.1.80",
          "location": "/var/lib/cruise-agent",
          "resources": [
            "firefox",
            "Ubuntu",
            "safari",
            "firefox",
            "chrome",
            "firefox"
          ],
          "id": 1,
          "iconSrc": "/img/windows.8d3fce5d.png",
          "sdfd": ""
        },
        {
          "name": "bjstdmngbdr08.thoughtworks.com",
          "os": "windows",
          "status": "building",
          "type": "Virtual",
          "ip": "192.168.1.80",
          "location": "/var/lib/cruise-agent",
          "resources": [
            "Firefox",
            "Safari",
            "Ubuntu",
            "Chrome"
          ],
          "id": 2
        }]
    return(
        <>
            <section className="content">
                <div className="agent-page">
                    <Numbers
                        agents={agents}
                    />
                  <Filter
                  />
                </div>
            </section>
        </>
)
}
export default Content
