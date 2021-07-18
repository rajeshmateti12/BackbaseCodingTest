import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetWeatherDataService } from '../shared/get-weather-data.service';

@Component({
  selector: 'app-selected-city',
  templateUrl: './selected-city.component.html'
})
export class SelectedCityComponent implements OnInit {
  selectedCityData: any;
  selectedCityId: any;
  filteredData: any = [];
  forecastData: any = [];
  constructor(
    private getWeatherDataService: GetWeatherDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.selectedCityId = this.route.snapshot.params['id'];
    this.getSelectedCity(this.selectedCityId);
  }

  // get current city data
  getSelectedCity(selectedCity: number) {
    this.getWeatherDataService.getSelectedCityData(selectedCity).subscribe(data => {
      if (data) {
        this.selectedCityData = data;
       // console.log(this.selectedCityData)
        this.getNextDaysData()
      }
    });
  }

  // Filter data for next days
  getNextDaysData() {
    for (var i = 0; i < this.selectedCityData.list.length; i++) {
      // this object is to create date and 
      let obj = {
        date: new Date(this.selectedCityData.list[i].dt_txt.split(' ')[0]).toDateString(),
        forecast: [this.selectedCityData.list[i].dt_txt.split(' ')[1], this.selectedCityData.list[i].weather[0].description]
      }
      this.filteredData.push(obj)
    }
    this.forecastData = Object.values(this.filteredData.reduce((acc: any, item: any) => {
      const { date, forecast } = item;
      const value = acc[date] || { date: date, forecast: [] };
      value.forecast.push(forecast);
      return { ...acc, [date]: value };
    }
      , {}))
   // console.log(this.forecastData)
  }
}