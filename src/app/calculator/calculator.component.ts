import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue: string = '';
  private firstValue: number | null = 0; // Initialize to 0 or any other default value

  storeFirstValue(): void {
    // Store the current displayValue as the firstValue
    const currentValue = parseFloat(this.displayValue);
    
    // If the value is a number, store it as the firstValue
    if (!isNaN(currentValue)) {
      this.firstValue = currentValue;
      this.displayValue = ''; // Clear the display for the next input
    }
  }

  calculatePercentage(): void {
    // Convert the current displayValue to a number and calculate the percentage
    const secondValue = parseFloat(this.displayValue);
    
    // If the value is a number and firstValue is set, calculate its percentage
    if (!isNaN(secondValue) && this.firstValue !== null) {
      this.displayValue = ((this.firstValue * secondValue) / 100).toString();
      this.firstValue = 0; // Reset firstValue for the next input
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
    // Remove the last character from the displayValue
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
        this.calculatePercentage();
        break;
    }
  }



  
}
