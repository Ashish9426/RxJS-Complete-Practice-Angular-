import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, AfterViewChecked} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit,AfterViewChecked {

  @ViewChild('addbtn') addBtn:ElementRef;

  constructor() { 
    
  }

  ngOnInit(): void { 
    
  }

  ngAfterViewInit(){
       // let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
      console.log(res)

      // let countVal = 'video' + count++;
      // console.log(countVal)
      // this.print(countVal)
    })
  }


  ngAfterViewChecked(){
   
  }

  print(val:any, containerId:any){
    let el = document.createElement('li')
    el.innerText = val;
    document.getElementById(containerId).appendChild(el)
  }

}
