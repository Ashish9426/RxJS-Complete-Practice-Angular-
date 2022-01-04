import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-concat-switch-map',
  templateUrl: './merge-concat-switch-map.component.html',
  styleUrls: ['./merge-concat-switch-map.component.css']
})
export class MergeConcatSwitchMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  // this function is created for returning the observable
  getData(data:any){
    // return of(data + 'video uploded').
    return of(data + 'video uploded').pipe(delay(1000))
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01  | mergeMap
    source.pipe(
      mergeMap(res => this.getData(res)),
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer1')
    })

    //*****************************************************//
    // Ex - 02  | concatMap
    source.pipe(
      concatMap(res => this.getData(res)),
    )
    .subscribe(res => {
      console.log(res)
      this._du.print(res, 'elContainer2')
    })

    //******************************************************//
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
