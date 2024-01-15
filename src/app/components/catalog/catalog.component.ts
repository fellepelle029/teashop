import {Component, Input, OnInit} from '@angular/core';
import {CatalogService} from "../../services/catalog.service";
import {HttpClient} from "@angular/common/http";
import {TeaItemType} from "../../types/teaitem.type";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {


  teaCards: TeaItemType[] = [];

  constructor(private catalogService: CatalogService) {  }

  ngOnInit() {
    this.catalogService.getTeaCatalog().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.teaCards = data;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('123');
        }
      });
  }
}
