
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private data : ApiserviceService) { }


  ngOnInit() {
    
  }

  Remove(id){
    for (var i = 0; i < this.data.UserList.length; i++){
      if (id == this.data.UserList[i]['Id']) {
        this.data.UserList.splice(i, 1);
      }
    }
    //this.data.UserList.splice(id - 1, 1);
  }

}