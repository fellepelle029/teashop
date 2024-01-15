import {Component, Input, OnInit} from '@angular/core';
import {TeaItemType} from "../../../types/teaitem.type";

@Component({
  selector: 'teacard',
  templateUrl: './teacard.component.html',
  styleUrls: ['./teacard.component.scss']
})
export class TeacardComponent implements OnInit {

  @Input() teaCard: TeaItemType;


  constructor() {
    this.teaCard = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
