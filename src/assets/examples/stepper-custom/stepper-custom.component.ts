import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'stepper-custom',
  templateUrl: 'stepper-custom.component.html',
  styleUrls: ['stepper-custom.component.css'],
})
export class StepperCustomComponent implements OnInit {
  steps = [
    {
      label: 'Member Details',
      status: 'progress',
      index: 1,
      subSteps: [
        {
          label: 'Basic Details',
          status: 'finish'
        },
        {
          label: 'Add Apps',
          status: 'finish',
          subSteps: [
            {
              label: 'Select Apps',
              status: 'finish'
            },
            {
              label: 'App Details',
              status: 'waiting'
            }
          ]
        },
        {
          label: 'Files',
          status: 'waiting'
        },
      ]
    },
    {
      label: 'Map Files & Fields',
      status: 'waiting',
      index: 2
    },
    {
      label: 'Recipe Entry',
      status: 'waiting',
      index: 3
    },
    {
      label: 'Codeset Mapping',
      status: 'waiting',
      index: 4
    },
    {
      label: 'Process Data',
      status: 'waiting',
      index: 5
    },
    {
      label: 'Completion',
      status: 'waiting',
      index: 6
    },
  ]
  ngOnInit() { }
}

export const StepperCustomData = {
	name: 'StepperCustom'
}