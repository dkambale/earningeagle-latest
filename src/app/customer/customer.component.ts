import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customerForm: FormGroup;
  showSuccessMessage: boolean = true;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      customerId: [''],
      customerName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailId: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      createdAt: ['', Validators.required],
      updatedAt: ['', Validators.required],
      isActive: ['', Validators.required]
    });
  }

  onSubmit() {
    
    console.log('Form values:', this.customerForm.value);

    
    this.showSuccessMessage = true;
  }
}
