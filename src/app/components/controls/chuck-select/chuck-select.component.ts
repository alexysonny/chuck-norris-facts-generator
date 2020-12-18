import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chuck-select',
  templateUrl: './chuck-select.component.html',
  styleUrls: ['./chuck-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChuckSelectComponent),
      multi: true,
    },
  ],
})
export class ChuckSelectComponent implements OnInit, ControlValueAccessor {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
  @Input() options: string[] = [];

  public selected: string[] = [];

  constructor() {}
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(newVal: any): void {
    this.onChange(newVal);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public inputHandler(val: string[]): void {
    this.writeValue(val.join(','));
  }

  ngOnInit(): void {}
}
