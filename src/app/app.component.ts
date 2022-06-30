import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface Config {
  name: string;
  showButton: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-devops-fe-angular';
  name$: Observable<string>;
  showButton$: Observable<boolean>;

  constructor(http: HttpClient) {
    const config$: Observable<Config> = http.get<Config>('/config/config.json');
    this.name$ = config$.pipe(map(c => c.name));
    this.showButton$ = config$.pipe(map(c => c.showButton));
  }

  handleClick(): void {
    alert('ANGULAR RULEZ!');
  }
}
