import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import { TranslatesLanguageInterface } from './translates.interface';

import { environment } from '@env';

const LANGUAGES: TranslatesLanguageInterface[] = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' }
];

const LANGUAGES_LIST: string[] = ['en', 'de'];

@Injectable()
export class TranslatesService {

  currentLanguage = new BehaviorSubject(LANGUAGES[0]);

  constructor(
    private translateService: TranslateService
  ) {
    this.translateService.addLangs(LANGUAGES.map(function(language) { return language.code; }));
    this.translateService.setDefaultLang(environment.defaultLanguage);
  }

  set setCurrentLanguage(language: TranslatesLanguageInterface) {
    this.currentLanguage.next(language);
  }

  public changeLanguage(languageCode: string): void {
    localStorage.setItem('language', languageCode);
    this.useLanguage(languageCode);
  }

  public useLanguage(languageCode: string): void {
    languageCode = languageCode || environment.defaultLanguage;
    this.translateService.use(languageCode);
    this.setCurrentLanguage = this.getLanguages().filter(language => language.code === languageCode)[0];
  }

  public getLanguages(): TranslatesLanguageInterface[] {
    return LANGUAGES;
  }
}
