import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DemoService } from "../demo.service";
import { MediaItem } from "../media-item";
import { Voucher } from "../../shared/index";
import { VouchersService } from "../../vouchers/voucher.service";
import * as moment from 'moment';
import { Observable } from "rxjs/Observable";
import { Observer, Subscription } from "rxjs";



@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.css"]
})
export class ObservablesComponent implements OnInit {

  media: Observable<MediaItem[]>;
  current: Observable<MediaItem[]>;
  upcoming: Observable<MediaItem[]>;

  mediaObsSubscritpion: Subscription;

  currentView: CurrentView;
  view = CurrentView;
  
  constructor(
    private httpClient: HttpClient,
    private http: Http,
    private vs: VouchersService,
    private ds: DemoService
  ) {
    const mediaObservable = Observable.create((observer: Observer<MediaItem>)=>{
      setTimeout(()=>{
        observer.next({ title: "Movie starting at " + moment().format('h:mm:ss a'), startTime: new Date()})
      }, 100)

      this.mediaObsSubscritpion = mediaObservable.subscribe((data)=>console.log(data))
    })
  }



  ngOnInit() {
    this.currentView = CurrentView.Filter;
  }

  useFilter() {
    this.currentView = CurrentView.Filter;

    this.media = this.ds.getMedia();
    let dt = new Date();
    this.current = this.media.map(mis =>
      mis.filter(mi => mi.startTime < new Date())
    );
    this.upcoming = this.media.map(mis =>
      mis.filter(mi => mi.startTime >= new Date())
    );
  }

  consumeStream(){
    // this.currentView = CurrentView.Stream;

    // this.ds.getMediaStream().subscribe(data=>this.media = data);

    
  }

}

enum CurrentView{
  Filter,
  Stream
}
