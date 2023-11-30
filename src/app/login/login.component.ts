import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  constructor(private loginService:LoginService,  private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {

  }

  // login() {

  //   this.loginService.loginPost(this.loginForm.value["username"],this.loginForm.value["password"]).subscribe(res=>{

  //     //alert(res);
  //     if (res != null ) {
  //       localStorage.setItem("user",JSON.stringify(res));
  //       this.router.navigate(['/home']);
  //     } else {
  //      // alert('Login failed. Please try again.');
  //     }
  //   })
    
  //  }


  login() {
    this.loginService.loginPost(this.loginForm.value["username"], this.loginForm.value["password"]).subscribe(
      res => {
        if (res != null) {
          localStorage.setItem("user", JSON.stringify(res));
          this.router.navigate(['/home']);
       } //else {
        //   // Display an error message on the screen
        //   alert('Incorrect password or username. Please try again.');
        // }
      },
      error => {
        // Handle any HTTP error, e.g., network issues, server errors
        console.error('Login failed. Please try again.', error);
        // You can also display an error message on the screen if you wish
        alert('Incorrect password or username. Please try again.');
      }
    );
  }

}
