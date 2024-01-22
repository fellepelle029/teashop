import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductNameIntoFormService} from "../../shared/services/product-name-into-form.service";
import {OrderDataType} from "../../types/order-data.type";


@Component({
  selector: 'reactive-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  orderForm = this.fb.group({
    product: [''],
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯЁё]+$/)]],
    last_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯЁё]+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^(\+)?[0-9]{11}$/)]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯЁё0-9\s\/-]+$/)]],
    comment: [''],
  });

  orderAccepted: boolean = false;
  orderError: boolean = false;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private productNameIntoFormService: ProductNameIntoFormService,
              private orderService: ProductNameIntoFormService) {
  }

  ngOnInit(): void {
    const selectedProduct = this.productNameIntoFormService.getSelectedProduct();
    this.orderForm.get('product')?.setValue(selectedProduct);
  }

  postOrder() {
    this.orderService.postOrder(this.orderForm.value as OrderDataType)
      .subscribe({
        next: (response) => {
          if (response.success === 1) {
            this.orderAccepted = true;
          } else {
            this.orderError = true;
          }
        },
        error: (error) => {
          this.orderError = true;
          console.error(error);
        }
      });
  }
}
