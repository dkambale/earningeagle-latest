import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private loginService:LoginService,  private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {

  }

  login() {

    this.loginService.login(this.loginForm.value["username"],this.loginForm.value["password"]).subscribe(res=>{

      alert(res);
      if (res == 'success') {
        this.router.navigate(['/home']);
      } else {
        alert('Login failed. Please try again.');
      }
    })
    
   }

}
