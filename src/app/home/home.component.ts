import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
  }

  onClickSubmit(result: { firstname: string; lastname: string; }) {

   // this.router.navigate(['user'],{ queryParams: { name: 'rajesh' } });

    if (result.firstname == result.lastname){
      console.log("success")
    } 
    else{
      console.log("password does't match")
    }
 }

}
