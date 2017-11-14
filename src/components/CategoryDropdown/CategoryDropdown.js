import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class CategoryDropdown extends Component {
    render() {
        return (
            <div className="navbar-header" style={{paddingTop: '14px'}}>
                <DropdownButton title="Default button" id="dropdown-size-medium">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
            </div>
        )
    }

}

export default CategoryDropdown