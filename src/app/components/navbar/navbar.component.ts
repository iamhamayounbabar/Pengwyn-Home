import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isHomePage: boolean = false;
  isRarity: boolean = false;
  isDetails: boolean = false;
  show: boolean = false;


  open(){
    this.show = true
  }

  close(){
    this.show = false
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //  Get the current router state
        const routerState: RouterState = this.router.routerState;
        const rootRoute = routerState.root;
        const currentRoute = rootRoute.firstChild;

        // Check if the current route is the home page
        this.isHomePage = currentRoute?.routeConfig?.path === 'home';
        this.isRarity = currentRoute?.routeConfig?.path === 'rarity';
        this.isDetails = currentRoute?.routeConfig?.path === 'details';
      }
    });
  }
}
