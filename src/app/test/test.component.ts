import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms'
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  bioSection = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    gender: new FormControl(['']),
    stackDetails: new FormGroup({
      stack: new FormControl(''),
      experience: new FormControl('')
    }),
    address: new FormGroup({
        country: new FormControl(''),
        city: new FormControl('')
    })
  });

constructor(private route: ActivatedRoute,private router: Router,private toastr: ToastrService) { }
ngOnInit() {

  }

  get getControl(){
    return this.bioSection.controls;
  }

  calling(){
    console.log("hai")
    this.toastr.success('Details Saved Successfully');

  //  this.router.navigate(['user'],{ queryParams: { name:this.bioSection.value.firstName } });

  }

}


