import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductNameIntoFormService} from "../../services/product-name-into-form.service";
import {HttpClient} from "@angular/common/http";


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
              private productNameIntoFormService: ProductNameIntoFormService) {
  }


  ngOnInit(): void {
    const selectedProduct = this.productNameIntoFormService.getSelectedProduct();
    this.orderForm.get('product')?.setValue(selectedProduct);
  }

  postOrder() {
    this.http.post<any>('https://testologia.site/order-tea', this.orderForm.value)
      .subscribe(
        response => {
          if (response.success === 1) {
            this.orderAccepted = true;
          } else {
            this.orderError = true;
          }
        },
        error => {
          this.orderError = true;
          console.error('Error submitting order:', error);
        }
      );
  }
}
