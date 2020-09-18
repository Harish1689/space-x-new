import { Component, OnInit } from '@angular/core';
import { ProductService } from '../app/services/app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Developer = 'Harish Kumar';
  filterArray: any = {
    limit: 100,
    launch_success: true,
    land_success: true,
    launch_year: '',
  };
  productListing: any = [];
  years: any = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.myproduct(this.filterArray).subscribe((data) => {
      this.productListing = data;
    });
  }

  filterByYear(launch_year) {
    debugger;
    this.filterArray.launch_year = launch_year;
    this.productService.myproduct(this.filterArray).subscribe((data) => {
      this.productListing = data;
    });
  }

  filterByLaunch(launch_success) {
    debugger;
    this.filterArray.launch_success = launch_success;
    this.productService.myproduct(this.filterArray).subscribe((data) => {
      this.productListing = data;
    });
  }

  filterByLand(land_success) {
    debugger;
    this.filterArray.launch_success = land_success;
    this.productService.myproduct(this.filterArray).subscribe((data) => {
      this.productListing = data;
    });
  }
}
