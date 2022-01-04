import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component implements OnInit {

  userName1:string = 'Abhimanyu'

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
  }

  onChange(uname){
    console.log(uname.value)
    this._designUtility.userName1.next(uname.value)
  }

}
