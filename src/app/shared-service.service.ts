import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataUpdatedSource = new Subject<void>();
  dataUpdated$ = this.dataUpdatedSource.asObservable();

  dataUpdated(event: any) {
    this.dataUpdatedSource.next(event);
  }
}
