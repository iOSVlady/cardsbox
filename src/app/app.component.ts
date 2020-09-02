import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import {PAYMENT_METHODS} from '@ng-web-apis/payment-request';
import {DIRECTIVES_SAMPLE} from './home/samples/directives.sample';
import {SERVICE_SAMPLE} from './home/samples/service.sample';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: PAYMENT_METHODS,
            useValue: [
                {
                    // Apple Pay sample will start in Safari
                    supportedMethods: 'https://apple.com/apple-pay',
                    data: {
                        version: 3,
                        merchantIdentifier: 'merchant.com.example',
                        merchantCapabilities: [
                            'supports3DS',
                            'supportsCredit',
                            'supportsDebit',
                        ],
                        supportedNetworks: ['amex', 'discover', 'masterCard', 'visa'],
                        countryCode: 'US',
                    },
                },
                {supportedMethods: 'basic-card'},
            ],
        },
    ],
})
export class AppComponent {
  options: AnimationOptions = {
    path: '/assets/data.json',
  };
  readonly samples = {
    service: SERVICE_SAMPLE,
    directives: DIRECTIVES_SAMPLE,
};
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
