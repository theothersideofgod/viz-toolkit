import { Component, OnInit } from '@angular/core';

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
  selector: 'tree-checkbox',
  templateUrl: 'tree-checkbox.component.html',
  styleUrls: ['tree-checkbox.component.css']
})
export class TreeCheckboxComponent implements OnInit {
  tree: any = [
    {
      name: 'Group1',
      isExpanded: true,
      checked: false,
      children: [
        {
          name: 'item1',
          isExpanded: true,
          checked: false,
          children: []
        },
        {
          name: 'item2',
          isExpanded: true,
          checked: false,
          children: []
        }
      ]
    },
    {
      name: 'Group2',
      isExpanded: true,
      checked: false,
      children: [
        {
          name: 'item3',
          isExpanded: true,
          checked: false,
          children: []
        },
        {
          name: 'item4',
          isExpanded: true,
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

export const TreeCheckboxData = {
  name: 'TreeCheckbox'
};
