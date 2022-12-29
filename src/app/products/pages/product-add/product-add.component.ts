import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getFormData();
  }
  get IsValid() {
    return this.formGroup.controls;
  }
  getFormData() {
    this.formGroup = this.fb.group({
      id: 0,
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: '',
      category: '',
      description: '',
    });
  }

  addProduct() {
    console.log(this.formGroup.value);
    return this.productService
      .addProduct(this.formGroup.value)
      .subscribe((response: any) => {
        if (response) {
          this.toastr.success('Added Successfuly');
          this.formGroup.reset();
        } else {
          this.toastr.error('Error');
        }
      });
  }
}
