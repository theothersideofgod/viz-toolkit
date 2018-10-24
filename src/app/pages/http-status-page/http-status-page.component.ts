import { Component, OnInit, NgModule } from '@angular/core';
import { VizHttpStatusModule } from 'libs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-http-status-page',
  templateUrl: './http-status-page.component.html',
  styleUrls: ['./http-status-page.component.css']
})
export class HttpStatusPageComponent implements OnInit {
  code;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.code = Array.from(event.url).filter(c => c !== '/').join('');
      }
    });
   }

  ngOnInit() {
  }

}



@NgModule({
  imports: [VizHttpStatusModule],
  exports: [HttpStatusPageComponent],
  declarations: [HttpStatusPageComponent],
})
export class HttpStatusPageModule {}


