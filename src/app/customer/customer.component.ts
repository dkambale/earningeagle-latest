import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../beans/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  selectedCustomer: Customer | undefined;
  isEditModalVisible: boolean = false;
  searchValue = " ";
  selectedRow = -1;
  selectedType = "";
  isCollapse=false;
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

  openDeleteConfirmationModal() {
    this.isDeleteModalVisible = true;
  }

  closeDeleteConfirmationModal() {
    this.isDeleteModalVisible = false;
  }

  byALlSearch() {
    this.selectedType = "all";
    console.log("search text:", this.searchValue);
  }

  selectedCustomerRow(index: number, customer:Customer) {

   // alert("Selected Customer:" + index);
    console.log(customer);
    this.selectedCustomer = customer;  
    this.selectedRow=index;
  }
  Delete() {
  
    if (this.selectedRow > 0) {
      this.customerService.delete(this.selectedRow).subscribe(res => {
        this.closeDeleteConfirmationModal();
        this.getAllCustomer();
      })
    }
  }

  collapse(isCollapse:boolean) {

    // alert(isCollapse);
    this.isCollapse=isCollapse;
  }

  getClass() {

    return this.isCollapse==false ? 'col-sm-7':'col-sm-';
  }

  Edit() {
    this.selectedType = "Edit";
    console.log("search text:", this.searchValue);
  }
  byname() {
    this.selectedType = "name";
    console.log("search text:", this.searchValue);
  }
  byid() {
    this.selectedType = "id";
    console.log("search text:", this.searchValue);
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

  savecustomer() {
    console.log(this.customerForm.value);
    if (this.customerForm.valid) {
      this.customerService.register(this.customerForm.value).subscribe(
        res => {
          console.log(res.content);
          //alert("customer saved successfully");
          this.getAllCustomer();
        }
      )
    }
  }


  openEditModal() {
    this.isEditModalVisible = true;

    if (this.selectedCustomer) {
      this.customerForm.patchValue({
        id: this.selectedCustomer.id,
        name: this.selectedCustomer.name,
        quantity: this.selectedCustomer.contactNumber,
        buyPrice: this.selectedCustomer.emailId,
        sellPrice: this.selectedCustomer.address,
        uniqueNumber: this.selectedCustomer.dateOfBirth,
        expiredate: this.selectedCustomer.type
      });
    }
  }

  closeEditModal() {
    this.isEditModalVisible = false;
  }

  editProduct() {

    if (this.customerForm.valid) {
      this.customerService.update(this.customerForm.value).subscribe(
        (res: any) => {
          console.log(res);
          this.closeEditModal();
          this.getAllCustomer();
        }
      );
    }
  }

}
