import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component implements OnInit {

  userName1:string = 'Radheshyam';

  constructor(private _designUtility: DesignUtilityService) { 
    this._designUtility.userName1.subscribe(res => {
      this.userName1 = res
    })
  }

  ngOnInit(): void {
  }

}
