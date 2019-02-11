import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface State {
  value: string;
  viewValue: string;
}

export interface StateGroup {
  disabled?: boolean;
  name: string;
  state: State[];
}

@Component({
  selector: 'select-group-option',
  templateUrl: 'select-group-option.component.html',
  styleUrls: ['select-group-option.component.css']
})
export class SelectGroupOptionComponent implements OnInit {
  stateControl = new FormControl();
  stateGroups: StateGroup[] = [
    {
      name: 'A',
      disabled: false,
      state: [
        { value: 'Alabama', viewValue: 'Alabama' },
        { value: 'Alaska', viewValue: 'Alaska' },
        { value: 'Arizona', viewValue: 'Arizona' },
        { value: 'Arkansas', viewValue: 'Arkansas' }
      ]
    },
    {
      name: 'C',
      disabled: false,
      state: [
        { value: 'California', viewValue: 'California' },
        { value: 'Colorado', viewValue: 'Colorado' },
        { value: 'Connecticut', viewValue: 'Connecticut' }
      ]
    },
    {
      name: 'D',
      disabled: false,
      state: [{ value: 'Delaware', viewValue: 'Delaware' }]
    },
    {
      name: 'F',
      disabled: false,
      state: [{ value: 'Florida', viewValue: 'Florida' }]
    },
    {
      name: 'G',
      disabled: false,
      state: [{ value: 'Georgia', viewValue: 'Georgia' }]
    },
    {
      name: 'H',
      disabled: false,
      state: [{ value: 'Hawaii', viewValue: 'Hawaii' }]
    },
    {
      name: 'I',
      disabled: false,
      state: [
        { value: 'Idaho', viewValue: 'Idaho' },
        { value: 'Illinois', viewValue: 'Illinois' },
        { value: 'Indiana', viewValue: 'Indiana' },
        { value: 'Iowa', viewValue: 'Iowa' }
      ]
    },
    {
      name: 'K',
      disabled: false,
      state: [
        { value: 'Kansas', viewValue: 'Kansas' },
        { value: 'Kentucky', viewValue: 'Kentucky' }
      ]
    },
    {
      name: 'L',
      disabled: false,
      state: [{ value: 'Louisiana', viewValue: 'Louisiana' }]
    },
    {
      name: 'M',
      disabled: false,
      state: [
        { value: 'Maine', viewValue: 'Maine' },
        { value: 'Maryland', viewValue: 'Maryland' },
        { value: 'Massachusetts', viewValue: 'Massachusetts' },
        { value: 'Michigan', viewValue: 'Michigan' },
        { value: 'Minnesota', viewValue: 'Minnesota' },
        { value: 'Mississippi', viewValue: 'Mississippi' },
        { value: 'Missouri', viewValue: 'Missouri' },
        { value: 'Montana', viewValue: 'Montana' }
      ]
    },
    {
      name: 'N',
      disabled: false,
      state: [
        { value: 'Nebraska', viewValue: 'Nebraska' },
        { value: 'Nevada', viewValue: 'Nevada' },
        { value: 'New Hampshire', viewValue: 'New Hampshire' },
        { value: 'New Jersey', viewValue: 'New Jersey' },
        { value: 'New Mexico', viewValue: 'New Mexico' },
        { value: 'New York', viewValue: 'New York' },
        { value: 'North Carolina', viewValue: 'North Carolina' },
        { value: 'North Dakota', viewValue: 'North Dakota' }
      ]
    },
    {
      name: 'O',
      disabled: false,
      state: [
        { value: 'Ohio', viewValue: 'Ohio' },
        { value: 'Oklahoma', viewValue: 'Oklahoma' },
        { value: 'Oregon', viewValue: 'Oregon' }
      ]
    },
    {
      name: 'P',
      disabled: false,
      state: [{ value: 'Pennsylvania', viewValue: 'Pennsylvania' }]
    },
    {
      name: 'R',
      disabled: false,
      state: [{ value: 'Rhode Island', viewValue: 'Rhode Island' }]
    },
    {
      name: 'S',
      disabled: false,
      state: [
        { value: 'South Carolina', viewValue: 'South Carolina' },
        { value: 'South Dakota', viewValue: 'South Dakota' }
      ]
    },
    {
      name: 'T',
      disabled: false,
      state: [
        { value: 'Tennessee', viewValue: 'Tennessee' },
        { value: 'Texas', viewValue: 'Texas' }
      ]
    },
    {
      name: 'U',
      disabled: false,
      state: [{ value: 'Utah', viewValue: 'Utah' }]
    },
    {
      name: 'V',
      disabled: false,
      state: [
        { value: 'Vermont', viewValue: 'Vermont' },
        { value: 'Virginia', viewValue: 'Virginia' }
      ]
    },
    {
      name: 'W',
      disabled: false,
      state: [
        { value: 'Washington', viewValue: 'Washington' },
        { value: 'West Virginia', viewValue: 'West Virginia' },
        { value: 'Wisconsin', viewValue: 'Wisconsin' },
        { value: 'Wyoming', viewValue: 'Wyoming' }
      ]
    }
  ];
  ngOnInit() {}
}

export const SelectGroupOptionData = {
  name: 'SelectGroupOption'
};
