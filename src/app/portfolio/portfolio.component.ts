import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  flag:boolean=true;
  imgModel:string=''
  srcs:string[]=['./assets/1.png','./assets/2.png','./assets/3.png','./assets/1.png','./assets/2.png','./assets/3.png']
  hideModel(element:EventTarget|null ,img:HTMLImageElement):void{
    if(element==img) return;
    this.flag=true
  }
}
