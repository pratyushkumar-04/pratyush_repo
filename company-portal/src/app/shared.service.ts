import { Injectable } from '@angular/core';

export interface customer {
  id: number;
  name: string;
  phn: number;
  address: string;
}

export interface product{
  id:number;
  name :string;
  price:number;
  qty:number;
}

export interface transaction{
  date:Date;
  billamt:number;
  transactionid:number;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private customerlist: customer[] = [
    { id: 1, name: 'Rahul Sharma', phn: 9876543210, address: 'Delhi' },
    { id: 2, name: 'Anita Verma', phn: 9123456780, address: 'Mumbai' }
  ]
  private productlist:product[]=[
      { id: 1, name: 'Keyboard', price: 345, qty: 32},
    { id: 2, name: 'Monitor', price: 123, qty: 12}
  ];

  private transactions:transaction[]=[
    { date: new Date('2024-06-01'), billamt: 1200, transactionid: 101 },
    { date: new Date('2024-06-05'), billamt: 890, transactionid: 102 },
    { date: new Date('2024-06-10'), billamt: 1570, transactionid: 103 },
    { date: new Date('2024-06-14'), billamt: 430, transactionid: 104 },
    { date: new Date('2024-06-15'), billamt: 2150, transactionid: 105 }
  ]
  displaycustomers() {
    return this.customerlist;
  }
  displayproducts()
  {
    return this.productlist;
  }
  addcustom(newcust:customer)
  {
    this.customerlist.push(newcust);
  }
  addproduct(newprod:product)
  {
    this.productlist.push(newprod);
  }
  showtransaction()
  {
    return this.transactions;
  }
  addtransaction(newtr:transaction)
  {
    this.transactions.push(newtr);
  }
  constructor() { }
}
