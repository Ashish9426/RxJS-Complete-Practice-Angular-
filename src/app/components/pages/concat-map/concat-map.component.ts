import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  // this function is created for returning the observable
  getData(data:any){
    return of(data + 'video uploded').pipe(delay(2000))
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01  | Map
    // It return observable
    source.pipe(
      map(res => this.getData(res))
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer1')
    })
    //-------------------------------------------//

    // It return data because it uses subscribe inside subscribe
    source.pipe(
      map(res => this.getData(res))
    )
    .subscribe(res => res.subscribe(res2 => {
      console.log(res2)
      this._du.print(res2, 'elContainer11')
    }))

    //***************************************************************************************//
    // Ex - 02  | Map + concatAll
    // It return data because it uses concatAll
    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer2')
    })


    //***************************************************************************************//
    // Ex - 03  | concatMap
    // It return data because it uses concatMap
    source.pipe(
      concatMap(res => this.getData(res)),
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer3')
    })


  }

}
