import * as React from "react";
import 'react-dom'
import './style/index.scss'

const MenuItem = () => {
    const menuEachLineContent = 'bjstdmngbgr02/Acceptance_test'
    const menuArray: Array<string> = []
    for (let i = 0; i < 11; i++) {
        menuArray.push(menuEachLineContent)
    }
    return (
        <ul>
            {menuArray.map((menuEachLineContent, index) =>
                <li key={index}>{menuEachLineContent}</li>
            )}
        </ul>
    )
}
export default MenuItem