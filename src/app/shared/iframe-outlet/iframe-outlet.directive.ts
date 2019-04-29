import {
  Directive,
  Input,
  TemplateRef,
  ElementRef,
  OnInit,
  ApplicationRef,
  Injector,
  ComponentFactoryResolver,
  ViewContainerRef,
  SimpleChanges
} from '@angular/core';
import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: 'iframe[ngeIframeOutlet]:not([src]):not([srcdoc])'
})
export class IframeOutletDirective implements OnInit {
  @Input()
  ngeIframeOutlet: TemplateRef<any> | undefined;

  @Input()
  ngeIframeOutletContext: Object | undefined;

  private _iframeDocument: Document;
  private _portalOutlet: DomPortalOutlet;
  constructor(
    private element: ElementRef,
    private _appRef: ApplicationRef,
    private _injector: Injector,
    private _resolver: ComponentFactoryResolver,
    private _vcr: ViewContainerRef
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._iframeDocument =
      this.element.nativeElement.contentDocument ||
      this.element.nativeElement.contentWindow.document;

    this._prepareIframeDocument(this._iframeDocument);

    this._portalOutlet = new DomPortalOutlet(
      this._iframeDocument.body,
      this._resolver,
      this._appRef,
      this._injector
    );

    this._attach(this.ngeIframeOutlet)
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   if ('ngeIframeOutlet' in changes && changes.ngeIframeOutlet.currentValue) {
  //     this._attach(this.ngeIframeOutlet);
  //   }
  // }

  ngOnDestroy() {
    this._portalOutlet.dispose();
  }

  private _attach(templateRef: TemplateRef<any>) {
    this._detach();

    if (templateRef instanceof TemplateRef) {
      this._portalOutlet.attachTemplatePortal(
        new TemplatePortal(templateRef, this._vcr, this.ngeIframeOutletContext)
      );
      this._copyDocumentStyleSheets();
    }
  }

  private _detach() {
    if (!this._portalOutlet.hasAttached()) return;

    this._portalOutlet.detach();
    this._clearIframeStyleSheets();
  }

  private _getStyleSheetsFromDocument(document: Document) {
    return document.head.querySelectorAll('link[rel=stylesheet], style');
  }

  private _copyDocumentStyleSheets() {
    const documentStyleSheets = this._getStyleSheetsFromDocument(document);

    for (let node of Array.from(documentStyleSheets)) {
      this._iframeDocument.head.appendChild(node.cloneNode(true));
    }
  }

  private _clearIframeStyleSheets() {
    const iframeStyleSheets = this._getStyleSheetsFromDocument(
      this._iframeDocument
    );

    for (let node of Array.from(iframeStyleSheets)) {
      node.parentNode!.removeChild(node);
    }
  }

  private _prepareIframeDocument(iframeDocument: Document) {
    // Ensures ability to append children to the iframe body
    iframeDocument.open();
    iframeDocument.close();

    // Ensure navigation within current document instead of iframe
    const base = document.createElement('BASE') as HTMLBaseElement;
    base.target = '_parent';
    iframeDocument.head.appendChild(base);
  }
}
