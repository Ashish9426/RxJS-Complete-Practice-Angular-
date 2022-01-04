import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMsg:any;
  obsMsg1:any;

  videoSubscription: Subscription;
  videoSubscription2: Subscription;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    this.streamIntrerval();
    // this.streamTimer();
  }

  streamIntrerval(){
    let broadCastVideos = interval(1000)
    this.videoSubscription = broadCastVideos.subscribe(res=>{
    console.log(res)
    this.obsMsg = 'video ' + res
    this._designUtility.print(this.obsMsg, 'elContainer') 
    this._designUtility.print(this.obsMsg, 'elContainer2')
    this._designUtility.print(this.obsMsg, 'elContainer3')

    // if(res >= 5){
    //   this.videoSubscription.unsubscribe()
    // }
  })
  }

  streamTimer(){
      // timer(delay, interval)
      const broadCastVideos2 = timer(5000, 1000)
      this.videoSubscription = broadCastVideos2.subscribe(res1=>{
      console.log(res1)
      this.obsMsg1 = 'video ' + res1
      this._designUtility.print(this.obsMsg1, 'elContainer4') 
      this._designUtility.print(this.obsMsg1, 'elContainer5')
      this._designUtility.print(this.obsMsg1, 'elContainer6')
  
      if(res1 >= 5){
        this.videoSubscription2.unsubscribe()
      }
    })
  }

  

}
