import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
title = 'calculator';
 public box1 = '';
public navigation = ["Home", "About Us", "Contact"]
  
  
  
  constructor() { }

  ngOnInit() {
  }

add(){
var expression = this.box1;
  return eval(expression);

}
}