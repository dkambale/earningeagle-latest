import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productForm: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productId: ['',],
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      productBarcode: ['', Validators.required],
      productUnit: ['', Validators.required],
      productQuantity: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Form values:', this.productForm.value)
    this.showSuccessMessage = true;
  }
}
