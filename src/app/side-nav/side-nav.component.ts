import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  list=[
    {
      number:'1',
      name:'Home',
      icon:'fa fa-home'
    },
    {
      number:'2',
      name:'Analytics',
      icon:'fa fa-chart-line'
    },
    {
      number:'3',
      name:'Products',
      icon:'fa fa-box'
    },
    {
      number:'4',
      name:'Order',
      icon:'fa fa-cart-shopping'
    },
    {
      number:'5',
      name:'Setting',
      icon:'fa fa-gear'
    },
    {
      number:'6',
      name:'About',
      icon:'fa fa-info-circle'
    },
    {
      number:'7',
      name:'Contact',
      icon:'fa fa-phone'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
