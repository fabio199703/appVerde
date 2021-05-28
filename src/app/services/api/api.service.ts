/* eslint-disable eqeqeq */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    { id: 1, name:'Aloe', price: 50000, category:'India', img:'assets/imgs/aloe.png'},
    { id: 2, name:'rojas', price: 40000, category:'Colombia', img:'assets/imgs/2.png'},
    { id: 3, name:'rosa', price: 30000, category:'Paraguay', img:'assets/imgs/1.png'}
  ];

  constructor() { }
  getItem(id){
    const item = this.items.find(x => x.id == id);
    return item;

  }
}
