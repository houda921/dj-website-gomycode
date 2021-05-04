import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from './article';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly baseUrl = `https://www.dieterjordens.com/api/articles`;
  private readonly httpOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic YWRtaW46RWVuRWVudm91ZGlnV2FjaHR3b29yZA=='
    }
  };

  constructor(private httpClient: HttpClient) {}

  getArticles$(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl, this.httpOptions).pipe(
      catchError((error: Error) => {
        console.error(`An error has occurred when retrieving articles: ${error.message}`);
        return of([]);
      })
    );
  }
}