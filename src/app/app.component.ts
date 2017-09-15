import { Component } from '@angular/core';
import { ApiserviceService } from "./api.service";

import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }
// import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ChangeTab(UserList, AddUser) {
    document.getElementById(UserList).classList.add('active');
    document.getElementById(AddUser).classList.remove('active');

    var e = (document.getElementById("abc")) as HTMLSelectElement;
    var value = e.options[e.selectedIndex].text;

  }
}
