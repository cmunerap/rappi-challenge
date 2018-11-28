import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class MenuService {
  private visible = new BehaviorSubject<boolean>(false);
  visible$: Observable<boolean>;
  constructor() {
    this.visible$ = this.visible.asObservable();
  }

  show() {
    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }
}
