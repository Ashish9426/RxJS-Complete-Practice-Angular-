import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

   myColor:string = ''

  constructor(private _du:DesignUtilityService) { }
  

  ngOnInit(): void {

    const source = interval(1000);

    // Ex - 01

    //Subcriptions
   let obsSubcription:Subscription;

    const arr = ['Ashish', 'Tarun', 'Abhishek', 'Muskan', 'John', 'Alex', 'Robort']
    
    obsSubcription = source.pipe(
      tap(res => {
        
        // console.log('Tap before => '+res)
        if(res == 4){
          obsSubcription.unsubscribe()
        }
      }),
      map(res => arr[res]),
      tap(res => {
        // console.log('Tap after => '+res)
      })
    )
    .subscribe(res => {
      // console.log(res)
      this._du.print(res, "elContainer")
    })





   // Ex - 02
    //Subcriptions
    let obsSubcription1:Subscription;

    const color= ['Red', 'Green', 'Pink', 'Blue', 'Purple', 'Orange', 'Magenta']
    
    obsSubcription1 = source.pipe(
      tap(res => {
        this.myColor = color[res];
        console.log('Tap before => '+res)
        if(res == 7){
          obsSubcription1.unsubscribe()
        }
      }),
      map(res => color[res]),
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, "elContainer2")
    })




  }

}
