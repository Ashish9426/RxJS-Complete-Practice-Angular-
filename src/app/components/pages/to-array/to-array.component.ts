import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  user = [
    {name:"Tarun", skill:"Angular"},
    {name:"Ashish", skill:"Angular"},
    {name:"Abhishek", skill:"Asp.Net Core"},
    {name:"Prul", skill:"Python"},
    {name:"Muskan", skill:"Full Stack"},
  ];

  constructor() { }

  sorceSub: Subscription;

  ngOnInit(): void {

    //Example - 01
    const source = interval(1000);
    this.sorceSub = source.pipe(take(8),toArray()).subscribe(res =>{
      console.log(res)

      // if(res>=8){
      //   this.sorceSub.unsubscribe()
      // }
    })

    //Example - 02
    const source2 = from(this.user);source2.pipe(toArray()).subscribe(res => {
      console.log(res)
    })

    //Example - 03
    let source3 = of('Ashish', 'Saurabh', 'Tarun', 'Shail', 'Abhinav')
    source3.pipe(toArray()).subscribe(res => {
      console.log(res)
    })

  }

}
