import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALL_EXAMPLE_ITEMS } from '../../../../../../src/assets/examples/index';

const EXAMPLE_PADDING_TOP_BOTTOM = 112;
const PREVENT_MAX_HEIGHT = 1000;

function findMaxHeightInDOM(child) {
  let maxHeight = 0;
  for (let i = 0, len = child.length; i < len; i++) {
    let domHeight = child[i].scrollHeight;

    if (domHeight > maxHeight && domHeight < PREVENT_MAX_HEIGHT) {
      maxHeight = domHeight;
    }

    if (child[i].children.length > 0) {
      domHeight = findMaxHeightInDOM(child[i].children);
      if (domHeight > maxHeight && domHeight < PREVENT_MAX_HEIGHT) {
        maxHeight = domHeight;
      }
    }
  }
  return maxHeight;
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  selectedExample;
  componentName;

  iframeWrapperElement;

  cdkOverlayPaneElement;

  selectPanelElement;

  dialogElement;

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: any
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.componentName = params.name;
      this.selectedExample = ALL_EXAMPLE_ITEMS[params['name']];
    });
  }

  ngOnInit() {
    this.setHeightOnDOMReady();
  }

  setHeightOnDOMReady() {
    document.addEventListener('DOMContentLoaded', () => {
      this.iframeWrapperElement = document.querySelector(
        '.viewport-iframe-wrapper'
      );
      this.sendHeightMessage(
        findMaxHeightInDOM(
          document.querySelector('.viewport-iframe-wrapper').children
        ) + EXAMPLE_PADDING_TOP_BOTTOM
      );
      this.setHeightWhenDOMMutate();
    });
  }

  setHeightWhenDOMMutate() {
    // most for dialog or dropdown example cause they will not effect body height...
    const target = document.querySelector('body');

    const config = {
      attributes: true,
      attributeOldValue: false,
      characterData: true,
      characterDataOldValue: false,
      childList: true,
      subtree: true
    };
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          let totalHeight = 0;
          this.dialogElement = document.querySelector('.mat-dialog-container');
          this.cdkOverlayPaneElement = document.querySelector(
            '.cdk-overlay-connected-position-bounding-box'
          );
          this.selectPanelElement = document.querySelector('.viz-select');
          // content height + padding + dialog
          if (this.dialogElement) {
            totalHeight =
              findMaxHeightInDOM(this.dialogElement.children) +
              findMaxHeightInDOM(this.iframeWrapperElement.children) +
              EXAMPLE_PADDING_TOP_BOTTOM;
            this.sendHeightMessage(totalHeight);
            // content height + padding + dialog
          } else if (this.cdkOverlayPaneElement) {
            totalHeight =
              findMaxHeightInDOM(this.cdkOverlayPaneElement.children) +
              findMaxHeightInDOM(this.iframeWrapperElement.children) +
              EXAMPLE_PADDING_TOP_BOTTOM;
            this.sendHeightMessage(totalHeight);
            // content height + padding + select
          } else if (this.selectPanelElement) {
            totalHeight =
              256 +
              findMaxHeightInDOM(this.iframeWrapperElement.children) +
              EXAMPLE_PADDING_TOP_BOTTOM;
            this.sendHeightMessage(totalHeight);
            // content height + padding
          } else {
            totalHeight =
              findMaxHeightInDOM(this.iframeWrapperElement.children) +
              EXAMPLE_PADDING_TOP_BOTTOM;
            this.sendHeightMessage(totalHeight);
          }
        }
      }
    });

    observer.observe(target, config);
  }

  sendHeightMessage(height) {
    window.parent.postMessage(
      JSON.stringify({
        [this.componentName]: height
      }),
      '*'
    );
  }
}
