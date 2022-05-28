import { Component } from "@angular/core"
import { translate } from '@rxweb/translate'
import {  Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    @translate({ translationName: "login" })
    multilingualContent: { [key: string]: any } 

    constructor(private route: Router) {
       
    }


    

    navigate(languageCode: string) {
        this.route.navigate([languageCode, "login"]);
        
    }
}
