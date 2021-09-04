import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Winnie';
  public age = 15;
  public fruit = ['Apple', 'Grape', 'Orange', 'Mango', 'Durian'];
  public fruit2 = [
    { name: 'Apple', price: 12, discount: false },
    { name: 'Grape', price: 10, discount: true },
    { name: 'Orange', price: -5, discount: false },
    { name: 'Mango', price: -10, discount: true },
  ];
  public districts: string[] = ['Districts'];
  public cities = [
    { city: 'Choose a city', district: ['Districts'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Ba Ria - Vung Tau',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Dong Nai',
      district: [
        'Thành phố Biên Hòa',
        'Thị xã Long Khánh',
        'Quận Tân Phú',
        'Huyện Cẩm Mỹ',
        'Huyện Định Quán',
        'Huyện Long Thành',
        'Huyện Nhơn Trạch',
        'Huyện Thống Nhất',
        'Huyện Trảng Bom',
        'Huyện Vĩnh Cửu',
        'Huyện Xuân Lộc',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('city = ', this.cities);
  }
  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }
    // console.log('event', city);
    // const search = this.cities.filter(data => data.city === city)
    // console.log('search', search);
    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }

    this.districts =
      this.cities.find((data) => data.city === city)?.district || [];
  }
}
