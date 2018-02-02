import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { VouchersService } from "../voucher.service";
import { Voucher, VoucherDetail, BalanceAccount } from "../../shared/index";

@Component({
  selector: "app-voucher",
  templateUrl: "./voucher.component.html",
  styleUrls: ["./voucher.component.css"]
})
export class VoucherComponent implements OnInit {
  voucher: Voucher = {
    "ID": 0,
    "Text": "",
    "Date": new Date().toString() ,
    "Amount": 650,
    "Paid": false,
    "Expense": false,
    "Remark": false
  };
  accounts: BalanceAccount [] ;
  currentDetail: VoucherDetail;

  constructor(private vs: VouchersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {

    let id = this.route.snapshot.params["id"];

    if(id!=0){
      this.vs.getVoucher(id).subscribe(data => {
        this.voucher = data.CurrentVoucher;
        this.accounts = data.Accounts;
        if (this.voucher.Details != null) {
          this.currentDetail = this.voucher.Details[0];
        }
      });
    }    
  }

  saveVoucher() {
    if (this.voucher.ID == 0) {
      this.vs.insertVoucher(this.voucher);
    } else {
      this.vs.updateVoucher(this.voucher);
    }
    this.router.navigate(['/vouchers/']);
  }

  selectDetail(detail) {
    this.currentDetail = detail;
  }

  saveDetail(detail) {
    if (this.voucher.Details.includes(detail)) {
    } else {
      this.voucher.Details.push(detail);
    }
  }
}
