import { Input, Component, Output, EventEmitter } from "@angular/core";
export type VizHeaderType = 'primary' | 'rightMenu';

@Component({
  selector: 'viz-header',
  templateUrl: './viz-header.component.html',
  styleUrls: ['./viz-header.component.scss']
})

export class VizHeaderComponent {

  @Input() title: String;
  @Input() userName: string;
  @Input() brandLink: String;
  @Input() svgIcon: String;
  @Input() badge: Number = 0; 
  @Input() type: VizHeaderType;
  @Input() application: boolean;
  @Output() rightBtnClick = new EventEmitter();
  @Output() hamburgerClick = new EventEmitter();
  @Output() moreClick = new EventEmitter();
  isDrop: Boolean = false;

  constructor() {}

  rightBtnOnClick() {
    this.rightBtnClick.emit()
    this.isDrop = !this.isDrop
  }

  hamburgerOnClick() {
    this.hamburgerClick.emit()
  }

  moreOnclick() {
    this.badge = 0
    this.moreClick.emit()
  }
}
