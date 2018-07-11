import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  options = [
    {
      "id": 1,
      "title": "Option1"
    },
    {
      "id": 2,
      "title": "Option2"
    },
    {
      "id": 3,
      "title": "Option3"
    },
    {
      "id": 4,
      "title": "Option4"
    }
  ]
}
