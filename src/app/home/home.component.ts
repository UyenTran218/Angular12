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

  constructor() { }

  ngOnInit(): void {
    console.log('fruit = ', this.fruit)
  }

}
