import { Component } from '@angular/core';

@Component({
  selector: 'app-number-page',
  templateUrl: './number-page.component.html',
  styleUrls: ['./number-page.component.css']
})
export class NumbersPageComponent {

  public totalSells: number = 2567789.5567;
  public percent: number = 0.4856;
}
