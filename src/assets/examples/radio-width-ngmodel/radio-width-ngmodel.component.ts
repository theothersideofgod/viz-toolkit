import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-width-ngmodel',
  templateUrl: 'radio-width-ngmodel.component.html',
  styleUrls: ['radio-width-ngmodel.component.css']
})
export class RadioWidthNgmodelComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  ngOnInit() {}
}

export const RadioWidthNgmodelData = {
  name: 'RadioWidthNgmodel'
};
