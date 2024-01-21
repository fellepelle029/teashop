import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, timer} from "rxjs";
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  public showPopup: boolean = false;
  private destroyPopup$: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    const popupTimer$ = timer(10000);
    popupTimer$.pipe(take(1)).subscribe(() => {
      this.showPopup = true;
    });
  }

  ngOnDestroy(): void {
    this.destroyPopup$.next();
    this.destroyPopup$.complete();
  }

}
