import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor() { }

  users = [
    {
      name: "Ashish",
      skills: "Angular",
      job:{
        title: "Angular Developer",
        exp: "10 years"
      }
    },
    {
      name: "John",
      skills: "React ",
      job:{
        title: "React Developer",
        exp: "10 years"
      }
    },
    {
      name: "Robort",
      skills: "JavaScript",
      job:{
        title: "frontend Developer",
        exp: "10 years"
      }
    },
    {
      name: "Andarson",
      skills: "Html",
      job:{
        title: "UI Developer",
        exp: "10 years"
      }
    },
    {
      name: "Andrue",
      skills: "Typescript",
      job:{
        title: "Typescript Developer",
        exp: "10 years"
      }
    }
  ]

  data:any;
  data2:any;

  ngOnInit(): void {

    //Ex - 01
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data = res
    })

    //Ex - 02
    from(this.users).pipe(
      // map(data => data.name),
      pluck('job', 'title'),
      toArray()
    )
    .subscribe(res => {
      console.log(res)
      this.data2 = res
    })
  }

}
