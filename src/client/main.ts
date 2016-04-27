import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app/components/app.component';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(AuthHttp, {
    useFactory: (http: Http) => {
      return new AuthHttp(new AuthConfig({
        tokenName: 'jwt'
      }), http);
    },
    deps: [Http]
  })
]);
