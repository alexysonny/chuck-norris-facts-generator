import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChuckJoke } from '../models/chuck-joke.model';

export type SearchResponse = {
  total: number;
  result: ChuckJoke[];
};

@Injectable({
  providedIn: 'root',
})
export class FactsServiceService {
  private readonly _chuckURl = 'https://api.chucknorris.io/jokes/';
  constructor(private _http: HttpClient) {}

  public getRandomJoke(
    category?: string,
    name?: string
  ): Observable<ChuckJoke> {
    let params = new HttpParams();
    if (category) {
      params = params.set('category', category);
    }
    if (name) {
      params = params.set('name', name);
    }
    return this._http.get<ChuckJoke>(`${this._chuckURl}/random`, { params });
  }

  public searchJoke(query: string): Observable<ChuckJoke[]> {
    let params = new HttpParams();

    params = params.set('query', query);

    return this._http
      .get<SearchResponse>(`${this._chuckURl}/search`, {
        params,
      })
      .pipe(map((response: SearchResponse) => response.result));
  }

  public getChuckCategories(): Observable<string[]> {
    return this._http.get<string[]>(`${this._chuckURl}/categories`);
  }
}
