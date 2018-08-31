import {
  Component,
  OnInit,
  ViewChild,
  Input,
  EventEmitter
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Output } from '@angular/core';

@Component({
  selector: 'viz-search',
  templateUrl: './viz-search.component.html',
  styleUrls: ['./viz-search.component.scss']
})
export class VizSearchComponent implements OnInit {
  @ViewChild('searchMenuTrigger')
  searchMenuTrigger: MatMenuTrigger;

  @ViewChild('typeMenuTrigger')
  typeMenuTrigger: MatMenuTrigger;

  @Output()
  selectResult: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  types;

  @Input()
  results;

  highlightResults;

  type;

  searchValue: string = 'Search...';

  ngOnInit() {
    this.type = this.types[0];
  }

  selectType(type) {
    this.type = type;
    this.typeMenuTrigger.closeMenu();
  }

  onFocusSearch() {
    this.searchValue = '';
  }

  onBlurSearch() {
    this.searchValue = 'Search...';
  }

  onKeyUp(e) {
    let value = e.target.value;

    this.highlightResults = this.results
      .filter(r => new RegExp(`${value}`, 'i').test(r.name))
      .map(nr => {
        let tester = new RegExp(`${value}`, 'i');
        return {
          ...nr,
          highlightName: nr.name.replace(
            tester,
            _i => `<span class="search-option_searchedHigh">${_i}</span>`
          )
        };
      });

    console.log(this.highlightResults);

    if (value.length > 2 && this.highlightResults.length > 0) {
      this.searchMenuTrigger.openMenu();
      // this.trigger.openMenu();
    } else {
      this.searchMenuTrigger.closeMenu();
    }
  }

  selectTargetResult(result): void {
    this.searchValue = result;
    this.selectResult.emit(result);
  }
}
