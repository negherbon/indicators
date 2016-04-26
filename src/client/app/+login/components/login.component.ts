import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/index';

@Component({
  selector: 'sd-login',
  templateUrl: 'app/+login/components/login.component.html',
  styleUrls: ['app/+login/components/login.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class LoginComponent {

}
