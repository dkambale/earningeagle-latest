import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  constructor(
    private dialogRef: MatDialogRef<CommentComponent>, @Inject(MAT_DIALOG_DATA) data: any
  ) {
    
  }
  displayValue: string = '';
  

  


  close() {
    this.dialogRef.close( this.displayValue);
  }
}
