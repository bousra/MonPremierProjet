import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/product.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../State/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsAncien: Product[] | null = null;
  productsbeforePipe$: Observable<Product[]> | null = null;
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum= DataStateEnum;
  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onGetAllProductsAncien() {
    this.productService.getAllProducts().subscribe(data => {
      this.productsAncien = data;
    }, error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  onGetAllProductsBeforePipe() {
    this.productsbeforePipe$ = this.productService.getAllProducts();
  }
  // tslint:disable-next-line:typedef
  onGetAllProducts() {
    // @ts-ignore
    this.products$ = this.productService.getAllProducts().pipe(
      map( data =>{
        return ({dataState: DataStateEnum.LOADED, data});
    }),
        startWith({dataState: DataStateEnum.LOADING}),
      catchError(err =>of({dataState: DataStateEnum.ERROR,errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetSelectedProducts() {
    // @ts-ignore
    this.products$ = this.productService.getSelectedProducts().pipe(
      map( data =>{
        return ({dataState: DataStateEnum.LOADED, data});
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err =>of({dataState: DataStateEnum.ERROR,errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetAvailableProducts() {
    // @ts-ignore
    this.products$ = this.productService.getAvailableProducts().pipe(
      map( data =>{
        return ({dataState: DataStateEnum.LOADED, data});
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err =>of({dataState: DataStateEnum.ERROR,errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onSearch(dataForm: any) {
    // @ts-ignore
    this.products$ = this.productService.getResearchProducts(dataForm.keyword).pipe(
      map( data =>{
        console.log(dataForm.keyword);
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data});
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err =>of({dataState: DataStateEnum.ERROR,errorMessage: err.message}))
    );
  }

}
