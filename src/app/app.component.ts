import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public activeTab: string = '';

  constructor() {}

  public tabChangeHandler(tabName: string): void {
    this.activeTab = tabName;
  }
}
