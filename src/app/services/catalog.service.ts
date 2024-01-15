import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {TeaItemType} from "../types/teaitem.type";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private teaCatalog: TeaItemType[] = [];

  constructor(private http: HttpClient) { }

  getTeaCatalog(): Observable<TeaItemType[]> {
    return this.http.get<TeaItemType[]>('https://testologia.site/tea');
  }

  // getTeaCatalog(): Observable<TeaItemType[]> {
  //   return this.http.get<{data: TeaItemType[]}>('https://testologia.site/tea')
  //     .pipe(
  //       tap(result => {
  //         console.log(result)
  //       }),
  //       map((result) => (result.data))
  //     )
  // }


}
