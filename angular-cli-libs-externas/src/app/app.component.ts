import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app works!';

  list = _.map([1, 2, 3], (n) => `#${n}`);
}
