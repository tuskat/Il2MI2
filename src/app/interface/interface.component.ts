import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  origin: string = null;
  destination: string = null;
  errorMessage: string = null;
  showFeedback: boolean = false;
  showTips: boolean = false;
  showLoading: boolean = false;

  @ViewChild(MapComponent) mapComponent: MapComponent

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  /* 
  Check if the 2 inputs are not empty
  */
  isFormValid() {
    if (this.destination && this.origin)
      return true;
    return false;
  }
  /* 
   Submit the info to the API
   */
  submitForm() {
    if (this.isFormValid()) {
      this.showFeedback = true;
      this.showTips = false;
      this.postRoute(this.origin, this.destination);
    } else {
      this.showTips = true;
    }
  }
  /* 
   1st Api Call where it submit the route to get the token
   */
  postRoute(origin: string, destination: string) {
    this.apiService.submitRoute(origin, destination).subscribe(
      data => {
        if (data.token !== null) {
          this.getRoute(data.token, origin, destination);
        }
      },
      error => {
        let feedback = "Unexpected Server Error.";
        this.handleRouteAnswer(feedback);
      }
    );
  }
  /* 
   2nd Api Call where the token is used to display the route
   */
  getRoute(token: string, origin: string, destination: string) {
    this.apiService.getRoute(token)
      .subscribe(
      data => {
        if (data.status === 'success') {
          this.mapComponent.insertLine(data.path, origin, destination);
          let feedback = <any>data.status;
          this.handleRouteAnswer(feedback);
        } else {
          this.handleRouteAnswer(data.status);
        }
      },
      error => {
        let feedback = "Unexpected Server Error.";
        this.handleRouteAnswer(feedback);
      });
  }
  /* 
 Show error message on top
  */
  handleRouteAnswer(feedback: any) {
    this.errorMessage = feedback;
    if (feedback === 'success') {
      setTimeout(() => {
        this.onDismissed(true);
      }, 2000);
    }
  }
  /* 
 Dismiss error message
   */
  onDismissed(event) {
    this.errorMessage = null;
    if (event === true) {
      this.showFeedback = false;
    } else {
      this.submitForm();
    }
  }
}
