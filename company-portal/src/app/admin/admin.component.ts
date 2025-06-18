import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product, customer, SharedService, transaction } from '../shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customerlist: customer[] = [];
  productlist: product[] = [];
  transactions: transaction[] = [];

  totalCustomers = 0;
  totalProducts = 0;
  totalSales = 0;

  showcustom: boolean = false;
  showprod: boolean = false;
  showtr: boolean = false;

  constructor(private companyservice: SharedService, private router: Router) {}

  // This is the lifecycle hook
  ngOnInit(): void {
    this.customerlist = this.companyservice.displaycustomers();
    this.totalCustomers = this.customerlist.length;

    this.productlist = this.companyservice.displayproducts();
    this.totalProducts = this.productlist.length;

    this.transactions = this.companyservice.showtransaction();
    this.totalSales = this.transactions.reduce((sum, t) => sum + t.billamt, 0);
  }

  logout() {
    this.router.navigate(['']);
  }

  loadcustomers() {
    this.customerlist = this.companyservice.displaycustomers();
    this.totalCustomers = this.customerlist.length;

    this.showcustom = true;
    this.showprod = false;
    this.showtr = false;
  }

  loadproducts() {
    this.productlist = this.companyservice.displayproducts();
    this.totalProducts = this.productlist.length;

    this.showcustom = false;
    this.showprod = true;
    this.showtr = false;
  }

  loadtransactions() {
    this.transactions = this.companyservice.showtransaction();
    this.totalSales = this.transactions.reduce((sum, t) => sum + t.billamt, 0);

    this.showcustom = false;
    this.showprod = false;
    this.showtr = true;
  }

  addcustom() {
    this.router.navigate(['/addcustomer']);
  }

  addproduct() {
    this.router.navigate(['/addproduct']);
  }
}
