import { Injectable } from "@angular/core";
import { VouchersService } from "../vouchers/voucher.service";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";
import { Voucher } from "./index";

@Injectable()
export class DataStoreService {
  private vouchersArray: Voucher[] = [];
  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject(
    this.vouchersArray
  );

  public Vouchers: Observable<Voucher[]> = this.vouchers.asObservable();

  constructor(private vs: VouchersService) {
    this.vs.getVouchers().subscribe(data => {
      this.vouchersArray = data;
      this.vouchers.next(this.vouchersArray);
    });

    setTimeout(()=>{
      let v : Voucher ={
        "ID": 99,
        "Text": "Late Voucher",
        "Date": new Date().toString(),
        "Amount": 1000,
        "Paid": false,
        "Expense": false,
        "Remark": true,
        "Details": [
          {
            "ID": 4,
            "VoucherID": 2,
            "AccountID": 2,
            "Account": null,
            "Text": "Diesel",
            "Amount": 45,
            "Comment": null
          },
          {
            "ID": 6,
            "VoucherID": 2,
            "AccountID": 2,
            "Account": null,
            "Text": "Reifenwechsel",
            "Amount": 20,
            "Comment": null
          }
        ]
      }
      this.vouchersArray.push(v);
      this.vouchers.next(this.vouchersArray);
    }, 10000)
  }
}
