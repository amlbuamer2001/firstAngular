import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isScrolled=false;
  @HostListener('window:scroll', [])
  handleScroll() {
    this.isScrolled = (window.scrollY > 0);
  }
}
