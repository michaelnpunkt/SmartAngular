
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BalanceAccount } from "../shared/index";

@Injectable()
export class AccountsService {
    constructor(private http: HttpClient) { }

    accounts = null;

    getAccounts() : Promise<BalanceAccount[]> {
        return this.http.get<BalanceAccount[]>('/assets/accounts.json').toPromise();          
    }
    
    getAccount(id: number) : Promise<BalanceAccount> {
        return new Promise<BalanceAccount>((resolve, reject)=>{
            this.http.get('/assets/accounts.json').toPromise()
            .then((data: BalanceAccount[])=>{
                var a = data.filter((item)=>{
                    return item.ID == id;
                 })
                 resolve(a[0]);
            })
            .catch(err=>reject(err));
        })
    }
}