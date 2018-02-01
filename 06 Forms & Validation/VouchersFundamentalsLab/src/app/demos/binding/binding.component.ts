
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  hide: boolean = false;
  
  person = {id: 1, name: "Alex", age: 47, imgUrl: "https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg", gender:'male'};
  
  persons : Person[] = [
    {name: "Heinz", gender: "male"}, 
    {name: "Brunhilde", gender: "female"},
    {name: "Susi", gender: "female"}];

  selectedPerson: Person = this.persons[0];

  isActive: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  toggleDisplay(){
    this.hide = !this.hide;
  }

  handleChange(p: Person){
    console.log("value received from eventbinding");
    console.log(p);
  }
}

interface Person {
  name: string;
  gender: string;
  }
