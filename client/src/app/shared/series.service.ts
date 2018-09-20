import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { ISerie } from './ISeries.model';

@Injectable()
export class SeriesService {
  uri: string;

  constructor(private http: HttpClient) {
    this.uri = environment.servers.api.baseUrl + environment.servers.api.path;
  }

  getSeries(): Observable<ISerie[]> {
    return this.http
      .get<ISerie[]>(`${this.uri}/series`)
      .pipe(catchError(this.handleError<ISerie[]>('getSeries', [])));
  }

  handleError<T>(
    operation = 'operation',
    result?: T,
    toastError: boolean = true
  ) {
    return (error: any): Observable<T> => {
      console.group(
        `%cException in ['${operation}']:`,
        'background: #222; color: #bada55'
      );
      console.error(error);
      console.groupEnd();

      return of(result as T);
    };
  }
}
