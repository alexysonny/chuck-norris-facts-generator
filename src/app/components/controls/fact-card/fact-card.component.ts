import { Component, Input, OnInit } from '@angular/core';
import { ChuckJoke } from 'src/app/models/chuck-joke.model';

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.scss'],
})
export class FactCardComponent implements OnInit {
  @Input() factItem: ChuckJoke | null = null;

  constructor() {}

  ngOnInit(): void {}
}
