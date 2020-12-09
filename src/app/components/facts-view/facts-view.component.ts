import { Component, Input, OnInit } from '@angular/core';
import { ChuckJoke } from 'src/app/services/facts-service.service';

@Component({
  selector: 'app-facts-view',
  templateUrl: './facts-view.component.html',
  styleUrls: ['./facts-view.component.scss'],
})
export class FactsViewComponent implements OnInit {
  @Input() jokes: ChuckJoke[] = [];

  public expandedLineIndex: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  public get isSingleJoke(): boolean {
    return this.jokes?.length === 1;
  }

  public get hasListOfJokes(): boolean {
    return this.jokes?.length > 0 && !this.isSingleJoke;
  }

  public expandLine(lineIndex: number): void {
    this.expandedLineIndex =
      this.expandedLineIndex === lineIndex ? null : lineIndex;
  }

  public isLineExpanded(lineIndex: number): boolean {
    return lineIndex === this.expandedLineIndex;
  }
}
