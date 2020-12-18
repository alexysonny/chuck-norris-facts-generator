import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chuck-input',
  templateUrl: './chuck-input.component.html',
  styleUrls: ['./chuck-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChuckInputComponent),
      multi: true,
    },
  ],
})
export class ChuckInputComponent implements ControlValueAccessor {
  @Input() name: string | null = null;
  @Input() label: string | null = null;
  @Input() type: string = 'text';

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

  public inputHandler(val: any): void {
    this.writeValue(val.target.value);
  }
}
