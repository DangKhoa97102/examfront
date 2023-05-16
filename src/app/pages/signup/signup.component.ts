import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }

  formSubmit() {
   console.log(this.user);
   if(this.user.username=='' || this.user.username == null){
    alert("Username is required !!!");
    return;
   }
   if(this.user.password=='' || this.user.password == null){
    alert("Password is required !!!");
    return;
   }
   if(this.user.firstName=='' || this.user.firstName == null){
    alert("First name is required !!!");
    return;
   }
   if(this.user.lastName=='' || this.user.lastName == null){
    alert("Last name is required !!!");
    return;
   }
   if(this.user.email=='' || this.user.email == null){
    alert("Email is required !!!");
    return;
   }
   if(this.user.phone=='' || this.user.phone == null){
    alert("Phone number is required !!!");
    return;
   }
  }
}
