import { Component } from '@angular/core';
import { TaxRatesService } from '../services/tax-rates.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-taxRates',
  templateUrl: './taxRates.component.html',
  styleUrls: ['./taxRates.component.css']
})
export class TaxRatesComponent {

  searchValue = " ";

  isCollapse = false;
  selectedRow = -1;
  selectedType = "";
  taxRatesForm: FormGroup;
  isDeleteModalVisible: boolean = false;
  taxRates:any[]=[];


  constructor(private fb: FormBuilder, private taxRatesService: TaxRatesService){
    this.taxRatesForm=this.fb.group({
      id: [],
      name: ['', Validators.required],
      rate:['', Validators.required],
      code:['', Validators.required],
      fixed:['', Validators.required],

    })
  }

  
  
  
  
  collapse(isCollapse: boolean) {

    // alert(isCollapse);
    this.isCollapse = isCollapse;
  }


  openDeleteConfirmationModal() {

  }

  closeDeleteConfirmationModal() {

  }

  ngOnInit(): void {
    this.taxRatesService.getAll(this.searchValue).subscribe(res => {
      console.log(res);
      this.taxRates = res.content;
    })
  }

  byALlSearch() {

  }

 

  Delete() {

  }
  
  getClass() {

  }

  Edit() {

  }

  byname() {

  }

  byid() {


  }
  getAllProducts() {

  }

  saveProduct() {


  }
  selectedtaxRow(index: number): void {
    // Your logic here
  }

}
