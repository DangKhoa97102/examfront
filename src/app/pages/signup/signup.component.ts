import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService:UserService) {}
  ngOnInit(): void {}

  public user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
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
   if(this.user.firstname=='' || this.user.firstname == null){
    alert("First name is required !!!");
    return;
   }
   if(this.user.lastname=='' || this.user.lastname == null){
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

   //addUser: userService
   this.userService.addUser(this.user).subscribe(
    (data) => {
      //success
      console.log(data);
      alert("success");
    },
    (error) => {
      //error
      console.log(error);
      alert("Something wrong, pls try again!");
    }
   )


  }

  
}
