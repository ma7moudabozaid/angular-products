import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product';
import { ProductService } from '../core/services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    return this.productService.getProducts().subscribe((response: any) => {
      if (response) {
        this.products = response;
      }
    });
  }
}
