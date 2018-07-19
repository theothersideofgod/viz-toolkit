import { Component, OnInit, ContentChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';

const nodeCount = node => {
  return node.children.length;
};

const checkedNodeCount = node => {
  let count = 0;
  node.children.forEach(subNode => {
    if (subNode.checked) {
      count++;
    }
  });
  return count;
};

const toggleAllChildNode = (node, status) => {
  node.children.forEach(subNode => {
    subNode.checked = status;
    toggleAllChildNode(subNode, status);
  });
};

const partialCheckedNode = node => {
  let checkNodes = 0;
  if (node.children.length > 0) {
    node.children.forEach(subNode => {
      checkNodes += partialCheckedNode(subNode);
    });
  } else if (node.checked) {
    checkNodes++;
  }
  return checkNodes;
};

@Component({
  selector: 'app-tree-basic',
  templateUrl: './tree-basic.component.html',
  styleUrls: ['./tree-basic.component.css']
})
export class TreeBasicComponent implements OnInit {
  tree: any = [
    {
      name: 1,
      isExpanded: false,
      checked: false,
      children: [
        {
          name: 2,
          isExpanded: false,
          checked: false,
          children: [
            {
              name: 3,
              isExpanded: false,
              checked: false,
              children: []
            },
            {
              name: 4,
              isExpanded: false,
              checked: false,
              children: []
            }
          ]
        },
        {
          name: 22,
          isExpanded: false,
          checked: false,
          children: [
            {
              name: 33,
              isExpanded: false,
              checked: false,
              children: []
            },
            {
              name: 44,
              isExpanded: false,
              checked: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      name: 'aaa',
      isExpanded: false,
      checked: false,
      children: [
        {
          name: 'bbb',
          isExpanded: false,
          checked: false,
          children: []
        },
        {
          name: 'ccc',
          isExpanded: false,
          checked: false,
          children: []
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}

  descendantsAllSelected(node) {
    //if node have children, count if checked node equal to node count
    if (node.children.length > 0) {
      let status = nodeCount(node) === checkedNodeCount(node);
      node.checked = status;
      return status;
    }
    //if node dont have children, just return the node check status
    return node.checked;
  }

  descendantsPartiallySelected(node) {
    if (node.children.length > 0) {
      return partialCheckedNode(node) && !this.descendantsAllSelected(node);
    }
    return false;
  }

  toggle(node) {
    //if node have children, toggle all children node status
    if (node.children.length > 0) {
      toggleAllChildNode(node, !node.checked);
    }
    //if node dont have children, toggle itself
    node.checked = !node.checked;
  }
}

export const TreeBasicData = {
  name: 'Tree'
};
