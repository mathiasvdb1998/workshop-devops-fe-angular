import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-devops-fe-angular';
  text$: Observable<string>;

  constructor(http: HttpClient) {
    this.text$ = http.get<{text: string}>('http://localhost:8080').pipe(map(res => res.text));
  }
}
