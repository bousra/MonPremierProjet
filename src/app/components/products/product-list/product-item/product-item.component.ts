import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from 'src/app/model/product.model';
import {ActionEvent, ProductActionsTypes} from '../../../../State/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | null=null;
  @Output() eventEmitter: EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onDelete(product: Product) {
    this.eventEmitter.emit({
      type: ProductActionsTypes.DELETE_PRODUCT,
      payload: product
    });
  }

  // tslint:disable-next-line:typedef
  onEdit(product: Product) {
    this.eventEmitter.emit({
      type: ProductActionsTypes.EDIT_PRODUCT,
      payload: product
    });
  }

  // tslint:disable-next-line:typedef
  onSelect(product: Product) {
    this.eventEmitter.emit({
      type: ProductActionsTypes.SELECT_PRODUCT,
      payload: product
    });
  }
}
