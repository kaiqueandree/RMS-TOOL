import { Component, Inject } from '@angular/core';

// Font Awesome
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'RMS-TOOL';


constructor(@Inject(DOCUMENT) private doc: Document){}

}
