import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  public startDate = new Date(2022,9,28)
  public minDate = new Date(2022,8,28)
  public maxDate = new Date(2022,10,28)

  constructor(private platform: Platform) {}

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }
}
