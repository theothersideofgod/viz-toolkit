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
  @Input() type: VizHeaderType;
  @Output() rightBtnClick = new EventEmitter();
  @Output() hamburgerClick = new EventEmitter();
  isDrop: Boolean = false;

  constructor() {}

  rightBtnOnClick() {
    this.rightBtnClick.emit()
    this.isDrop = !this.isDrop
  }

  hamburgerOnClick() {
    this.hamburgerClick.emit()
  }
}
