import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService:UserService, private snack:MatSnackBar) {}
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
    // //alert("Username is required !!!");
    // this.snack.open("Username is required!!","ok",{
    //   duration: 3000,
    //   verticalPosition: 'top',
    //   horizontalPosition: 'right',
    // });
    return;
   }
   if(this.user.password=='' || this.user.password == null){
    // this.snack.open("Password is required!!","ok",{
    //   duration: 3000,
    //   verticalPosition: 'top',
    //   horizontalPosition: 'right',
    // });
    return;
   }
   if(this.user.firstname=='' || this.user.firstname == null){
    // this.snack.open("First name is required!!","ok",{
    //   duration: 3000,
    //   verticalPosition: 'top',
    //   horizontalPosition: 'right',
    // });
    return;
   }
   if(this.user.lastname=='' || this.user.lastname == null){
    // this.snack.open("Last name is required!!","ok",{
    //   duration: 3000,
    //   verticalPosition: 'top',
    //   horizontalPosition: 'right',
    // });
    return;
   }
   if(this.user.email=='' || this.user.email == null){
    // this.snack.open("Email is required!!","ok",{
    //   duration: 3000,
    //   verticalPosition: 'top',
    //   horizontalPosition: 'right',
    // });
    return;
   }
   if(this.user.phone=='' || this.user.phone == null){
    //alert("Phone number is required !!!");
    //return;
   }

   //addUser: userService
   this.userService.addUser(this.user).subscribe(
    (data:any) => {
      //success
      console.log(data);
      Swal.fire('Success done!!', 'User id is ' + data.id, 'success');
    },
    (error) => {
      //error
      console.log(error);
      this.snack.open('Something wrong, pls try again!', '', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'left'
      })
      //alert("Something wrong, pls try again!");
    }
   )


  }

  
}
