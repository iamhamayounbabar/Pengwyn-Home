import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showQuestion1: boolean = true;
  showQuestion2: boolean = true;
  showQuestion3: boolean = true;
  showQuestion4: boolean = true;
  showQuestion5: boolean = true;
  heroBox: any = [
    {text: 'TOTAL VALUE LOCKED', icon:'assets/images/info-icon.svg', price: '$2,760,230'},
    {text: 'TOTAL VOLUME TRADED', icon:'assets/images/info-icon.svg', price: '$940,390'},
    {text: 'UNIQUE NFT OWNERS', icon:'assets/images/info-icon.svg', price: '1341'},
    {text: 'BINC BOOK VALUE', icon:'assets/images/info-icon.svg', price: 'SOON'}
  ]
  

  toggleImages1() {
    this.showQuestion1 = !this.showQuestion1;
  }
  toggleImages2() {
    this.showQuestion2 = !this.showQuestion2;
  }
  toggleImages3() {
    this.showQuestion3 = !this.showQuestion3;
  }
  toggleImages4() {
    this.showQuestion4 = !this.showQuestion4;
  }
  toggleImages5() {
    this.showQuestion5 = !this.showQuestion5;
  }
}
