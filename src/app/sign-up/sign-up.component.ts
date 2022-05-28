import { Component } from "@angular/core"
import { translate} from '@rxweb/translate'
import { Router } from '@angular/router';

@Component({
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent {

    @translate({ translationName: "signup" })
    multilingualContent: { [key: string]: any } 

    constructor(private route: Router) {

    }

    navigate(languageCode: string) {
            this.route.navigate([languageCode, "signup"]);
    }
}
