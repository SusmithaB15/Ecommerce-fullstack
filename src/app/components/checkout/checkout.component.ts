import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./../../../assets/css/bootstrap/css/bootstrap.min.css','./../../../assets/css/bootstrap-select/css/bootstrap-select.min.css','./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goto(path: any)
  {
    this.router.navigate([path]);
  }

}
