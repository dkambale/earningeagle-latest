import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userForm: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [''],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      userType: [''],
      mobileNumber: [''],
      dateOfBirth: [''],
      createdAt: [''],
      address: [''],
      isActive: [''],
      token: ['']
    });
  }

  onSubmit() {
    
    console.log('Form values:', this.userForm.value);

    
    this.showSuccessMessage = true;
  }
}

