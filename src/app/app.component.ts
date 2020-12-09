import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {
  ChuckJoke,
  FactsServiceService,
} from './services/facts-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public jokes$: BehaviorSubject<ChuckJoke[]> = new BehaviorSubject<
    ChuckJoke[]
  >([]);

  public form: FormGroup;

  public searchForm: FormGroup;

  public categories: string[] = [];
  public activeTab: string = '';

  constructor(
    private _factsService: FactsServiceService,
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      categories: '',
      userName: '',
    });

    this.searchForm = this._fb.group({
      search: '',
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
      .subscribe((joke: ChuckJoke) => this.jokes$.next([joke]));
  }

  public searchForFacts(): void {
    const { search } = this.searchForm.value;

    this._factsService
      .searchJoke(search)
      .subscribe((facts: ChuckJoke[]) => this.jokes$.next(facts));
  }

  public tabChangeHandler(tabName: string): void {
    this.activeTab = tabName;
  }
}
