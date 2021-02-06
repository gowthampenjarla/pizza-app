import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderDetailComponent } from "./components/order-detail/order-detail.component";
import { OrdersLandingComponent } from "./components/orders-landing/orders-landing.component";

const routes: Routes = [
  { path: "", component: OrdersLandingComponent },
  { path: "detail", component: OrderDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
