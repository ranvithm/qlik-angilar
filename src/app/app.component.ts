import { Component, OnInit } from '@angular/core';
import { TSQlik, QSApp, QSProps } from 'ts-qlik'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  qlik = null;
  active = 'qlik';
  config = {
    "host": "localhost",
    "port": 80,
    "prefix": "/",
    "isSecure": false
  };

  ngOnInit() {
    this.qlik = null;
  }

  callQlikFn = () => {
    TSQlik(this.config).then((q) => {
      this.qlik = q;
    })
  }

  changeTab = (data) => {
    this.active = data;
    if(data === 'app') {
      QSApp('031ec68a-9247-4fc5-9ddd-3b1764924aab', this.config).then((q) => {
        q.currApp.app.getObject('obj1', 'VtfsZDc')
        q.currApp.app.getObject('obj2', 'JcJvj')
      })
    }
  }

}
