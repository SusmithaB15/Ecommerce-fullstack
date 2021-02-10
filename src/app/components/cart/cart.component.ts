import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./../../../assets/css/bootstrap/css/bootstrap.min.css','./../../../assets/css/bootstrap-select/css/bootstrap-select.min.css','./../../../assets/css/style.default.css','./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goto(path:any)
  {
    this.router.navigate([path]);
  }

}
