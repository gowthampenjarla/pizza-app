import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OrdersLandingComponent } from "./components/orders-landing/orders-landing.component";
import { OrderDetailComponent } from "./components/order-detail/order-detail.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, OrdersLandingComponent, OrderDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
