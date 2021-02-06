import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-order-detail",
  templateUrl: "./order-detail.component.html",
  styleUrls: ["./order-detail.component.scss"],
})
export class OrderDetailComponent implements OnInit {
  constructor(private location: Location) {}
  order;
  ngOnInit() {
    this.order = this.location.getState();
    console.log(this.location.getState());
  }

  getTotal(order) {
    let sum = 0;
    if (order.items.length > 0) {
      order.items.forEach((item) => {
        sum = sum + item.number * item.price;
      });
    }
    return sum;
  }
}
