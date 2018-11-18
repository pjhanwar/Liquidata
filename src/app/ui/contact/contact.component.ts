import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  hideSuccess = true;
  hideFail = true;
  model: any = {};
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  onSubmit() {
    const req = this.http.post('http://interview-contact-submit-api-lb-1009699934.us-east-1.elb.amazonaws.com/contact-us/send', {
      'email': this.model.email,
      'subject': this.model.subject,
      'body': this.model.message
    })
      .subscribe(
        res => {
          // console.log(res);
          if (res['message'] === 'Success') {
            // alert('Success');
            this.hideSuccess = false;
          } else {
            // alert('Failure: ' + res['message']);
            this.hideFail = false;
          }
        },
        err => {
          // alert('Failure' + JSON.stringify(err));
          this.hideFail = false;
        }
      );
  }
}
