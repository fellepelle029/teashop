import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CatalogService} from "../../services/catalog.service";
import {TeaItemType} from "../../types/teaitem.type";

@Component({
  selector: 'teadetails',
  templateUrl: './teadetails.component.html',
  styleUrls: ['./teadetails.component.scss']
})
export class TeaDetailsComponent implements OnInit {
  teaId: number = 0;
  teaDetails: TeaItemType | undefined;

  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.teaId = +idParam;
        console.log(params);
        this.loadTeaDetails();
      }
    });
  }

  loadTeaDetails() {
    this.catalogService.getTeaCatalog().subscribe(teaCatalog => {
      this.teaDetails = teaCatalog.find(tea => tea.id === this.teaId);
      console.log(this.teaDetails)
    });
  }

}
