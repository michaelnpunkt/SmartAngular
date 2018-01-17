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
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";


enum CurrentView{
  CreateObservableItem,
  CreateObservableArray,
  Filter,
  Stream
}

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.css"]
})
export class ObservablesComponent implements OnInit, OnDestroy {

  media: Observable<MediaItem[]>;
  current: Observable<MediaItem[]>;
  upcoming: Observable<MediaItem[]>;

  currentView: CurrentView;
  view = CurrentView;

  mediaObservable: Observable<MediaItem>
  mediaObservableArray: Observable<MediaItem[]>
  mediaItems: MediaItem[];
    
  constructor(
    private httpClient: HttpClient,
    private http: Http,
    private vs: VouchersService,
    private ds: DemoService
  ) { }

  ngOnInit() {
    this.currentView = CurrentView.CreateObservableItem;
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  createMediaItemObservable(){
    this.currentView = CurrentView.CreateObservableItem;   

    this.mediaObservable = Observable.create((observer: Observer<MediaItem>) => {
      setTimeout(() => {
        observer.next(<MediaItem>{title: `Media created at: ${moment().format("h:mm:ss a")}`});
      }, 0);
      setTimeout(() => {
        observer.next(<MediaItem>{title: `Media created at: ${moment().format("h:mm:ss a")}`});
      }, 2000);
      setTimeout(() => {
        observer.next(<MediaItem>{title: `Media created at: ${moment().format("h:mm:ss a")}`});
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next(<MediaItem>{title: `Media created at: ${moment().format("h:mm:ss a")}`});
      }, 6000);
    });

    let mediaObsSubscritpion: Subscription = this.mediaObservable.subscribe(
      (data: MediaItem) => { console.log("Media created: ", data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  createMediaItemArrayObservable(){

    const mediaArray: MediaItem[] = []

    this.currentView = CurrentView.CreateObservableArray;   

    this.mediaObservableArray = Observable.create((observer: Observer<MediaItem[]>) => {
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `Media created at: ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 0);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `Media created at: ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 2000);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `Media created at: ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 4000);
    });

    this.mediaObservableArray.subscribe((data)=>{
      this.mediaItems = data;
    })
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
