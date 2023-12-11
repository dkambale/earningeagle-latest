import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../beans/Product';
import { Router } from '@angular/router';
import { TaxRatesService } from '../services/tax-rates.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit, OnInit {

  isEditModalVisible: boolean = false;
  searchValue = " ";
  selectedRow = -1;
  selectedProduct: Product | undefined;
  isCollapse = false;
  selectedType = "";
  productsForm: FormGroup;
  nav: string = 'home';
  user: string;
  product: string;
  sales: string;
  more: string;
  buy: string;
  products: any[] = [];
  taxes: any[] = [];
  isDeleteModalVisible: boolean = false;

  constructor(private fb: FormBuilder, elementRef: ElementRef,
    private productService: ProductServiceService, private router: Router,
    private taxService: TaxRatesService) {
    this.user = '';
    this.product = '';
    this.sales = '';
    this.more = '';
    this.buy = '';
    this.product = '';

    this.productsForm = this.fb.group({
      id: null,
      name: ['', Validators.required],
      quantity: [, Validators.required],
      buyPrice: [, Validators.required],
      sellPrice: [, Validators.required],
      uniqueNumber: ['', Validators.required],
      expiredate: [null, Validators.required],
      stateGST: [, Validators.required],
      govtGST: [, Validators.required],
      stockAlert: [false, Validators.required],
      isTaxIncluded: [false, Validators.required],
      description: ['', Validators.required],
      tax: [null, Validators.required],
      type: ['', Validators.required]
    });

  }
  ngAfterViewInit() {

  }

  openDeleteConfirmationModal() {
    this.isDeleteModalVisible = true;
  }

  closeDeleteConfirmationModal() {
    this.isDeleteModalVisible = false;
  }

  ngOnInit(): void {
    this.productService.getAllProductWihSearch(this.searchValue).subscribe(res => {
      console.log(res);
      this.products = res.content;
    })

    this.taxService.getAllTaxes().subscribe(res => {
      console.log(res);
      this.taxes = res;
    })

  }

  selectedTax(event: any) {

    let tax = this.getTax();
    let rate: number = tax.rate;
    this.productsForm.controls['stateGST'].setValue(rate / 2);
    this.productsForm.controls['govtGST'].setValue(rate / 2);
    console.log(event.target.value);

  }

  getTax() {
    return this.productsForm.value.tax;
  }

  // byBarcode() {
  //   this.selectedType = "barcode"
  //   console.log("search text:", this.searchValue);
  // }

  byALlSearch() {
    this.selectedType = "all";
    console.log("search text:", this.searchValue);
  }

  selectedproductsRow(index: number, product: Product) {


    console.log(product);
    this.selectedProduct = product;
    this.selectedRow = index;
  }

  Delete() {
    if (this.selectedProduct != undefined) {
      this.productService.delete(this.selectedProduct.id).subscribe(res => {

        this.closeDeleteConfirmationModal();
        this.getAllProducts();
      })
    }
  }

  collapse(isCollapse: boolean) {

    // alert(isCollapse);S
    this.isCollapse = isCollapse;
  }

  getClass() {

    return this.isCollapse == false ? 'col-sm-7' : 'col-sm-';
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
  onsubmit() {
    this.productService.getAllProductWihSearch(this.searchValue).subscribe(
      res => {
        this.products = res.content
      }
    )
  }

  getAllProducts() {
    this.productService.getAllProductWihSearch(this.searchValue).subscribe(
      res => {
        this.products = res.content;
      }
    )

  }
  navigateToTaxRates(): void {
    this.router.navigate(['/home/tax-rates']);
  }

  getProducts() {
    this.getAllProducts

  }

  saveProduct() {
    console.log(this.productsForm.value);
    if (this.productsForm.valid) {
      this.productService.register(this.productsForm.value).subscribe(
        res => {
          console.log(res.content);
          // alert("Product saved successfully");
          this.getAllProducts();
        }
      )
    }

  }

  openEditModal() {
    this.isEditModalVisible = true;

    if (this.selectedProduct) {
      this.productsForm.patchValue({
        id: this.selectedProduct.id,
        name: this.selectedProduct.name,
        quantity: this.selectedProduct.quantity,
        buyPrice: this.selectedProduct.buyPrice,
        sellPrice: this.selectedProduct.sellPrice,
        uniqueNumber: this.selectedProduct.uniqueNumber,
        expiredate: this.selectedProduct.expiredate,
        stateGST: this.selectedProduct.stateGST,
        govtGST: this.selectedProduct.govtGST,
        stockAlert: this.selectedProduct.stockAlert,
        isTaxIncluded: this.selectedProduct.isTaxIncluded,
        description: this.selectedProduct.description,
        type: this.selectedProduct.type
      });
    }
  }

  closeEditModal() {
    this.isEditModalVisible = false;
  }

  editProduct() {

    if (this.productsForm.valid) {
      this.productService.update(this.productsForm.value).subscribe(
        (res: any) => {
          console.log(res);
          this.closeEditModal();
          this.getAllProducts();
        }
      );
    }
  }
}
