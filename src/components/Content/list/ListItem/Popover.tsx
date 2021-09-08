import * as React from "react";
import 'react-dom'
import '../../style/index.scss'
import {useEffect, useState} from "react";
import {NewAgentType} from "../../../../type";
import {updateResourceAction} from "../../../../server/server";

interface PopoverProps {
  IfPopoverWindowOpen: (id: number, status: boolean) => void
  agentShow: NewAgentType
  addResources: (id: number, resources: Array<string>) => void
  id: number
  checkIfResourceChange: (resourceChange: boolean) => void
  ifResourceChange: boolean
}

const Popover = ({
                   IfPopoverWindowOpen,
                   agentShow,
                   addResources,
                   id,
                   checkIfResourceChange,
                   ifResourceChange
                 }: PopoverProps) => {
  const [newResources, setNewResources] = useState('')
  const [popoverInput, setPopoverInput] = useState('')

  const inputRef = React.createRef<HTMLDivElement>();
  useEffect(() => {
    document.addEventListener('click', handleClickOutsidePopover)
    return () => {
      document.removeEventListener('click', handleClickOutsidePopover)
    }
  }, [popoverInput])


  const handlePopoverInput = (e: any) => {
    setPopoverInput(e.target.value)
    setNewResources(e.target.value)
  }
  const handleCloseWindow = (id: number) => {
    IfPopoverWindowOpen(id, false)
  }

  const handleAddResource = async (id: number, newResources: string) => {
    const resourcesAdd = newResources.split(',')
    await updateResourceAction(id, [...agentShow.resources, ...(resourcesAdd)])
    addResources(id, resourcesAdd)
    checkIfResourceChange(!ifResourceChange)
    IfPopoverWindowOpen(id, false)
    setPopoverInput('')
  }


  const handleClickOutsidePopover = (e: Event) => {
    if (!inputRef.current) {
      return
    }

    if (!inputRef.current.contains(e.target as Node) && inputRef.current !== e.target) {
      IfPopoverWindowOpen(id, false)
    }
  }

  return (
    <section className='popover-section' ref={inputRef}>
      <div className="popover">
        <div className="popover_content">
          <div className="triangle"/>
          <p>Separte multiple resource name with commas</p>
          <input type="text" name="" placeholder={`e.g.Chrome,Firefox`}
                 value={popoverInput}
                 onChange={(e) => handlePopoverInput(e)}

          />
          <div className="btns">
            <button type="button" className="add"
                    onClick={() => handleAddResource(agentShow.id, newResources)}>Add Resources
            </button>
            <button type="button" className="cancel" name="button"
                    onClick={() => handleCloseWindow(agentShow.id)}>Cancel
            </button>
          </div>
          <i
            className="close_btn icofont-close"
            onClick={() => handleCloseWindow(agentShow.id)}/>
        </div>
      </div>
    </section>
  )
}
export default Popover
