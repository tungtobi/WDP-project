import React, { Component } from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';

import TreeNode from './TreeNode';

const data = {
  '/root': {
    path: '/root',
    type: 'folder',
    isRoot: true,
    children: ['/root/thinh', '/root/thu'],
  },
  '/root/thinh': {
    path: '/root/thinh',
    type: 'folder',
    children: ['/root/thinh/readme.md'],
  },
  '/root/thinh/readme.md': {
    path: '/root/thinh/readme.md',
    type: 'file',
    content: 'Hello ban'
  },
  '/root/thu': {
    path: '/root/thu',
    type: 'folder',
    children: ['/root/thu/projects', '/root/thu/111'],
  },
  '/root/thu/projects': {
    path: '/root/thu/projects',
    type: 'folder',
    children: ['/root/thu/projects/treeview'],
  },
  '/root/thu/projects/treeview': {
    path: '/root/thu/projects/treeview',
    type: 'folder',
    children: [],
  },
  '/root/thu/111': {
    path: '/root/thu/111',
    type: 'folder',
    children: [],
  },
};

export default class Tree extends Component {

  state = {
    nodes: data,
  };

  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes = (node) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  }  

  onToggle = (node) => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  }

  onNodeSelect = node => {
    const { onSelect } = this.props;
    onSelect(node);
  }

  render() {
    const rootNodes = this.getRootNodes();
    return (
      <div>
        { rootNodes.map(node => (
          <TreeNode 
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
          />
        ))}
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired,
};