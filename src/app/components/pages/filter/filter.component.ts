import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id:1, name:"Ashish", gender:"Male"},
    {id:2, name:"Shail", gender:"Female"},
    {id:3, name:"Soni", gender:"Female"},
    {id:4, name:"Vivek", gender:"Male"},
    {id:5, name:"Mukul", gender:"Male"},
    {id:6, name:"Trun", gender:"Male"},
    {id:7, name:"Monika", gender:"Female"},
    {id:8, name:"Priyanka", gender:"Female"},
    {id:9, name:"Shekhar", gender:"Male"},
    {id:10, name:"Sanjana", gender:"Female"},
    {id:11, name:"Neeraj", gender:"Male"},
    {id:12, name:"Ananat", gender:"Male"},

  ]

  data:any;
  data1:any;
  data2:any;
  data3:any;
  data4:any;
  data5:any;

  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr)

    //ORIGINAL DATA
    source.pipe(
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data = res
    })

    // Ex - 01
    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data1 = res
    })

     // Ex - 02
     source.pipe(
      // filter(member => member.gender == 'Male'),
      filter(member => member.gender == 'Female'),
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data2 = res
    })

    // Ex - 03
    source.pipe(
      filter(member => member.id <=6),
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data3 = res
    })

    // Ex - 04
    source.pipe(
      filter(member => member.id <=6 && member.gender == 'Female'),
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data4 = res
    })

    // Ex - 05
    source.pipe(
      filter(member => member.id <=6 && member.gender == 'Male'),
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data5 = res
    })

    
  }

}
