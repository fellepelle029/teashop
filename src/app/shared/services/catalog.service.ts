import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TeaItemType} from "../../types/teaitem.type";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private teaCatalog: TeaItemType[] = [];

  constructor(private http: HttpClient) { }

  getTeaCatalog(): Observable<TeaItemType[]> {
    return this.http.get<TeaItemType[]>('https://testologia.site/tea');
  }
}
