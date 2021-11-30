import {Component, OnInit, Output} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/product.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from '../../State/product.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsAncien: Product[] | null = null;
  productsbeforePipe$: Observable<Product[]> | null = null;
  @Output() products$: Observable<AppDataState<Product[]>> | null = null;


  readonly DataStateEnum= DataStateEnum;
  constructor(private productService: ProductsService, private router: Router) {
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

  // tslint:disable-next-line:typedef
  onSelect(p: Product) {
  this.productService.selectOrUnSelectProduct(p)
    .subscribe(data=>{
      p.selected=data.selected;
    });
  }

  // tslint:disable-next-line:typedef
  onDelete(p: Product) {
    const valider = confirm('Etes vous sûr de vouloir supprimer');
    if(valider) {
    this.productService.deleteProduct(p)
      .subscribe(data=>{
        this.onGetAllProducts();
      });
    }
  }

  // tslint:disable-next-line:typedef
  onUpdate(p: Product) {
    this.productService.updateProduct(p)
      .subscribe(data=>{
        this.onGetAllProducts();
      });
  }

  // tslint:disable-next-line:typedef
  onNewProducts() {
    this.router.navigateByUrl('/newProduct');
  }
  // tslint:disable-next-line:typedef
  onEdit(p: Product){
    this.router.navigateByUrl('/editProduct/'+p.id);
  }

  // tslint:disable-next-line:typedef
  onActionEvent($event: ActionEvent) {
    console.log($event.type);
    switch ($event.type){
      case(ProductActionsTypes.GET_ALL_PRODUCTS): this.onGetAllProducts();break;
      case(ProductActionsTypes.GET_AVAILABLE_PRODUCTS): this.onGetAvailableProducts();break;
      case(ProductActionsTypes.GET_SELECTED_PRODUCTS): this.onGetSelectedProducts();break;
      case(ProductActionsTypes.SEARCH_PRODUCTS): this.onSearch($event.payload);break;
      case(ProductActionsTypes.NEW_PRODUCTS): this.onNewProducts();break;
    }
  }
}
