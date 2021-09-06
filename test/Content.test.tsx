import React from "react";
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Filter, {FilterProp} from '../src/components/Content/Filter'
import ListItem, {ListItemProps} from "../src/components/Content/list/ListItem/ListItem";
import {NewAgentType} from "../src/type";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import {render} from './test.utils'
import '@babel/core/lib/gensync-utils/async'

const virtualAgent={
  "name": "bjstdmngbdr08.thoughtworks.com",
  "os": "windows",
  "status": "building",
  "type": "Virtual",
  "ip": "192.168.1.80",
  "location": "/var/lib/cruise-agent",
  "resources": [
    "firefox",
    "safari",
    "firefox",
    "chrome",
    "firefox",
    "1231324234",
    "2312",
    "sdfsdf"
  ],
  "id": 1,
  "iconSrc": "/img/windows.8d3fce5d.png",
  "showPopover": false
}

const showPopoverAgent={
  "name": "bjstdmngbdr08.thoughtworks.com",
  "os": "windows",
  "status": "building",
  "type": "Physical",
  "ip": "192.168.1.80",
  "location": "/var/lib/cruise-agent",
  "resources": [
    "firefox",
    "safari",
    "firefox",
    "chrome",
    "firefox",
    "1231324234",
    "2312",
    "sdfsdf"
  ],
  "id": 1,
  "iconSrc": "/img/windows.8d3fce5d.png",
  "showPopover": true
}



function renderFilter(props: Partial<FilterProp> = {}) {
  const defaultFilterProps: FilterProp = {
    handleChangeShowContent() {
      return;
    },
    filterType: 'Virtual'
  };

  return render(<Filter{...defaultFilterProps} {...props} />)
}

describe('Filter component', () => {
  test('should show filter words on the web', () => {

    renderFilter()
    expect(screen.getByText(/Virtual/i)).toBeInTheDocument()
    expect(screen.getByText(/Physical/i)).toBeInTheDocument()
    expect(screen.getByText(/All/i)).toBeInTheDocument()
  })


})

describe('List component', ()=>{
  test('should render list item',async ()=>{
    function renderListItem(props: Partial<ListItemProps> = {}) {
      const defaultProps: ListItemProps = {
        handleChangePopover() {
          return;
        },
        updateResources() {
          return;
        },
        deleteResource() {
          return;
        },
        checkIfResourceChange() {
          return;
        },
        ifResourceChange: false,
        agent:virtualAgent
      };
      return render(<ListItem{...defaultProps} {...props} />);
    }
    renderListItem()
    expect(await screen.getByText(/1231324234/i)).toBeInTheDocument()
  })

  test('should show popover when it is true',async ()=>{
    function renderListItem(props: Partial<ListItemProps> = {}) {
      const defaultProps: ListItemProps = {
        handleChangePopover() {
          return;
        },
        updateResources() {
          return;
        },
        deleteResource() {
          return;
        },
        checkIfResourceChange() {
          return;
        },
        ifResourceChange: false,
        agent:showPopoverAgent
      };
      return render(<ListItem{...defaultProps} {...props} />);
    }
    renderListItem()
    expect(await screen.getByText(/Add Resources/i)).toBeInTheDocument()
  })

})
