import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
  HostBinding,
  HostListener,
  OnDestroy
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'viz-slider',
  templateUrl: 'viz-slider.component.html',
  styleUrls: ['./viz-slider.component.scss']
})
export class VizSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class')
  baseClass = 'viz-slider';
  @HostBinding('tabindex')
  baseTab = '-1';

  isDragging = false;
  thumbPosition: number;
  lowerThumbPosition: number;
  upperThumbPosition: number;
  sliderWidth: number;
  thumbFocusState = 'resting';
  lowerThumbFocusState = 'resting';
  upperThumbFocusState = 'resting';
  tickArray: string[];
  showTicks = false;
  focusRingState = {
    resting: {
      display: 'none'
    },
    hover: {
      display: 'block',
      opacity: 0.08
    },
    focused: {
      display: 'block',
      opacity: 0.12
    },
    pressed: {
      display: 'block',
      opacity: 0.16
    }
  };

  @Input('min')
  min: number;
  @Input('max')
  max: number;
  @Input('tickInterval')
  tickInterval: number;

  @Input()
  set value(value: number) {
    this._value = value;
  }
  get value(): number {
    return this._value;
  }

  @Input()
  set lowerValue(value: number) {
    this._lowerValue = value;
  }
  get lowerValue(): number {
    return this._lowerValue;
  }

  @Input()
  set upperValue(value: number) {
    this._upperValue = value;
  }
  get upperValue(): number {
    return this._upperValue;
  }

  @Input()
  set range(value: boolean) {
    this._range = coerceBooleanProperty(value);
  }
  get range(): boolean {
    return this._range;
  }

  @Input()
  set thumbLabel(value: boolean) {
    this._thumbLabel = coerceBooleanProperty(value);
  }
  get thumbLabel(): boolean {
    return this._thumbLabel;
  }

  private _range = false;
  private _lowerValue = 0;
  private _upperValue = 0;
  private _thumbLabel = false;
  private _value = 0;

  private _mouseDown$;
  private _mouseUp$;
  private _mouseMove$;

  @ViewChild('sliderWrapper')
  private _sliderWrapper: ElementRef;

  onDragStart(event: any) {
    this.isDragging = true;
    console.log(this.getOffsetLocationX(event.clientX));

    if (this.range) {
      if (
        this.thumbPositionControl(this.getOffsetLocationX(event.clientX)) ===
        'lower'
      ) {
        this.lowerThumbFocusState = 'focused';
        this.lowerThumbPosition = this.getThumbPosition(
          this.getOffsetLocationX(event.clientX)
        );
        this.lowerValue = this.positionToValue(this.lowerThumbPosition);
      } else {
        this.upperThumbFocusState = 'focused';
        this.upperThumbPosition = this.getThumbPosition(
          this.getOffsetLocationX(event.clientX)
        );
        this.upperValue = this.positionToValue(this.upperThumbPosition);
      }
    } else {
      this.thumbFocusState = 'focused';
      this.thumbPosition = this.getThumbPosition(
        this.getOffsetLocationX(event.clientX)
      );
      this.value = this.positionToValue(this.thumbPosition);
    }
  }

  onDragging(event: any) {
    if (this.isDragging) {
      if (this.range) {
        if (
          this.thumbPositionControl(this.getOffsetLocationX(event.clientX)) ===
          'lower'
        ) {
          this.lowerThumbFocusState = 'pressed';
          this.lowerThumbPosition = this.getThumbPosition(
            this.getOffsetLocationX(event.clientX)
          );
          this.lowerValue = this.positionToValue(this.lowerThumbPosition);
        } else {
          this.upperThumbFocusState = 'pressed';
          this.upperThumbPosition = this.getThumbPosition(
            this.getOffsetLocationX(event.clientX)
          );
          this.upperValue = this.positionToValue(this.upperThumbPosition);
        }
      } else {
        this.thumbFocusState = 'pressed';
        this.thumbPosition = this.getThumbPosition(
          this.getOffsetLocationX(event.clientX)
        );
        this.value = this.positionToValue(this.thumbPosition);
      }
    }
  }

  onDragEnd(event: any) {
    this.isDragging = false;
    if (this.range) {
      if (
        this.thumbPositionControl(this.getOffsetLocationX(event.clientX)) ===
        'lower'
      ) {
        this.lowerThumbFocusState = 'resting';
      } else {
        this.upperThumbFocusState = 'resting';
      }
    } else {
      this.thumbFocusState = 'resting';
    }

    console.log('drag stop');
  }

  get thumbContainerStyle(): { [key: string]: string } {
    return {
      left: `${this.thumbPosition}%`
    };
  }

  get lowerThumbContainerStyle(): { [key: string]: string } {
    return {
      left: `${this.lowerThumbPosition}%`
    };
  }

  get upperThumbContainerStyle(): { [key: string]: string } {
    return {
      left: `${this.upperThumbPosition}%`
    };
  }

  get trackFillStyle(): { [key: string]: string } {
    if (this.range) {
      return {
        left: `${this.lowerThumbPosition}%`,
        width: `${this.upperThumbPosition - this.lowerThumbPosition}%`
      };
    }
    return {
      width: `${this.thumbPosition}%`
    };
  }

  onMouseOverThumb() {
    this.thumbFocusState = 'hover';
  }
  onMouseLeaveThumb() {
    if (this.thumbFocusState !== 'focused') {
      this.thumbFocusState = 'resting';
    }
  }

  // @HostListener('focus') onFocus() {
  //   console.log('i am focus');
  //   // this.showTicks = true;
  //   this.upperThumbFocusState = 'focused';
  //   this.lowerThumbFocusState = 'focused';
  //   this.thumbFocusState = 'focused';
  // }

  // @HostListener('blur') onBlur() {
  //   console.log('i am not focus');
  //   // this.showTicks = false;
  //   this.upperThumbFocusState = 'resting';
  //   this.lowerThumbFocusState = 'resting';
  //   this.thumbFocusState = 'resting';
  // }

  get thumbFocusRingStyle(): { [key: string]: string } {
    return this.focusRingState[this.thumbFocusState];
  }

  get lowerThumbFocusRingStyle(): { [key: string]: string } {
    return this.focusRingState[this.lowerThumbFocusState];
  }

  get upperThumbFocusRingStyle(): { [key: string]: string } {
    return this.focusRingState[this.upperThumbFocusState];
  }

  thumbPositionControl(pixelLocation): string {
    let whichThumb: string;
    const pixelLocationPercent = (pixelLocation / this.sliderWidth) * 100;

    if (pixelLocationPercent < this.lowerThumbPosition) {
      // move lower thumb
      // this.lowerThumbPosition = pixelLocationPercent
      whichThumb = 'lower';
    } else if (pixelLocationPercent > this.upperThumbPosition) {
      // move thumb
      // this.thumbPosition = pixelLocationPercent
      whichThumb = 'uppper';
    } else {
      const centerLocationPercent =
        (this.upperThumbPosition + this.lowerThumbPosition) / 2;

      if (pixelLocationPercent < centerLocationPercent) {
        // move lower thumb
        // this.lowerThumbPosition = pixelLocationPercent
        whichThumb = 'lower';
      } else {
        // move thumb
        // this.thumbPosition = pixelLocationPercent
        whichThumb = 'upper';
      }
    }
    return whichThumb;
  }

  positionToValue(positionPercent) {
    return Math.round(
      this.min + (this.max - this.min) * positionPercent * 0.01
    );
  }

  createTickArray() {
    const centerTickCount = Math.floor(this.max / this.tickInterval);

    const centerTicks = [];

    for (let i = 1; i <= centerTickCount; i++) {
      const tickPosition =
        ((i * this.tickInterval) / (this.max - this.min)) * 100;
      centerTicks.push(tickPosition);
    }

    const lastTick = ((this.sliderWidth - 2) / this.sliderWidth) * 100;

    this.tickArray = [0, ...centerTicks, lastTick];
  }

  getThumbPosition(position) {
    let positionPercent = (position / this.sliderWidth) * 100;

    if (this.tickInterval) {
      const range = this.rangeCheck(positionPercent);

      if (positionPercent < range.center) {
        positionPercent = +range.start;
      } else {
        positionPercent = +range.end;
      }
    }

    return positionPercent;
  }

  rangeCheck(value) {
    const validateValue = value < 0 ? 0 : value;
    for (let i = 0; i < this.tickArray.length; i++) {
      if (
        this.tickArray[i] <= validateValue &&
        validateValue <= this.tickArray[i + 1]
      ) {
        const centerPoint: number =
          (parseFloat(this.tickArray[i]) + parseFloat(this.tickArray[i + 1])) *
          0.5;

        return {
          start: this.tickArray[i],
          center: centerPoint,
          end: this.tickArray[i + 1]
        };
      }
    }
  }

  getOffsetLocationX(clientX) {
    const elementPosition = this.getElementOffset(
      this._sliderWrapper.nativeElement
    );
    const location = clientX - elementPosition.left;
    if (location < 0) {
      return 0;
    } else if (location > this._sliderWrapper.nativeElement.offsetWidth) {
      return this._sliderWrapper.nativeElement.offsetWidth;
    } else {
      return location;
    }
  }

  getElementOffset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  ngOnInit() {
    this.sliderWidth = this._sliderWrapper.nativeElement.offsetWidth;
    if (this.range) {
      this.upperThumbPosition =
        (this._upperValue / (this.max - this.min)) * 100;
      this.lowerThumbPosition =
        (this._lowerValue / (this.max - this.min)) * 100;
    } else {
      this.thumbPosition = (this._value / (this.max - this.min)) * 100;
    }
    if (this.tickInterval !== 0) {
      this.showTicks = true;
    }
    this.createTickArray();

    this._mouseDown$ = fromEvent(
      this._sliderWrapper.nativeElement,
      'mousedown'
    ).subscribe(event => this.onDragStart(event));
    this._mouseMove$ = fromEvent(this._sliderWrapper.nativeElement, 'mousemove').subscribe(event => this.onDragging(event));
    this._mouseUp$ = fromEvent(this._sliderWrapper.nativeElement, 'mouseup').subscribe(event => this.onDragEnd(event));
  }
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this._mouseDown$.unsubscribe();
  }
}
