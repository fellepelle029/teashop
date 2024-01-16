import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CatalogService} from "../../services/catalog.service";
import {TeaItemType} from "../../types/teaitem.type";
import {ProductNameIntoFormService} from "../../services/product-name-into-form.service";

@Component({
  selector: 'teadetails',
  templateUrl: './teadetails.component.html',
  styleUrls: ['./teadetails.component.scss']
})
export class TeaDetailsComponent implements OnInit {
  teaId: number = 0;
  teaDetails: TeaItemType | undefined;

  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              private productNameIntoFormService: ProductNameIntoFormService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.teaId = +idParam;
        this.loadTeaDetails();
      }
    });
  }

  loadTeaDetails() {
    this.catalogService.getTeaCatalog().subscribe(teaCatalog => {
      this.teaDetails = teaCatalog.find(tea => tea.id === this.teaId);

      if (this.teaDetails) {
        this.productNameIntoFormService.setSelectedProduct(this.teaDetails.title);
      }
    });
  }
}
