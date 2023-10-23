import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb:FormBuilder){

  }
  // registrationForm=new FormGroup({
  //   userName:new FormControl("Abhishek"),
  //   password:new FormControl(""),
  //   confirmPassword:new FormControl(""),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // });

  registrationForm=this.fb.group({
    userName:['Sabuja',Validators.required],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  });

  loadAPIData(){
    this.registrationForm.patchValue({
      userName:'abhi',
      password:'test',
      confirmPassword:'test',
      address:{
        city:'bbs',
        state:'odisha',
        postalCode:'751024'
      }
      
    })
  }
}
