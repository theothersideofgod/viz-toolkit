import { Component, OnInit, TemplateRef, ContentChild } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'viz-tree',
  templateUrl: './viz-tree.component.html',
  styleUrls: ['./viz-tree.component.scss']
})
export class VizTreeComponent implements OnInit {
  @Input() tree: any;
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}
  collapse(){
    
  }
}
