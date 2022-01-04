import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  // userName:string = 'Prateek';
  userName:string;

  constructor(private _designUtility: DesignUtilityService) { 
    this._designUtility.userName.subscribe(res => {
      this.userName = res
    })
  }

  ngOnInit(): void {
  }

  onChange(uname){
    console.log(uname.value)
    this._designUtility.userName.next(uname.value)
  }

}
