import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chuck-button',
  templateUrl: './chuck-button.component.html',
  styleUrls: ['./chuck-button.component.scss'],
})
export class ChuckButtonComponent {
  @Input() buttonType: string = 'button';
  @Input() disabledState: boolean = false;
  @Input()
  get classList(): string {
    return `button ${this._classList}`;
  }
  set classList(value: string) {
    this._classList = value;
  }

  @Output() clickEvent = new EventEmitter();

  private _classList: string = '';
  constructor() {}

  public clickHandler(): void {
    if (this.buttonType !== 'submit') {
      this.clickEvent.emit();
    }
  }
}
