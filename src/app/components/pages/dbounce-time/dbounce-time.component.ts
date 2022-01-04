import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-dbounce-time',
  templateUrl: './dbounce-time.component.html',
  styleUrls: ['./dbounce-time.component.css']
})
export class DbounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput0') myInput0:ElementRef;
  reqData0:any;
  @ViewChild('myInput') myInput:ElementRef;
  reqData = null;
  

  @ViewChild('myInput2') myInput2:ElementRef;
  reqData2 = null;

  constructor() { }  //private loadingBar: LoadingBarService

  ngOnInit(): void {  
  }

  ngAfterViewInit(){

    //Ex - 01
    const searchTerm0 = fromEvent<any>(this.myInput0.nativeElement, 'keyup').pipe(
      map(event => event.target.value)
    )
    searchTerm0.subscribe(res => {
      console.log(res)      
      this.reqData0 = res;
    })


    //Ex - 01 Updated (Debounce Time)
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    )

    searchTerm.subscribe(res => {
      console.log(res)
      this.reqData = res;
      // this.loadingBar.start(500);

      setTimeout(() => {
        this.reqData = null;
        // this.loadingBar.stop(1000);
      }, 3000);
    })



    //Ex - 02 (DistincetUntilChange)
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )

    searchTerm2.subscribe(res => {
      console.log(res)
      this.reqData2 = res;
      // this.loadingBar.start(500);

      setTimeout(() => {
        this.reqData2 = null;
        // this.loadingBar.stop(1000);
      }, 3000);
    })

  }

}
