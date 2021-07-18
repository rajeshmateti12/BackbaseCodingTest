import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectedCityComponent } from './selected-city/selected-city.component';
import { LoaderComponent } from './loader/loader.component';
import { LoadingInterceptor } from './shared/loader.interceptor';
import { HeaderComponent } from './header/header.component';
import { RemoveSpaceFromClassPipe } from './remove-space-from-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectedCityComponent,
    LoaderComponent,
    HeaderComponent,
    RemoveSpaceFromClassPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
