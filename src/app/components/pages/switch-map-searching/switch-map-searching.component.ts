import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map-searching',
  templateUrl: './switch-map-searching.component.html',
  styleUrls: ['./switch-map-searching.component.css']
})
export class SwitchMapSearchingComponent implements AfterViewInit {

  @ViewChild('seachForm') searchForm: NgForm;
  searchTerm:string

  constructor() { }

  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;

    formValue.pipe(
      // map(data => data['searchTerm'])
      pluck('searchTerm')
    )
    .subscribe(res => {
      console.log(res)
    })
    
  }

}
