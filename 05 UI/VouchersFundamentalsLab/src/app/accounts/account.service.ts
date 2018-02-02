
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BalanceAccount } from "../shared/index";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountsService {
    constructor(private httpClient: HttpClient) { }

    accounts = null;

    getAccountsFile() : Promise<BalanceAccount[]> {
        return this.httpClient.get<BalanceAccount[]>('/assets/accounts.json').toPromise();          
    }
    
    getAccountFile(id: number) : Promise<BalanceAccount> {
        return new Promise<BalanceAccount>((resolve, reject)=>{
            this.httpClient.get('/assets/accounts.json').toPromise()
            .then((data: BalanceAccount[])=>{
                var a = data.filter((item)=>{
                    return item.ID == id;
                 })
                 resolve(a[0]);
            })
            .catch(err=>reject(err));
        })
    }

    getAccounts(): Observable<BalanceAccount[]>{
        return this.httpClient.get<BalanceAccount[]>("http://localhost:5000/api/accounts");
    }

    getAccount(id: number) {
        this.httpClient
          .get<BalanceAccount>("http://localhost:5000/api/accounts/"+id)
          .subscribe(data => {
            this.accounts = data;
          });
    }

    insertAccount(paramAccount: BalanceAccount) {
        console.log("Voucher to insert: ", paramAccount);
        this.httpClient
          .post("http://localhost:5000/api/accounts", paramAccount)
          .subscribe(data => {
            if (data == null) this.accounts = "Voucher inserted";
          });
      }

    updateAccount(id: number) {
        var account: BalanceAccount;
    
        this.httpClient
          .get("http://localhost:5000/api/accounts/"+id)
          .subscribe(data => {
            let account: BalanceAccount = <BalanceAccount>data;
            console.log("Account to update: ", account);
            this.httpClient
              .put("http://localhost:5000/api/accounts", account)
              .subscribe(data => {
                this.accounts = "voucher updated";
              });
          });
      }

}