import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

import {
  Input,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { ResizeSensor } from 'css-element-queries';
import { iframeResizerContentWindow, iframeResizer } from 'iframe-resizer';
import { MatNativeDateModule } from '@angular/material';
import { query } from '@angular/animations';

@Component({
  selector: 'example-viewport',
  templateUrl: './example-viewport.html',
  styleUrls: ['./example-viewport.scss']
})
export class ExampleViewport implements OnInit {
  template = `
      
  `
  constructor(){

  }
  ngOnInit(){

  }
}
// export class ExampleViewport implements OnInit {
//   @ViewChild('viewportIframe') viewportIframe;
//   @Input('componentType') componentType;
//   // @Input('breakPoint') breakPoint:number;
//   @Input('platform') platform;
//   componentRef: any;
//   height: number;
//   constructor(
//     private vcRef: ViewContainerRef,
//     private resolver: ComponentFactoryResolver
//   ) {}

//   ngOnInit() {
//     // this.injectHead();
//   }

//   injectHead() {
//     //inject header
//     let head = document.getElementsByTagName('head')[0].cloneNode(true);
//     let body = document.body.cloneNode(true)

//     let viewportIframeDoc = this.getViewportIframeDoc();
//     viewportIframeDoc.getElementsByTagName('head')[0].remove();
//     viewportIframeDoc.getElementsByTagName('body')[0].remove();
//     viewportIframeDoc.getElementsByTagName('html')[0].prepend(head);
//     viewportIframeDoc.getElementsByTagName('html')[0].appendChild(body);
//     //inject view container
//     let containerDiv = document.createElement('div');
//     containerDiv.id = 'viewport-container';
//     containerDiv.style.textAlign = 'center';

//     //inject component
//     setTimeout(() => {
//       this.componentRef = this.createComponent(this.componentType);
//       containerDiv.appendChild(this.componentRef.location.nativeElement);

//       viewportIframeDoc.body.appendChild(containerDiv);

//       viewportIframeDoc.body.querySelector('app-root')



//       //watch inner div change or not

//       // new ResizeSensor(containerDiv, () => {
//       //   this.viewportIframe.nativeElement.height =
//       //     containerDiv.offsetHeight + 'px';
//       // });
//       let viewportIframe = this.viewportIframe.nativeElement
//       // iframeResizer({}, viewportIframe)
//     }, 2000);
//   }

//   getViewportIframeDoc() {
//     return (
//       this.viewportIframe.nativeElement.document ||
//       this.viewportIframe.nativeElement.contentDocument ||
//       this.viewportIframe.nativeElement.contentWindow.document
//     );
//   }
//   createComponent(componentType) {
//     const compFactory = this.resolver.resolveComponentFactory(componentType);
//     this.vcRef.clear();
//     return this.vcRef.createComponent(compFactory);
//   }

//   getBreakpoint(platform) {
//     return {
//       desktop_mac: 1200,
//       tablet_mac: 768,
//       phone_iphone: 375
//     }[platform];
//   }

//   ngAfterViewInit() {
//     this.injectHead();
//   }

//   ngAfterViewChecked() {}
// }
 