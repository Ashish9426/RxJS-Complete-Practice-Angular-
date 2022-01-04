import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  dataSet:any
  fetching:boolean = false;
  status = 'No Data';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.fetchDetails()
  }

  fetchDetails(){
    this.fetching = true;
    this.status = 'Fetching data ...'
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      // retry(2)
      retryWhen(err => err.pipe(
        delay(3000),
        scan( (retryCount) => {
          if(retryCount > 5){
            throw err;
          }
          else{
            retryCount = retryCount+1;
            console.log('retryCount => '+ retryCount);
            this.status = 'Retrying Attempt #' + retryCount;
            return retryCount
          }
        }, 0)
      ))
    )
    .subscribe(
      res => {
      console.log(res);
      this.dataSet = res;
      this.status = 'Data Fetched'
      this.fetching = false;

    },
    (err) => {
      console.log(err)
      this.fetching = false;
      this.status = 'Problem Fetching Data'

    })
    }

}
