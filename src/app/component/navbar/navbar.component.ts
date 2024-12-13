import {ChangeDetectionStrategy, Component, HostListener, signal} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader
} from '@angular/material/expansion';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar,
    MatButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }
}
