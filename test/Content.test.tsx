import React, {Props} from "react";
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Filter, {FilterProp} from '../src/components/Content/Filter'
import ListItem, {ListItemProps} from "../src/components/Content/list/ListItem/ListItem";
import {NewAgentType} from "../src/type";
import userEvent from "@testing-library/user-event";


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
    agent:
      {
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

  };
  return render(<ListItem{...defaultProps} {...props} />);
}

function renderFilter(props: Partial<FilterProp> = {}) {
  const defaultFilterProps: FilterProp = {
    handleChangeShowContent() {
      return;
    },
    filterType: 'All'
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

  test('when click virtual should show certain list item', () => {
    renderFilter()
    userEvent.click(screen.getByText(/Virtual/i))
    renderListItem();
    // expect(screen.getAllByRole('listitem').length).toBe()
  })
})
