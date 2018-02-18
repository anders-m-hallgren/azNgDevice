import {Component} from '@angular/core';

const version: string = '1.0';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: []
})
export class AppComponent {
  version_display: string = version;
}
