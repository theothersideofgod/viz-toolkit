import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

interface Link {
  /* id of the section*/
  id: string;

  /* header type h3/h4 */
  type: string;

  /* If the anchor is in view of the page */
  active: boolean;

  /* name of the anchor */
  name: string;

  /* top offset px of the anchor */
  top: number;
}

@Component({
  selector: 'table-of-contents',
  styleUrls: ['./table-of-contents.scss'],
  templateUrl: './table-of-contents.html'
})
export class TableOfContents implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  links: Link[] = [];
  @Input()
  container: string;
  @Input()
  headerSelectors = '.docs-markdown-h3,.docs-markdown-h4';

  _rootUrl = this._router.url.split('#')[0];
  private _scrollContainer: any;
  private _destroyed = new Subject();
  private _urlFragment = '';
  private _latestClick = '';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _element: ElementRef,
    @Inject(DOCUMENT) private _document: Document
  ) {
    // this._router.events.pipe(takeUntil(this._destroyed)).subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     const rootUrl = _router.url.split('#')[0];
    //     if (rootUrl !== this._rootUrl) {
    //       this.links = this.createLinks();
    //       this._rootUrl = rootUrl;
    //     }
    //   }
    // });
    // this._route.fragment.pipe(takeUntil(this._destroyed)).subscribe(fragment => {
    //   this._urlFragment = fragment;
    //   const target = document.getElementById(this._urlFragment);
    //   if (target) {
    //     target.scrollIntoView();
    //   }
    // });
  }

  ngOnInit(): void {
    // On init, the sidenav content element doesn't yet exist, so it's not possible
    // to subscribe to its scroll event until next tick (when it does exist).
    Promise.resolve().then(() => {
      this._scrollContainer = this.container
        ? this._document.querySelectorAll(this.container)[0]
        : window;

      if (this._scrollContainer) {
        fromEvent(this._scrollContainer, 'scroll')
          .pipe(
            takeUntil(this._destroyed),
            debounceTime(10)
          )
          .subscribe(() => this.onScroll());
      }
    });
  }

  ngAfterViewInit() {
    this.updateScrollPosition();
  }

  ngOnDestroy(): void {
    this._destroyed.next();
  }

  updateScrollPosition(): void {
    this.links = this.createLinks();

    const target = document.getElementById(this._urlFragment);
    if (target) {
      target.scrollIntoView();
    }
  }

  clickNav(i) {
    this._latestClick = i;
    this._clickScroll();
    setTimeout(() => {
      this._latestClick = '';
    }, 1000);
  }

  /** Gets the scroll offset of the scroll container */
  private getScrollOffset(): number {
    const { top } = this._element.nativeElement.getBoundingClientRect();
    if (typeof this._scrollContainer.scrollTop !== 'undefined') {
      return this._scrollContainer.scrollTop + top;
    } else if (typeof this._scrollContainer.pageYOffset !== 'undefined') {
      return this._scrollContainer.pageYOffset + top;
    }
  }

  private createLinks(): Link[] {
    const links = [];
    const headers = Array.from(
      this._document.querySelectorAll(this.headerSelectors)
    ) as HTMLElement[];

    headers.shift();

    if (headers.length) {
      for (const header of headers) {
        // remove the 'link' icon name from the inner text
        const name = header.innerText.trim().replace(/^link/, '');
        const { top } = header.getBoundingClientRect();
        links.push({
          name,
          type: header.tagName.toLowerCase(),
          top: top,
          id: header.id,
          active: false
        });
      }
    }
    return links;
  }

  private onScroll(): void {
    for (let i = 0; i < this.links.length; i++) {
      this.links[i].active = this.isLinkActive(
        this.links[i],
        this.links[i + 1]
      );
    }
  }

  private _clickScroll() {
    this.links = this.links.map((item, i) => ({
      ...item,
      active: i === +this._latestClick ? true : false
    }));
  }

  private isLinkActive(currentLink: any, nextLink: any): boolean {
    // A link is considered active if the page is scrolled passed the anchor without also
    // being scrolled passed the next link
    const scrollOffset = this.getScrollOffset();

    return (
      scrollOffset >= currentLink.top &&
      !(nextLink && nextLink.top < scrollOffset)
    );
  }

  redirect(id) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    // location.hash = id
  }
}
