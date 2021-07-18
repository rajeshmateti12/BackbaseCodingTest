import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetWeatherDataService } from '../shared/get-weather-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  citiesWeatherData: any;
  constructor(
    private getWeatherDataService: GetWeatherDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  // to retrive 5 cities weather data
  getWeatherData = () => {
    this.getWeatherDataService.getMultipleCitiesData().subscribe((data: any) => {
      //console.log(data);
      this.citiesWeatherData = data;
    });
  }

  // navigate to next screen with city id
  goToDetailedPage = (id: number) => {
    this.router.navigate(['selectedCity', id]);
  }
}
