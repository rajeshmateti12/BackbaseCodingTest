import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { GetWeatherDataService } from './get-weather-data.service';

describe('GetWeatherDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let getWeatherDataService: GetWeatherDataService;
  let citiData = [];
  let allCities_api_url = "http://api.openweathermap.org/data/2.5/group?id=2643743,3333169,2988507,2759794,2964574&units=metric&appid=e563ed3f6191dddab0179be3a9ea52cb";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GetWeatherDataService
      ]
    });
    //Instantaites HttpClient, HttpTestingController and EmployeeService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    getWeatherDataService = TestBed.inject(GetWeatherDataService);
    citiData = [
      {
        "coord": {
          "lon": -0.1257,
          "lat": 51.5085
        },
        "sys": {
          "country": "GB",
          "timezone": 3600,
          "sunrise": 1622605698,
          "sunset": 1622664543
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "main": {
          "temp": 26.3,
          "feels_like": 26.3,
          "temp_min": 25,
          "temp_max": 28.33,
          "pressure": 1012,
          "humidity": 38
        },
        "visibility": 10000,
        "wind": {
          "speed": 6.69,
          "deg": 90
        },
        "clouds": {
          "all": 67
        },
        "dt": 1622635765,
        "id": 2643743,
        "name": "London"
      }
    ];
  });

  beforeEach(inject(
    [GetWeatherDataService],
    (service: GetWeatherDataService) => {
      getWeatherDataService = service;
    }
  ));

  // afterEach(() => {
  //   httpTestingController.verify(); //Verifies that no requests are outstanding.
  // });

  it("should return all given cities data", () => {

    let result: any;
    getWeatherDataService.getMultipleCitiesData().subscribe(data => {
      result = data;
    });
    console.log(allCities_api_url)
    const request = httpTestingController.expectOne({
      method: "GET",
      url: allCities_api_url
    });

    request.flush([citiData]);
    expect(result[0]).toEqual(citiData); // it returns first data as declared
  });

});
