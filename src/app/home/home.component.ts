import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Winnie';
  public age = 15;
  public fruit = ['Apple','Grape', 'Orange', 'Mango', 'Durian'];
  public fruit2 = [
    { name: 'Apple', price: 12, discount: false}, 
    { name: 'Grape', price: 10, discount: true},
    { name: 'Orange', price: -5, discount: false},
    { name: 'Mango', price: -10, discount: true}
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('fruit = ', this.fruit2)
  }

}
