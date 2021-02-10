import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./../../../assets/css/bootstrap/css/bootstrap.min.css','./../../../assets/css/bootstrap-select/css/bootstrap-select.min.css','./body.component.css']
})
export class BodyComponent implements OnInit {
  cval=0
  prods=[new products(1,"/assets/img/product-1.jpg",'Kui Ye Chen’s AirPods',250,5,'metal airpods'),
  new products(1,"/assets/img/product-1.jpg",'Kui Ye Chen’s AirPods',250,5,'metal airpods'),
  new products(1,"/assets/img/product-1.jpg",'Kui Ye Chen’s AirPods',250,5,'metal airpods')
  ]
  cart=[]
  constructor(private router:Router,private productService: ProductService) { }

  ngOnInit(): void {
  
  }
  goto(path: any){
    this.router.navigate([path]);
  }
  handleAddtoCart()
  {
    
  }
  
}
export class products {
  constructor(public pid: number,public fullpath:string, public pname:string,public cost:number,public quantity:number,public description:string) {

   }
}
