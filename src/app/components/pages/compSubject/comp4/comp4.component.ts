import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userName1:string = 'Abhimanyu'

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
  }

  onChange(uname){
    console.log(uname.value)
    this._designUtility.userName1
  }

}
