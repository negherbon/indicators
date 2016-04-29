import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {TemplateComponent} from '../template/index';
import {LoginComponent} from '../login/index';
import {LoggedInRouterOutlet} from '../loggedin.outlet';

@Component({
  selector: 'sd-app',
  templateUrl: 'app/components/app.component.html',
  directives: [LoggedInRouterOutlet]
})
@RouteConfig([
  {
    path: '/...',
    name: 'App',
    component: TemplateComponent,
    useAsDefault: true
  },
  {
    path: "/login",
    name: "Login",
    component: LoginComponent
  }
])
export class AppComponent {}
