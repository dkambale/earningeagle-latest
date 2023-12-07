import { Component } from '@angular/core';
import { TaxRatesService } from '../services/tax-rates.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { taxRates } from '../beans/taxRates';

@Component({
  selector: 'app-taxRates',
  templateUrl: './taxRates.component.html',
  styleUrls: ['./taxRates.component.css']
})
export class TaxRatesComponent {

  searchValue = " ";
  isCollapse = false;
  selectedRow = -1;
  selectedTaxRates: taxRates | undefined;
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
    this.isDeleteModalVisible = true;
  }

  closeDeleteConfirmationModal() {
    this.isDeleteModalVisible = false;
  }

  ngOnInit(): void {
    this.taxRatesService.getAll(this.searchValue).subscribe(res => {
      console.log(res);
      this.taxRates = res.content;
    })
  }

  byALlSearch() {
    this.selectedType = "all";
    console.log("search text:", this.searchValue);
  }

 

  Delete() {

if(this.selectedTaxRates != undefined){
  this.taxRatesService.delete(this.selectedTaxRates.id).subscribe(res => {
    this.closeDeleteConfirmationModal();
    this.getAlltax();
  })
}

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

getAlltax(){

  this.taxRatesService.getAll(this.searchValue).subscribe(
    res =>{
      this.taxRates=res.content;
    }
  )
}




  gettax() {
    this.getAlltax

  }

  saveTax() {
    console.log(this.taxRatesForm.value);
    if(this.taxRatesForm.valid){
      this.taxRatesService.register(this.taxRatesForm.value).subscribe(
        res =>{
          console.log(res.content);
          this.getAlltax();
        }
      )
    }
  }
  
  selectedtaxRow(index: number, taxRates: taxRates) {
    console.log(taxRates);
    this.selectedTaxRates=taxRates;
    this.selectedRow=index;
   
  }

}
