import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from '../../../State/product.state';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  @Output() productEvenEmitter: EventEmitter<ActionEvent> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onGetAllProducts() {
      this.productEvenEmitter.emit({
        type: ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  // tslint:disable-next-line:typedef
  onGetSelectedProducts() {
    this.productEvenEmitter.emit({
      type: ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  // tslint:disable-next-line:typedef
  onGetAvailableProducts() {
    this.productEvenEmitter.emit({
      type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  // tslint:disable-next-line:typedef
  onNewProducts() {
    this.productEvenEmitter.emit({
      type: ProductActionsTypes.NEW_PRODUCTS});
  }

  // tslint:disable-next-line:typedef
  onSearch(dataForm: any) {
    this.productEvenEmitter.emit({
      type: ProductActionsTypes.SEARCH_PRODUCTS,
      payload: dataForm});
  }
}
