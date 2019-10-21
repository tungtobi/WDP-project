import React, { Component } from 'react';
import Menu, { SubMenu, MenuItem, MenuItemGroup } from 'rc-menu';
import { withRouter } from 'react-router-dom';
import './css/menubar.css'

class MenuBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="menubar">
                <div className="menu_items">
                    File
                    <div className="items_container">
                        <div className="item_holder">New File</div>
                        <div className="item_holder">New Project</div>
                        <div className="item_divider"></div>
                        <div className="item_holder">Open File</div>
                        <div className="item_holder">Open Project</div>
                        <div className="item_divider"></div>
                        <div className="item_holder">Save</div>
                        <div className="item_holder">Export to zip</div>
                    </div>
                </div>
                <div className="menu_items">
                    Edit
                    <div className="items_container">
                        <div className="item_holder">Undo</div>
                        <div className="item_holder">Redo</div>
                        <div className="item_divider"></div>
                        <div className="item_holder">Cut</div>
                        <div className="item_holder">Copy</div>
                        <div className="item_divider"></div>
                        <div className="item_holder">Find</div>
                        <div className="item_holder">Replace</div>
                    </div>
                </div>
                <div className="menu_items">
                    Selection
                    <div className="items_container">
                        <div className="item_holder">Select All</div>
                    </div>
                </div>
                <div className="menu_items">
                    View
                    <div className="items_container">
                        <div className="item_holder">Command Palette</div>
                    </div>
                </div>
                <div className="menu_items">
                    Go
                    <div className="items_container">
                        <div className="item_holder">
                            Switch Editor
                            <span>
                                <i class="fas fa-angle-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="menu_items">
                    Terminal
                    <div className="items_container">
                        <div className="item_holder">New Terminal</div>
                        <div className="item_divider"></div>
                        <div className="item_holder">Open Terminal</div>
                    </div>
                </div>
                <div className="menu_items">
                    Help
                    <div className="items_container">
                        <div className="item_holder">About</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MenuBar);