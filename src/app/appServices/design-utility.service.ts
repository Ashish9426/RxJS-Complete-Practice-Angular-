import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();

  userName1 = new Subject<string>();
  userName = new BehaviorSubject<string>('Akshat');

  videoEmit = new ReplaySubject<string>(3, 5000);

  asyncVideoEmit = new AsyncSubject();

  constructor() { }

  print(val:any, containerId:any){
    let el = document.createElement('li')
    el.innerText = val;
    document.getElementById(containerId).appendChild(el)
  }
}
