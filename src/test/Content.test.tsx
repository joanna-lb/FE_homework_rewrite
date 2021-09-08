import React from "react";
import {screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Filter, {FilterProp} from '../components/Content/Filter'
import ListItem, {ListItemProps} from "../components/Content/list/ListItem/ListItem";
import {render} from './test.utils'
import '@babel/core/lib/gensync-utils/async'
import Numbers, {NumbersProp} from "../components/Content/Numbers";

const virtualAgent = {
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

const physicalAgent = {
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
  "showPopover": false
}
const showPopoverAgent = {
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


describe('Filter component', () => {
  test('should show filter words on the web', async () => {
    function renderFilter(props: Partial<FilterProp> = {}) {
      const defaultFilterProps: FilterProp = {
        handleChangeShowContent() {
          return;
        },
        filterType: 'Virtual'
      };

      return render(<Filter{...defaultFilterProps} {...props} />)
    }

    renderFilter()
    expect(await screen.getByText(/Virtual/i)).toBeInTheDocument()
    expect(screen.getByText(/Physical/i)).toBeInTheDocument()
    expect(screen.getByText(/All/i)).toBeInTheDocument()
  })
})

describe('List component', () => {
  test('should render list item', async () => {
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
        agent: virtualAgent
      };
      return render(<ListItem{...defaultProps} {...props} />);
    }

    renderListItem()
    expect(await screen.getByText(/1231324234/i)).toBeInTheDocument()
  })

  test('should show popover when it is true', async () => {
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
        agent: showPopoverAgent
      };
      return render(<ListItem{...defaultProps} {...props} />);
    }

    renderListItem()
    expect(await screen.getByText(/Add Resources/i)).toBeInTheDocument()
  })

  test('info header with ip status', async () => {
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
        agent: virtualAgent
      };
      return render(<ListItem{...defaultProps} {...props} />);
    }

    renderListItem()
    expect(await screen.getByText(/192.168.1.80/i)).toBeInTheDocument()
    expect(await screen.getByText(/building/i)).toBeInTheDocument()
  })

  test('info tag with deny button', async () => {
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
        agent: virtualAgent
      };
      return render(<ListItem{...defaultProps} {...props} />);
    }

    renderListItem()
    expect(await screen.getByText(/deny/i)).toBeInTheDocument()
  })

})

describe('test number component', () => {
  test('should show numbers on the web', async () => {
    function renderNumber(props: Partial<NumbersProp> = {}) {
      const defaultProps: NumbersProp = {
        agents: [virtualAgent, physicalAgent]
      };
      return render(<Numbers{...defaultProps} {...props} />);
    }

    renderNumber()
    expect(await screen.getByText(/PHYSICAL/i)).toBeInTheDocument()
    expect(await screen.getByTestId('physical-number')).toHaveTextContent('1')

  })

})
