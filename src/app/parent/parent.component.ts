import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  template: `
    {{message}}
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message:any | undefined;
  subscription: Subscription | undefined;

  constructor(private data: DataService) { }

  ngOnInit() {
   }
  
}