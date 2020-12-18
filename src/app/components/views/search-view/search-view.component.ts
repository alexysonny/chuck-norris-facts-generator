import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { ChuckJoke } from 'src/app/models/chuck-joke.model';
import { FactsServiceService } from 'src/app/services/facts-service.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss'],
  animations: [
    trigger('collapseAnimation', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('300ms ease')),
    ]),
  ],
})
export class SearchViewComponent implements OnInit {
  public jokes$: BehaviorSubject<ChuckJoke[] | null> = new BehaviorSubject<
    ChuckJoke[] | null
  >([]);
  public searchForm: FormGroup;

  public dataSource!: MatTableDataSource<ChuckJoke>;
  public displayedColumns: string[] = ['id', 'category', 'date'];
  public expandedElement: ChuckJoke | null = null;

  @ViewChild(MatSort) private matSort: MatSort | null;
  @ViewChild(MatPaginator) private paginator: MatPaginator | null;

  constructor(
    private _factsService: FactsServiceService,
    private _fb: FormBuilder
  ) {
    this.paginator = null;
    this.matSort = null;
    this.searchForm = this._fb.group({
      search: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public get isSearchButtonDisabled(): boolean {
    return !(this.searchForm.dirty && this.searchForm.valid);
  }

  public searchForFacts(): void {
    const { search } = this.searchForm.value;

    this._factsService.searchJoke(search).subscribe((facts: ChuckJoke[]) => {
      this.dataSource = new MatTableDataSource<ChuckJoke>(facts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }

  public setActiveFilter(filter: string): void {}

  public sortedData($event: Sort): void {
    this.dataSource.data = this.getSortedData(this.dataSource.data);
  }
  private getSortedData(data: ChuckJoke[]): ChuckJoke[] {
    if (this.matSort?.active !== 'date' || this.matSort?.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.matSort?.direction === 'asc';
      if (this.matSort?.active === 'date') {
        return this._compare(a.created_at, b.created_at, isAsc);
      } else {
        return 0;
      }
    });
  }

  public expandElementHandler(element: ChuckJoke | null): void {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  private _compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public showCollapseAnimation(element: ChuckJoke): string {
    return element == this.expandedElement ? 'expanded' : 'collapsed';
  }
}
