import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  // this function is created for returning the observable
  getData(data:any){
    return of(data + 'video uploded')
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
    // Ex - 02  | Map + mergeAll
    // It return data because it uses mergeAll
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer2')
    })


    //***************************************************************************************//
    // Ex - 03  | mergeMap
    // It return data because it uses mergeMap
    source.pipe(
      mergeMap(res => this.getData(res)),
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer3')
    })


  }

}
