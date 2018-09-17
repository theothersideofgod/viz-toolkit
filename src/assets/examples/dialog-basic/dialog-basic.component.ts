import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'dialog-basic',
  templateUrl: 'dialog-basic.component.html',
  styleUrls: ['dialog-basic.component.css']
})
export class DialogBasicComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  };

  ngOnInit() {}
}






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
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-contain.component.html',
  styleUrls: ['dialog-contain.component.scss']
})
export class DialogDataExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  tree: any = [
    {
      name: 'Hospitals of the University of Pennsylvania-Penn Presbyterian',
      isExpanded: true,
      checked: false,
      children: []
    },
    {
      name: 'Johns Hopkins Hospitals',
      isExpanded: true,
      checked: false,
      children: [
        {
          name: 'Facility 1',
          isExpanded: true,
          checked: false,
          children: []
        },
        {
          name: 'Facility 2',
          isExpanded: true,
          checked: false,
          children: []
        },
        {
          name: 'Facility 3',
          isExpanded: true,
          checked: false,
          children: []
        }
      ]
    },
    {
      name: 'New York-Presbyterian University Hospital of Columbia and Cornell',
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
  
  onNoClick() {
    this.dialogRef.close()
  }

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

  selectAll(e) {
    console.log(e.checked)
    toggleAllChildNode({children:this.tree}, e.checked)
  }
}

export const DialogBasicData = {
  name: 'DialogBasic'
};
