import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  addCustomer(){
    this.route.navigate(['customers/manage']);
  }

}
