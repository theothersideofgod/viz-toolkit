import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-configurable',
  templateUrl: 'checkbox-configurable.component.html',
  styleUrls: ['checkbox-configurable.component.css']
})
export class CheckboxConfigurableComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  ngOnInit() {}
}

export const CheckboxConfigurableData = {
  name: 'CheckboxConfigurable'
};
