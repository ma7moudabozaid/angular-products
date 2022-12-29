import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../../core/models/product';
import { ProductService } from '../../../core/services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) {}

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

  openModalProductDetails(item: any) {
    const modalRef = this.modalService.open(ProductDetailsComponent);
    modalRef.componentInstance.item = item;
  }
}
