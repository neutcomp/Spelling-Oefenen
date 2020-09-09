import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ICategory } from './category';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private categoryUrl = 'api/questions.json'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.categoryUrl).pipe(
      tap(data => console.log('ALL' + JSON.stringify(data))),
      catchError(this.handleError)
    );
    // return [
    //   { name: 'Zingwoord', value: 'zingwoord' },
    //   { name: 'Plankwoord', value: 'plankwoord' },
    //   { name: 'Hakwoord', value: 'hakwoord' },
    //   { name: 'Speciaal hakwoord', value: 'speciaalHakWoord' },
    //   { name: 'Luchtwoord', value: 'luchtwoord' },
    //   { name: 'Eer-Oor-Eur', value: 'eerOorEur' }
    // ];
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ' + ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }

  setCategories(categories: ICategory): void {
    sessionStorage.setItem('categories', categories.toString());
  }

  // filterCategories(filterBy: string): any {
  //   filterBy = filterBy.toLowerCase();
  //   return this.getCategories().filter((category: ICategory) => category.name.toLowerCase().indexOf(filterBy) !== -1);
  // }
}
