import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {


  private firstValue: number | null = 0;

  constructor(
    private dialogRef: MatDialogRef<CalculatorComponent>, @Inject(MAT_DIALOG_DATA) data: any
  ) {

  }

  save() {
    this.dialogRef.close(this.storeFirstValue);
  }


  close() {

    this.dialogRef.close(this.displayValue);
  }

  displayValue: string = '';


  storeFirstValue(): void {
    const currentValue = parseFloat(this.displayValue);
    if (!isNaN(currentValue)) {
      this.firstValue = currentValue;
      this.displayValue = '';
    }
  }

  calculatePercentage(): void {
    const secondValue = parseFloat(this.displayValue);
    if (!isNaN(secondValue) && this.firstValue !== null) {
      this.displayValue = ((this.firstValue * secondValue) / 100).toString();
      this.firstValue = 0;
    }
  }

  appendToDisplay(value: string): void {
    this.displayValue += value;
  }

  clearDisplay(): void {
    this.displayValue = '';
  }

  calculateResult(): void {
    try {
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  eraseLast(): void {

    this.displayValue = this.displayValue.slice(0, -1);
  }

  onKeyPress(event: KeyboardEvent): void {
    const key = event.key;
    switch (key) {
      case '1':
      case '2':
      case '3':
      case '+':
      case '4':
      case '5':
      case '6':
      case '-':
      case '7':
      case '8':
      case '9':
      case '*':
      case '0':
      case '/':
      case '(':
      case ')':
        this.appendToDisplay(key);
        break;
      case 'c':
      case 'C':
        this.clearDisplay();
        break;
      case 'Enter':
        this.calculateResult();
        break;
      case 'Backspace':
        this.eraseLast();
        break;
      case '%':
        this.storeFirstValue();
        break;
      case 'Enter':
        if (this.firstValue !== null) {
          this.calculatePercentage();
        } else {
          this.calculateResult();
        }
        break;
      case 'Shift':
        this.dialogRef.close(this.displayValue);
    }
  }
}
