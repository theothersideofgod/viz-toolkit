import {
  Component,
  OnInit,
  TemplateRef,
  ContentChild,
  AfterViewInit,
  AfterContentInit,
  ElementRef,
  Input
} from '@angular/core';
import { VizTreeNodeDefDirective } from './viz-tree-node-def.directive';
import { VizTreeLeafDefDirective } from './viz-tree-leaf-def.directive';

@Component({
  selector: 'viz-tree',
  templateUrl: './viz-tree.component.html',
  styleUrls: ['./viz-tree.component.scss']
})
export class VizTreeComponent implements OnInit, AfterViewInit {
  @Input() tree: any;
  @ContentChild(VizTreeNodeDefDirective, { read: TemplateRef })
  vizTreeNodeTemplate: TemplateRef<any>;
  @ContentChild(VizTreeLeafDefDirective, { read: TemplateRef })
  vizTreeLeafTemplate: TemplateRef<any>;
  @ContentChild('nodeDef') nodeDef: TemplateRef<any>
  @ContentChild('leafDef') leafDef: TemplateRef<any>
  constructor() {}

  ngOnInit() {
    console.log(this.vizTreeNodeTemplate);
  }
  ngAfterViewInit() {
    console.log(this.vizTreeNodeTemplate)
  }
}
