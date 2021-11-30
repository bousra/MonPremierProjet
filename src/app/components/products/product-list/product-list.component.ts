import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from '../../../State/product.state';
import {Product} from '../../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 @Input() productsInput$: Observable<AppDataState<Product[]>> | null = null ;
 @Output() productEventEmitter: EventEmitter<ActionEvent> =new EventEmitter<ActionEvent>();
 readonly DataStateEnum= DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSelect(product: Product) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.SELECT_PRODUCT,
      payload: product
    });
  }

  // tslint:disable-next-line:typedef
  onDelete(product: Product) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.DELETE_PRODUCT,
      payload: product
    });
  }

  // tslint:disable-next-line:typedef
  onEdit(product: Product) {
    this.productEventEmitter.emit({
      type: ProductActionsTypes.EDIT_PRODUCT,
      payload: product
    });
  }
}
