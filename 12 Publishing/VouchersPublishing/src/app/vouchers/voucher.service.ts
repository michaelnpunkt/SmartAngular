
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voucher } from "../shared/index";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class VouchersService {
    constructor(private httpClient: HttpClient) { }

    vouchers = null;

    getVouchers() : Observable<any> {        
        return this.httpClient.get(environment.webApiUrl + '/api/vouchers');          
    }
    
    getVoucher(id: number) : Observable<any> {
        return this.httpClient.get(environment.webApiUrl + '/api/vouchers/getvm/' + id);
      }

    insertVoucher(voucher: Voucher) : void {                
        this.httpClient.post(environment.webApiUrl + '/api/vouchers', voucher)
            .subscribe(()=>console.log(`voucher with id ${voucher.ID} inserted`), 
            (err)=> console.log(err));            
    }

    updateVoucher(voucher: Voucher) : void {
        this.httpClient.put(environment.webApiUrl + '/api/vouchers', voucher)
            .subscribe(()=>console.log(`voucher with id ${voucher.ID} updated`), 
            (err)=> console.log(err));
    }

    deleteVoucher(id: number) : void {        
        this.httpClient.delete(environment.webApiUrl + '/api/vouchers/' + id)
            .subscribe(()=>console.log(`voucher with id ${id} deleted`), 
            (err)=> console.log(err));
    }
}