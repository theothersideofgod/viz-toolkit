import { Component, OnInit, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material'

@Component({
	selector: 'principles',
  templateUrl: 'principles.component.html',
  styleUrls: ['principles.component.scss']
})

export class PrinciplesComponent implements OnInit {

	ngOnInit() { }
}

@NgModule({
  imports: [MatButtonModule],
  exports: [PrinciplesComponent],
  declarations: [PrinciplesComponent],
})
export class PrinciplesModule {}