import { Component, EventEmitter, OnInit, Output } from '@angular/core';

class TabItem {
  name: string;
  isActive: boolean;

  constructor(name: string) {
    this.name = name;
    this.isActive = false;
  }

  public activateTab(): void {
    this.isActive = true;
  }
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Output() activeTabChanged = new EventEmitter<string>();

  public tabsList: TabItem[] = [new TabItem('random'), new TabItem('search')];

  constructor() {}

  ngOnInit(): void {
    this.tabsList[0].activateTab();
    this.activeTabChanged.emit(
      this.tabsList.find((tab: TabItem) => tab.isActive)?.name
    );
  }

  public changeTab(tabName: string): void {
    this.tabsList.forEach((tab: TabItem) => (tab.isActive = false));
    this.tabsList.find((tab: TabItem) => tab.name === tabName)?.activateTab();
    this.activeTabChanged.emit(tabName);
  }
}
