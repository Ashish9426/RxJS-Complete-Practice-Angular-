import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  //Subcriptions
  sub1:Subscription;
  sub2:Subscription;
  sub3:Subscription;

  //Message
  msg1:any
  msg2:any
  msg3:any

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {

    const broadCastVideo = interval(1000);

    //Ex - 01
    this.sub1 = broadCastVideo.pipe(
      map(data => 'Video : ' + data)
      // map(data => 'Square : ' + data * data)
    )
    .subscribe(res => {
      // console.log(res)
      this.msg1 = res;


      // if(res >= 5){
      //   this.sub1.unsubscribe()
      // }
    })
    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000)




    //Ex - 02
    this.sub2 = broadCastVideo.pipe(
      map(data => data * 3)
    )
    .subscribe(res => {
      // console.log(res)
      this.msg2 = res
    })
    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000)



    //Ex - 03

    const members = from([
      {id:1, name:"Ashish"},
      {id:2, name:"Tarun"},
      {id:3, name:"Prateek"},
      {id:4, name:"Vivek"},
      {id:5, name:"Abhishek"},
      {id:6, name:"Mukul"},
      {id:7, name:"Shiva"}
    ])

    members.pipe(
      map(data => data.name)
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer')
    })






  }

}
