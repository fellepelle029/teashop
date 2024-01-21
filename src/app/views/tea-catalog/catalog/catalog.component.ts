import {Component, OnInit} from '@angular/core';
import {TeaItemType} from "../../../types/teaitem.type";
import {CatalogService} from "../../../shared/services/catalog.service";

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
