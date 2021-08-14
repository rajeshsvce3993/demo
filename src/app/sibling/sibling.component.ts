import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  convertText: string = "I Am Being Managed By Pipes";

  Users: any = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.fetchUsers()
  }

  fetchUsers() {
    return this.data.getUsers().subscribe((items: {}) => {
      console.log(items)
      this.Users = items;
      this.Users=this.Users.data
    })    
  }  
}