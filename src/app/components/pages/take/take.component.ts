import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  randomNames = ['Ashish', 'Tarun', 'Abhishek', 'Muskan', 'John', 'Alex', 'Robort']

  ngOnInit(): void {

    const nameSource = from(this.randomNames);

     // Original Data 
    nameSource.subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer')
    })

    // Ex - 01 
    // const source = interval(1000).pipe(
    //   take(5))
    nameSource.pipe(
      take(5)
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer1')
    })


    // Ex - 02 
    nameSource.pipe(
      takeLast(3)
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer2')
    })


    // Ex - 03 
    const source = interval(1000);

    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click')
    
    source.pipe(
      map(res => 'Number - ' + res),
      // takeUntil(condition1)
      takeUntil(condition2)
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer3')
    })
  }

}
