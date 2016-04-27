import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../+home/index';
import {LoginComponent} from '../+login/index';
import {LoggedInRouterOutlet} from '../loggedin.outlet';

@Component({
  selector: 'sd-app',
  templateUrl: 'app/components/app.component.html',
  directives: [LoggedInRouterOutlet]
})
@RouteConfig([
  { path: '/', redirectTo: ['/home'] },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }
])
export class AppComponent {}
