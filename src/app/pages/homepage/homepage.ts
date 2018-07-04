import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [],
  exports: [HomepageComponent],
  declarations: [HomepageComponent],
})
export class HomepageModule {}
