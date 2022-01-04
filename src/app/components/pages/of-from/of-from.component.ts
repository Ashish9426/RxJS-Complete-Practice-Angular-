import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {


  obsMsg:any;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {

    const Obs1 = of('Ashish', 'Tarun', 'Abhishek')
    Obs1.subscribe(res=>{
      // console.log(res)
      this._designUtility.print(res, 'elContainer')
    })


    const Obs2 = of({a:'Ashish', b:'Tarun', c:'Abhishek'})
    Obs2.subscribe(res=>{
      // console.log(res)
      this.obsMsg = res
    })

    // From - Array
    const Obs3 = from(['Angular', 'React', 'Javascript'])
    Obs3.subscribe(res=>{
      // console.log(res)
      this._designUtility.print(res, 'elContainer3')
    })

    //From -Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolve')
      }, 3000);
    })
    const Obs4 = from(promise);
    Obs4.subscribe(res => {
      console.log('From Promise =>', res)
      this._designUtility.print(res, 'elContainer4')
    })

    //From -String
      const Obs5 = from('Welcome to Angular');
      Obs5.subscribe(res => {
      console.log('From Promise =>', res)
      this._designUtility.print(res, 'elContainer5')
    })

  }

}
