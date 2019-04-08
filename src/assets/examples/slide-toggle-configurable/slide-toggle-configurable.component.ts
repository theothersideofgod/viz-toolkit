import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slide-toggle-configurable',
  templateUrl: 'slide-toggle-configurable.component.html',
  styleUrls: ['slide-toggle-configurable.component.css']
})
export class SlideToggleConfigurableComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;
  ngOnInit() {}
}

export const SlideToggleConfigurableData = {
  name: 'SlideToggleConfigurable'
};
