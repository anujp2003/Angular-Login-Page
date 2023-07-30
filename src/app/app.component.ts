import { Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable, fromEvent, timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practicework';
}
