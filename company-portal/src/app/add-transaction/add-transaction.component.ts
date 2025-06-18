import { Component } from '@angular/core';
import { product, customer, SharedService, transaction } from '../shared.service';


@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {

    transaction: transaction = {
    date: new Date(),
    billamt: 0,
    transactionid: 0
    };

      constructor(private transservice: SharedService){}

  addTransaction(): void {
    const newTransaction: transaction = {
      ...this.transaction,
      date: new Date(this.transaction.date) // ensures proper Date object
    };

    // Optionally, you could push this to the service
    this.transservice.addtransaction(newTransaction);

    // Reset form fields
    this.transaction = {
      date: new Date(),
      billamt: 0,
      transactionid: 0
    };
  }

}
