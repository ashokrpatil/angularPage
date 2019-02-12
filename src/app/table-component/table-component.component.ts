import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})

export class TableComponentComponent implements OnInit {
  displayedColumns: string[] = ['CheckBox','ItemDescription', 'ItemCode', 'DetailedDescription', 'UOM','Quantity','DeliveryDate','Template','delete'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  CheckBox:boolean,
  ItemDescription:string;
  ItemCode: number;
  DetailedDescription:string;
  UOM:string;
  Quantity:number;
  DeliveryDate: string;
  Template: string;
  delete:string

}

const ELEMENT_DATA: PeriodicElement[] = [
  {CheckBox:true,ItemDescription: 'PAREX ADSORBENT', ItemCode:10006390, DetailedDescription: "", UOM: 'KT',Quantity:500,DeliveryDate:'15-Oct-2018',Template:'--',delete:''},
  {CheckBox:true,ItemDescription: 'CETANE NUMBER IMPROVER', ItemCode:9998214764, DetailedDescription: "", UOM: 'KL',Quantity:300,DeliveryDate:'15-Oct-2018',Template:'--',delete:''}
  
];