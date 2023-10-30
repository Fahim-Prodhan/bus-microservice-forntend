import { Component } from '@angular/core';
import { LoaderControlService } from './services/loader-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bus-micro-front';
  constructor(public loaderControlService:LoaderControlService){}
}
