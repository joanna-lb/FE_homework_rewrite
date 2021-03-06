import * as React from "react";
import 'react-dom'
import '../../style/index.scss'
import {updateResourceAction} from "../../../../server/server";
import {nanoid} from "nanoid";


interface TagProps {
  handleChangePopover: (id: number, status: boolean) => void
  resources: Array<string>
  id: number
  status: string
  deleteResource: (id: number, resourceName: string) => void
  checkIfResourceChange: (resourceChange: boolean) => void
  ifResourceChange: boolean
}

const Tag = ({
               ifResourceChange,
               handleChangePopover,
               resources,
               id,
               status,
               deleteResource,
               checkIfResourceChange
             }: TagProps) => {
  const handleDeleteTag = async (id: number, resource: string) => {
    await updateResourceAction(id, resources.filter(originResource => originResource !== resource))
    deleteResource(id, resource)
    checkIfResourceChange(!ifResourceChange)
  }


  return (
    <>
      <div className="tag-footer">
        <button type="button"
                onClick={() => handleChangePopover(id, true)}>
          {<i className="icofont-plus"></i>}
        </button>
        {resources.map(resource =>
          <span className="tag" key={nanoid()}>
                                    {resource}
            {<i
              className="icofont-trash"
              onClick={() => handleDeleteTag(id, resource)}/>}
                          </span>
        )}
        {status === 'building' &&

        <button type="button" className="deny">
          {<i className="icofont-ban"></i>}
          &nbsp;
          Deny
        </button>
        }
      </div>
    </>
  )
};
export default Tag
