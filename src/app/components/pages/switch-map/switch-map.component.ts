import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  // this function is created for returning the observable
  getData(data:any){
    // return of(data + 'video uploded').
    return of(data + 'video uploded').pipe(delay(1000))
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01  | Map
    source.pipe(
      map(data => this.getData(data))
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
    // Ex - 02  | Map + switchAll
    source.pipe(
      map(res => this.getData(res)),
      switchAll()
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer2')
    })


    //***************************************************************************************//
    // Ex - 03  | switchMap
    source.pipe(
      switchMap(res => this.getData(res)),
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer3')
    })

  }

}
