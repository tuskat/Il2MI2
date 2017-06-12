import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input('errorMessage') errorMessage: string;
  @Input('isLoading') isLoading: boolean;
  @Output() onDismissed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  /* 
   Dismiss overlay showing the API call result
   */

  dismissedWindow() {
    this.onDismissed.emit(true);
  }
  /* 
Emit a signal to Interface to call the API again
 */

  retrySubmit() {
    this.onDismissed.emit(false);
  }
}
