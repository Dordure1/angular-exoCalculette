import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html'
})
export class CalculetteComponent implements OnInit {

  num1 : number = 0 
  num2:number = 0
  result : Number = 0 

  constructor() { }

  ngOnInit(): void {
  }
  
  addFunction()
  {
    this.result = this.num1 + this.num2
  }

  substractFunction()
  {
    this.result = this.num1 - this.num2
  }

  multiplicationFunction(){
    this.result = this.num1 * this.num2
  }

  divFunction()
  {
    this.result = this.num1 / this.num2
  }

}
