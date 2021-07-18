import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { GetWeatherDataService } from '../shared/get-weather-data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [GetWeatherDataService],
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    const service: GetWeatherDataService = TestBed.get(GetWeatherDataService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: GetWeatherDataService = TestBed.get(GetWeatherDataService);
    expect(service.getMultipleCitiesData).toBeTruthy();
  });

});
