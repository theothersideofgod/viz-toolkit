import {
  Component,
  OnInit,
  Renderer2,
  Input,
  Host,
  HostBinding
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: '[vizExpand]',
  templateUrl: './viz-expand.component.html',
  styleUrls: ['./viz-expand.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'void',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms ease'))
    ])
  ]
})
export class VizExpandComponent implements OnInit {
  isOpen = false;

  @Input()
  set vizExpand(value: boolean) {
    this.detailExpand = value ? '*' : 'void';
  }
  @HostBinding('@detailExpand') detailExpand = '*';
  constructor(
  ) {}


  ngOnInit() {}
}
