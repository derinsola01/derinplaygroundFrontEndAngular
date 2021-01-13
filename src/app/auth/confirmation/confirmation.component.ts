import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) {}

  get headerOptions(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS'],
        'Access-Control-Allow-Headers': 'Content-Type, application/json'
      })
    };
    return httpOptions;
  }

  ngOnInit() {
      this.sendToBackEnd(this.router.url);
  }

  sendToBackEnd(confirmationUrl){
      // const url = 'http://localhost:8900' + confirmationUrl;
      const holder = confirmationUrl.split('/');
      const newUrl = 'http://localhost:8900/' + holder[1] + '/' + holder[2];
      const data = { confirmationToken: holder[3]};
      this.httpClient.post(newUrl, data, this.headerOptions)
        .subscribe(response => { console.log('response gotten is: ', response); });
  }

}
