import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RxTranslateModule } from "@rxweb/translate"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    declarations: [
        AppComponent, LoginComponent, SignUpComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      RxTranslateModule.forRoot({
        cacheLanguageWiseObject:true,
        languageCode:"ar",
          filePath:"assets/i18n/{{language-code}}/{{translation-name}}.{{language-code}}.json"
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
