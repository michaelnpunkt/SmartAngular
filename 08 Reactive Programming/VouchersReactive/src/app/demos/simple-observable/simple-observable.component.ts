import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-simple-observable",
  templateUrl: "./simple-observable.component.html",
  styleUrls: ["./simple-observable.component.scss"]
})
export class SimpleObservableComponent implements OnInit {
  numbers = [1, 5, 10, 18, 22];
  result: Observable<number[]>;
  url = "/assets/demos.json";

  constructor() {}

  ngOnInit() {}

  useObsFrom() {
    let result = Observable.from(this.numbers).subscribe((data: number) =>
      console.log("useObsFrom: ", data)
    );
  }

  useObsCreate() {
    this.result = Observable.create(observer => {
      let index = 0;

      let getNumber = () => {
        observer.next(this.numbers[index++]);

        if (index < this.numbers.length) {
          setTimeout(getNumber, 250);
        } else {
          observer.complete();
        }
      };

      getNumber();
    });

    this.result.subscribe((data: number[]) =>
      console.log("useObsCreate: ", data)
    );
  }

  useOperator() {
    this.result = Observable.create(observer => {
      let index = 0;

      let getNumber = () => {
        observer.next(this.numbers[index++]);

        if (index < this.numbers.length) {
          setTimeout(getNumber, 250);
        } else {
          observer.complete();
        }
      };

      getNumber();
    })
      .map(n => n * 2)
      .filter(n => n > 4);

    this.result.subscribe((data: number[]) =>
      console.log("useOperator: ", data)
    );
  }

  simpleLoad(): Observable<any> {
    return Observable.create(observer => {
      let xhr = new XMLHttpRequest();

      xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          observer.next(data);
          observer.complete();
        } else {
          observer.error(xhr.statusText);
        }
      });

      xhr.open("GET", this.url);
      xhr.send();
    });
  }

  usePromiseToObs() {
    let load = this.simpleLoad().subscribe(data => console.log(data));
  }
}
