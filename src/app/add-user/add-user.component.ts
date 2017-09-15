
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../api.service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private api:ApiserviceService) { }

  ngOnInit() {
  }

  addUser() {
   this.api.AddUser(); 
  }}