import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../beans/customer';

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
  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailId: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      type: ['', Validators.required]
    });
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

    alert("Selected Customer:" + index);
    console.log(customer);
    this.selectedRow = index;
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

}
