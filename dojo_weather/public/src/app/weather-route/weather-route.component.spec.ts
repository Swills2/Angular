import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherRouteComponent } from './weather-route.component';

describe('WeatherRouteComponent', () => {
  let component: WeatherRouteComponent;
  let fixture: ComponentFixture<WeatherRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
