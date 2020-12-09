import { Component, Input, OnInit } from '@angular/core';
import { ChuckJoke } from 'src/app/services/facts-service.service';

@Component({
  selector: 'app-facts-view',
  templateUrl: './facts-view.component.html',
  styleUrls: ['./facts-view.component.scss'],
})
export class FactsViewComponent implements OnInit {
  @Input() jokes: ChuckJoke[] | null = [];

  constructor() {}

  ngOnInit(): void {}
}
