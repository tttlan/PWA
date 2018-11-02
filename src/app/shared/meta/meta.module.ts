import { NgModule } from '@angular/core';
import { MetaLoader, MetaModule, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    callback: (key: string): string => key,
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' | ',
    applicationName: 'RapidBox',
    defaults: {
      title: 'RapidBox - Swiss Automotive Group AG',
      // tslint:disable:max-line-length
      description: 'Die Swiss Automotive Group ist eine Unternehmensgruppe im Besitz von zwei Schweizer Familien,die eine komplette Dienstleistungspalette für den Fahrzeugunterhaltsmarkt.',
      'og:site_name': 'RapidBox',
      'og:type': 'website',
      'og:locale': 'de_CH',
      'og:locale:alternate': 'de_CH'
    }
  });
}

@NgModule({
  imports: [
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: []
    })
  ]
})
export class SharedMetaModule {
}
