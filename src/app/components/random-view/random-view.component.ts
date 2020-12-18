import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ChuckJoke } from 'src/app/models/chuck-joke.model';
import { FactsServiceService } from 'src/app/services/facts-service.service';

@Component({
  selector: 'app-random-view',
  templateUrl: './random-view.component.html',
  styleUrls: ['./random-view.component.scss'],
})
export class RandomViewComponent implements OnInit {
  public joke$: BehaviorSubject<ChuckJoke | null> = new BehaviorSubject<ChuckJoke | null>(
    null
  );

  public form: FormGroup;
  public categories: string[] = [];

  constructor(
    private _factsService: FactsServiceService,
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      categories: '',
      userName: '',
    });
  }

  ngOnInit(): void {
    this._factsService
      .getChuckCategories()
      .subscribe((categories: string[]) => (this.categories = categories));
  }

  public getRandomFact(): void {
    const { categories, userName } = this.form.value;

    const joinedCategories = categories ? categories.join(',') : null;
    this._factsService
      .getRandomJoke(joinedCategories, userName)
      .subscribe((joke: ChuckJoke) => this.joke$.next(joke));
  }
}
