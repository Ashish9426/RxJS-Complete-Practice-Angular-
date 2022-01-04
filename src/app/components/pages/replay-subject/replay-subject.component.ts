import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  // Interval Subscription
  intSubscription:Subscription;

  // List Data
  user1List = [
    'Angular 1',
    'Angular 2'
  ];
  user2List = [
    // 'Html 1',
    // 'Html 2'
  ];
  user3List = [
    // 'Javascript 1',
    // 'Javascript 2'
  ];

  // SubscribeModes
  subscribemode2:boolean = false;
  subscribemode3:boolean = false;

  //Subscriptions
  subscription2:Subscription;
  subscription3:Subscription;

  //Toggel properties
  methodInterval:boolean = false;

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.videoEmit.subscribe(res => {
      console.log(res);
      this.user1List.push(res)
    })
  }

  // Video Add Method
  onVideoAdd(video){
    // console.log(video)
    this._du.videoEmit.next(video)
  }

  //User 2 Subscribe Button
  user2Subscribe(){

    if(this.subscription2)
    {
      this.subscription2.unsubscribe()
    }
    else
    {
      this.subscription2 = this._du.videoEmit.subscribe(res => {
        this.user2List.push(res)
      })
    }
      
    this.subscribemode2 = !this.subscribemode2
  }

  //User 3 Subscribe Button
   user3Subscribe(){

    if(this.subscription3)
    {
      this.subscription3.unsubscribe()
    }
    else
    {
      this.subscription3 = this._du.videoEmit.subscribe(res => {
        this.user3List.push(res)
      })
      
    }
      
    this.subscribemode3 = !this.subscribemode3
  }

  // Toggle Method
  toggleMethod(){

    const broadCastVideo = interval(1000);

    if(!this.methodInterval){
      this.intSubscription = broadCastVideo.subscribe(res => {
        this._du.videoEmit.next('Video ' + res)
      })
    }
    else
    {
      this.intSubscription.unsubscribe();
    }

    this.methodInterval = !this.methodInterval
  }

}
