import { Injectable } from '@angular/core';

@Injectable()
export class StoreDataService {

  constructor() { }

  storeFormData(data:any){
    console.log('data :::: ',data);
    data['amount'] = data.price *  data.quantity;
    data['invoiceId'] = (Math.random() + 1).toString(36).substring(7);
    data['totalPayableAmount'] = data.totalPayableAmount + data.cgst;//with gst amount
    
    localStorage.setItem('murugesan-form-data', JSON.stringify(data));
    return 'data stored'
  }

  getFormData(){
    let formValue:any = localStorage.getItem('murugesan-form-data');
    formValue  = JSON.parse(formValue);
    return formValue;
  }
}
