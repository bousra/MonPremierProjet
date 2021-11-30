import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  constructor(private fb: FormBuilder, private productService: ProductsService, private router: Router) {
  }

  productFormGroup?: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  onSaveProdcut() {
    this.submitted = true;
    if (this.productFormGroup?.invalid) {
      return;
    }
    this.productService.save(this.productFormGroup?.value)
      .subscribe(data => {
        alert('Produit ajouté avec success');
        this.router.navigateByUrl('/products');
      });
  }
}
