import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.scss']
})
export class SimpleObservableComponent implements OnInit {

  result: Observable<number []>;

  constructor() { }

  ngOnInit() {
  }

  useObsFrom(){

  }

  useObsCreate(){

  }

  usePromiseToObs(){
    
  }

}
