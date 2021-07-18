import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  urlSub: any;
  routeSubscription: Subscription = new Subscription();
  appHeading: string;
  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.appHeading = "Weather Data";
    this.setParams();
  }

  // to show/hide back icon
  setParams() {
    this.routeSubscription = this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.urlSub = event['url'];
        // console.log(this.urlSub)
      });
  }
}
