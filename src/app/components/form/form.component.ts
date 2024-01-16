import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ProductNameIntoFormService} from "../../services/product-name-into-form.service";



@Component({
  selector: 'reactive-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  orderForm = this.fb.group({
    product: { value: '', disabled: true },
    firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯЁё]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯЁё]+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^(\+)?[0-9]{11}$/)]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s\/-]+$/)]],
    comment: {value: ''},
  })

  constructor(private fb: FormBuilder,
              private productNameIntoFormService: ProductNameIntoFormService) { }

  ngOnInit(): void {
    const selectedProduct = this.productNameIntoFormService.getSelectedProduct();
    this.orderForm.get('product')?.setValue(selectedProduct);
  }

  postOrder() {

  }
}
