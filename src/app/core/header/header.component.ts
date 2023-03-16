import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Pokédex';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/'])
  }

  navigateToTypes() {
    this.router.navigate(['/types'])
  }
}