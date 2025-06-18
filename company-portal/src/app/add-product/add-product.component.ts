import { Component } from '@angular/core';
import { product, SharedService } from '../shared.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  id = 0;
  name = '';
  price = 0;
  qty = 0;
  
  constructor(private prodservice: SharedService) { }

  addpr() {
    const newp: product = {
      id: this.id,
      name: this.name,
      price: this.price,
      qty: this.qty
    };

    this.prodservice.addproduct(newp);
    this.resetForm();
  }
   resetForm() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.qty = 0;
  }
}

