import { Component, Input, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ComponentPortal } from '@angular/cdk/portal';

import { ALL_EXAMPLE_ITEMS } from '../../../assets/examples';
import { CopierService } from '../copier/copier.service';


@Component({ 
  selector: 'example-viewer',
  templateUrl: './example-viewer.html',
  styleUrls: ['./example-viewer.scss']
})
export class ExampleViewer {
  /** Component portal for the currently displayed example. */
  selectedPortal: ComponentPortal<any>;

  /** String key of the currently displayed example. */
  _example: string;

  exampleData: any;

  /** Whether the source for the example is being displayed. */
  showSource = false;

  //lucas
  platform:string = 'desktop_mac'
  compRef:any
  @ViewChild('iframe') iframe: ElementRef;
  @ViewChild('exampleViewBody') exampleViewBody: ElementRef;
  //lucas


  constructor(
    private snackbar: MatSnackBar,
    private copier: CopierService,
    //lucas
    private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver) { }
    

  get example() {
    return this._example;
  }

  @Input()
  set example(example: string) {
    if (example && ALL_EXAMPLE_ITEMS[example]) {
      this._example = example;
      this.exampleData = ALL_EXAMPLE_ITEMS[example];
      this.selectedPortal = new ComponentPortal(this.exampleData.component);
    } else {
      console.log('MISSING EXAMPLE: ', example);
    }
  }

  toggleSourceView(): void {
    this.showSource = !this.showSource;
  }

  exampleFileUrl(extension: string) {
    return `/assets/examples/${this.example}/${this.example}.example.${extension.toLowerCase()}${extension.toLowerCase() === 'html' ? '': '.html'}`;
  }

  ngOnInit() {
    // this.iframe.nativeElement.src = "http://a.html"
  }

  
  insertComponentToIframe() {

    // this.iframe.nativeElement.appendChild()
    let doc = this.iframe.nativeElement.contentDocument || 
               this.iframe.nativeElement.contentWindow;

    let header = document.getElementsByTagName('head')[0].cloneNode(true)


    doc.getElementsByTagName('head')[0].remove()
    doc.getElementsByTagName('html')[0].prepend(header)


    

    // iframeHeader.appendChild(document.getElementsByTagName('head')[0])

    doc.body.innerHTML = ""       

    setTimeout(()=>{
      const compFactory = this.resolver.resolveComponentFactory(this.exampleData.component);
      this.compRef = this.vcRef.createComponent(compFactory);
      doc.body.appendChild(this.compRef.location.nativeElement);



      if(this._isScroll(this.exampleViewBody)){

        console.log(this.iframe.nativeElement.clientWidth)
        console.log(this.exampleViewBody.nativeElement.clientWidth)
  
        let ratio = (this.exampleViewBody.nativeElement.clientWidth) / 1200
  
        this.iframe.nativeElement.style.transform = `scale(${ratio})`
  
        console.log(this.exampleViewBody.nativeElement.clientWidth - this.iframe.nativeElement.clientWidth)
  
        let scrollCenter = (this.exampleViewBody.nativeElement.scrollWidth - this.exampleViewBody.nativeElement.clientWidth) / 2
  
        this.exampleViewBody.nativeElement.scrollLeft = scrollCenter
      
  
      
        
      }



    },0)


   

  }


  _isScroll(e:ElementRef) {
    return e.nativeElement.clientWidth < e.nativeElement.scrollWidth;
  }
}
