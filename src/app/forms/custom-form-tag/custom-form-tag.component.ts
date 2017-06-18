import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS,
  ValidationErrors, FormControl, Validator, AbstractControl, ValidatorFn
} from "@angular/forms";

@Component({
  selector: 'exe-counter',
  templateUrl: './custom-form-tag.component.html',
  styleUrls: ['./custom-form-tag.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormTagComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomFormTagComponent),
      // useValue: (control: FormControl) => {
      //   const error = {'rangeError': {current: control.value, max: 4, min: 0}};
			//
      //   return (control.value > 4 || control.value < 0) ? error : null;
      // },
      multi: true,
    }
  ],
})
export class CustomFormTagComponent implements OnInit, ControlValueAccessor, OnChanges, Validator {
  @Input() _count: number = 0;

  @Input() counterRangeMin: number;

  @Input() counterRangeMax: number;

  _validator: ValidatorFn;

  propagateChange = (value: any) => {};

  constructor() { }

  get count() {
    return this._count;
  }

  set count(value: number) {
    this._count = value;

    this.propagateChange(this._count);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('counterRangeMin' in changes || 'counterRangeMax' in changes) {
      this._createValidator();
    }
  }

  private _createValidator() {
    // this._validator = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    this._validator = (control: FormControl): ValidationErrors => {
      return (control.value > +this.counterRangeMax || control.value < +this.counterRangeMin)
        ? { 'rangeError': { current: control.value, max: this.counterRangeMax, min: this.counterRangeMin }}
        : null;
    };
  }

  validate(control: AbstractControl): ValidationErrors | any {
    return (this.counterRangeMax == null || this.counterRangeMin == null) ? null : this._validator(control);
  }

  increment() {
    this.count++;

    // this.propagateChange(this.count);
  }

  decrement() {
    this.count--;

    // this.propagateChange(this.count);
  }

  writeValue(value: any): void {
    if (value) {
      this.count = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
