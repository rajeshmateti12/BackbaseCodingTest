import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { SelectedCityComponent } from './selected-city.component';
import { GetWeatherDataService } from '../shared/get-weather-data.service';

describe('SelectedCityComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GetWeatherDataService]
  }));

  it('should be created', () => {
    const service: GetWeatherDataService = TestBed.get(GetWeatherDataService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: GetWeatherDataService = TestBed.get(GetWeatherDataService);
    expect(service.getMultipleCitiesData).toBeTruthy();
  });

});