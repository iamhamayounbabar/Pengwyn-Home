import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isRarity: boolean = false;
  isDetails: boolean = false;
  
  images = [
    {path: 'assets/images/partner-img-1.png'},
    {path: 'assets/images/partner-img-2.png'},
    {path: 'assets/images/partner-img-3.png'},
    {path: 'assets/images/partner-img-4.png'},
    {path: 'assets/images/partner-img-1.png'},
    {path: 'assets/images/partner-img-2.png'},
    {path: 'assets/images/partner-img-3.png'},
    {path: 'assets/images/partner-img-4.png'},
]

constructor(private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //  Get the current router state
        const routerState: RouterState = this.router.routerState;
        const rootRoute = routerState.root;
        const currentRoute = rootRoute.firstChild;

        // Check if the current route is the home page
        this.isRarity = currentRoute?.routeConfig?.path === 'rarity';
        this.isDetails = currentRoute?.routeConfig?.path === 'details';
      }
    });
  }

  scrollTop() {
    window. scrollTo(0, 0);
  }

}
