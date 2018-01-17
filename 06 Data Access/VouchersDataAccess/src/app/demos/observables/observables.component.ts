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
  FilterReactive,
  GetObservablesFromService
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

  playingLocal: MediaItem[];
  upcomingLocal: MediaItem[];

  currentView: CurrentView;
  view = CurrentView;

  mediaObservable: Observable<MediaItem>
  mediaSingletonObs: Subscription;

  mediaArrayObs: Observable<MediaItem[]>
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

    let label = "Current Media created at:"
    this.currentView = CurrentView.CreateObservableItem;   

    this.mediaObservable = Observable.create((observer: Observer<MediaItem>) => {
      setInterval(() => {
        observer.next(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`});
      }, 1000);
    });

    this.mediaSingletonObs = this.mediaObservable.subscribe(
      (data: MediaItem) => { console.log("Media created: ", data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );

  }

  unsubscribeMediaItem(){
    this.mediaSingletonObs.unsubscribe();
    console.log("unsbscribed mediaObsSubscritption")
  }

  createMediaItemArrayObservable(){

    let label = "Media created at:"
    const mediaArray: MediaItem[] = []
    this.currentView = CurrentView.CreateObservableArray;   

    this.mediaArrayObs = Observable.create((observer: Observer<MediaItem[]>) => {
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 0);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 2000);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        mediaArray.push(<MediaItem>{title: `${label} ${moment().format("h:mm:ss a")}`})
        observer.next(mediaArray);
      }, 6000);

    });

    this.mediaArrayObs.subscribe((data)=>{
      this.mediaItems = data;
    })
  }

  createMediaItemArrayService(){

    this.currentView = CurrentView.GetObservablesFromService;
    this.ds.getMediaStream().subscribe(data=>this.mediaItems = data);

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

  useFilterReactive(){
    debugger;

    this.currentView = CurrentView.Filter;

    this.media = this.ds.getMedia();
    this.media.subscribe(data=>{

      let dt = new Date();
      this.current = this.media.map(mis =>
        mis.filter(mi => mi.startTime < new Date())
      );
      this.upcoming = this.media.map(mis =>
        mis.filter(mi => mi.startTime >= new Date())
      );

    })    
  }

  useFilterReactive$(){
    debugger;
    
    this.currentView = CurrentView.Filter;

    // 
    const media$ = this.ds.getMediaStream();
    media$.subscribe(data=>{

      console.log("data changed", data)
      // let dt = new Date();
      // this.playingLocal = data.filter((item:MediaItem)=>{
      //   item.startTime < dt;
      // })
      // this.upcomingLocal = data.filter((item:MediaItem)=>{
      //   item.startTime >= dt;
      // })

      // let dt = new Date();
      // this.current = this.media.map(mis =>
      //   mis.filter(mi => mi.startTime < new Date())
      // );
      // this.upcoming = this.media.map(mis =>
      //   mis.filter(mi => mi.startTime >= new Date())
      // );

    })   



    this.ds.getMediaStream().subscribe(data =>{

      let dt = new Date();
      this.current = this.media.map(mis =>
        mis.filter(mi => mi.startTime < new Date())
      );
      this.upcoming = this.media.map(mis =>
        mis.filter(mi => mi.startTime >= new Date())
      );

    })    
  }
}
