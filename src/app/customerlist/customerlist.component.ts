import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../beans/customer';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {
  searchValue = " ";
  selectedRow = -1;
  selectedType = "";
  isCollapse = false;
  customerForm: FormGroup;
  showSuccessMessage: boolean = true;
  customers: any[] = [];
  isDeleteModalVisible: boolean = false;
  selectedCustomer:Customer | undefined ;
  constructor(private fb: FormBuilder, private customerService: CustomerService, private dialogRef: MatDialogRef<CustomerlistComponent>) {
    this.customerForm = this.fb.group({
      id: [],
      customerName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailId: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      select: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  displayValue: string = '';
  close1() {
    this.dialogRef.close( this.displayValue);
  }

  ngOnInit(): void {
    this.customerService.getAllcustomerWihSearch(this.searchValue).subscribe(res => {
      console.log(res);
      this.customers = res.content;
    })
  }

  byALlSearch() {
    this.selectedType = "all";
    console.log("search text:", this.searchValue);
  }

  selectedCustomerRow(index: number, customer: Customer) {
    console.log(customer);
    this.selectedRow = index;
    this.selectedCustomer=customer;
  }

  getClass() {

    return this.isCollapse == false ? 'col-sm-7' : 'col-sm-';
  }
  getAllCustomer() {
    this.customerService.getAllcustomerWihSearch(this.searchValue).subscribe(
      res => {
        this.customers = res.content;
      }
    )
  }
  getCustomer() {
    this.getAllCustomer();
  }

  close(index: number, customer: Customer) {
    this.dialogRef.close(customer);
  }

}



