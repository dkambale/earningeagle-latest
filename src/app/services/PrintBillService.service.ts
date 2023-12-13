// print-bill.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrintBillService {
  private billDataSubject = new BehaviorSubject<any>(null);
  billData$ = this.billDataSubject.asObservable();

  setBillData(data: any) {
    this.billDataSubject.next(data);
  }
}
