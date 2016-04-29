import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from '../../home/index';
@Component({
  selector: 'sd-template',
  templateUrl: 'app/template/components/template.component.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }
])

export class TemplateComponent {
}
