import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  msg : string = "Change my color";
  color: string = "blue";
  cssclass: string = "big";

  constructor() { }

  ngOnInit() {
  }

  changeColor(){
    this.color = this.color === "blue" ? "red" : "blue";
  }

  changeClass(){
    this.cssclass = this.cssclass === "big" ? "small" : "big";
  }

  getClass(){
    return "my-"+this.cssclass;
  }
}
