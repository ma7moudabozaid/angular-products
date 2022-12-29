import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + 'products?limit=10');
  }
  getProducat(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + `products/${id}`);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + 'products', product);
  }
}
