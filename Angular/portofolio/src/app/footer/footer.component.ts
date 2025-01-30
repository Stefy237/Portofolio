import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isFooterVIsible: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const pageHeight = document.body.offsetHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    this.isFooterVIsible = scrollPosition >= pageHeight;
  }
}
