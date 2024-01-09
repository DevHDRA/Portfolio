import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  // create all the logic for a component that shows or hide a spinner based in an input value
  @Input() showSpinner: boolean = false;

  toggleSpinner() {
    this.showSpinner = !this.showSpinner;
  }
}
