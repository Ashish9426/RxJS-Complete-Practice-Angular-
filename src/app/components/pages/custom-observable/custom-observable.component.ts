import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  techStatus:any;
  techStatus2:any
  subs2:Subscription;

  names:any;
  nameStatus:any

  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {

    // Ex - 01(Manual)

    //old way to create observer
    // const cusObs1 = Observable.create(observer => {

    //Latest way to create observer
      const cusObs1 = new Observable(observer => {
        setTimeout(() => {
          observer.next('Angular')
        }, 1000);

        setTimeout(() => {
          observer.next('Typescript')
        }, 2000);

        setTimeout(() => {
          observer.next('HTML CSS')
          // observer.complete()
        }, 3000);

        setTimeout(() => {
          observer.next('Javascript')
          // observer.error(new Error('Limit Exceed'))
          // this.techStatus = 'error';
        }, 4000);

        setTimeout(() => {
          observer.next('JQuery');
          observer.complete();
          // this.techStatus = 'completed';
        }, 5000);

    })

    cusObs1.subscribe(res => {
          // console.log(res)
          this._designUtility.print(res, 'elContainer')
        },
      (err) => {
          this.techStatus = 'error';
        },
      () => {
          this.techStatus = 'completed';
        }
        )




        // Ex - 02(Custom Interval)
        const arr2 = ['Angular', 'Typescript', 'Javascript', 'Html', 'Css', 'React']
        const cusObs2 = new Observable(observer => {
          // let count = 1;
          let count = 0;
          setInterval(() => {
            // observer.next('Data Emit ' + count)
            observer.next(arr2[count])

            if(count >= 2){
              observer.error('Error Emit')
            }
            count++;
          }, 1000)
        })

        this.subs2 = cusObs2.subscribe(res => {
          // console.log(res)
          this._designUtility.print(res, 'elContainer2')
        },
      (err) => {
          this.techStatus2 = 'error';
        },
      () => {
          this.techStatus2 = 'completed';
        }
        )

        // Ex - 03(Random Names)
        const arr3 = ['Ashish', 'Tarun', 'Abhishek', 'Muskan', 'John', 'Alex', 'Robort']
        const cusObs3 = new Observable(observer => {
          let count = 0;
          setInterval(() => {
            observer.next(arr3[count])

            if(count >= 3){
              observer.error('Error Emit')
            }

            if(count >= 6){
              observer.complete()
            }
            count++;
          }, 1000)
        })


        cusObs3.subscribe(res => {
          console.log(res)
          this.names = res;    
        },
        (err) => {
            this.nameStatus = 'error';
          },
        () => {
            this.nameStatus = 'completed';
          }
        )

  }

  ngOnDestroy(){
    this.subs2.unsubscribe()

  }

}
