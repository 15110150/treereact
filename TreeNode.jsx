import React, { Component } from 'react';


export default class TreeNode extends Component {

    getNodeLabel = (node) => node.DisplayKey

    createLevel = (parent, index) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      return parent.concat(index)
    }

    render (){
        const { index, node, getChildNodes, level, parent, onNodeSelect, hanfleClick } = this.props;
    
        return (
            <React.Fragment>
                <div level={level} className={"node"} style={{ marginLeft: (level.length - 1) * 20 }}>
                {getChildNodes(node).length > 0 ? node.isOpen == true ?
                   <div><i className='fas fa-angle-down'></i></div>
                   : <div><i className='fas fa-angle-right'></i></div>
                   : null
                  }
                  <span><input type="checkbox" checked={node.isCheck == true ? true : false} onChange={() => hanfleClick(node, index, level)}></input></span>

                    <span role="button" onClick={() => onNodeSelect(index, level)}>
                        {this.getNodeLabel(node)}
                    </span>
                </div>
    
                {(node.isOpen == true) && getChildNodes(node).map((childNode, i) => (
                    <TreeNode   
                        {...this.props}
                        index = {i}
                        parent = {node}
                        node={childNode}
                        key={i}
                        level={node.level.concat(i)}
                    />
                ))}
            </React.Fragment>
        );
                }
    }



