import { Component } from '@angular/core';
import { product, customer, SharedService, transaction } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  customers:customer[]=[];
  products:product[]=[];
  transactions:transaction[]=[];

  showcustom: boolean = false;
  showprod: boolean = false;
  showtr: boolean = false;

  constructor(private empservice:SharedService,private router:Router){}
  viewcustomer()
  {
    this.customers=this.empservice.displaycustomers();
    this.showcustom = true;
    this.showprod = false;
    this.showtr = false;
  }
  Viewproducts()
  {
     this.products = this.empservice.displayproducts();
    this.showcustom = false;
    this.showprod = true;
    this.showtr = false;
  }

addtransaction()
{
  this.router.navigate(['addtrasaction']);
}
logout() {
    this.router.navigate(['']);
  }

  showtransactions()
  {
     this.transactions=this.empservice.showtransaction();
    this.showcustom = false;
    this.showprod = false;
    this.showtr = true;

  }
    addcustom() {
    this.router.navigate(['/addcustomer']);
  }

}
