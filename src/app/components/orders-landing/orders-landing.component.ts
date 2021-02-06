import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../../services/orders.service";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-orders-landing",
  templateUrl: "./orders-landing.component.html",
  styleUrls: ["./orders-landing.component.scss"],
})
export class OrdersLandingComponent implements OnInit {
  constructor(public orderService: OrdersService, public router: Router) {}

  orders;

  ngOnInit() {
    this.orderService.getOrders().subscribe((res) => {
      if (res.status === "success") {
        this.orders = res.ordersList;
        console.log(this.orders);
      }
    });
  }

  changeStatus(order) {
    this.orders.forEach((item) => {
      if (order.id === item.id) {
        if (order.orderStatus < 4) {
          order.orderStatus += 1;
          console.log(order);
        }
      }
    });
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

  getTotalItems(order) {
    let sum = 0;
    if (order.items.length > 0) {
      order.items.forEach((item) => {
        sum = sum + item.number;
      });
    }
    return sum;
  }

  navigateTo(order) {
    this.router.navigate(["detail"], {
      state: order,
    });
  }
}
