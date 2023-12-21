import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent {

  constructor(
    private dialogRef: MatDialogRef<RefundComponent>, @Inject(MAT_DIALOG_DATA) data: any
  ) {
    
  }
  displayValue: string = '';
  selectedGrid: string | null = null;

  selectGrid(grid: string): void {
    if (this.selectedGrid === grid) {
     
      this.selectedGrid = null;
    } else {
      
      this.selectedGrid = grid;
    }
  }


  close() {
    this.dialogRef.close( this.displayValue);
  }
}
