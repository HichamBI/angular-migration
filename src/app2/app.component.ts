import { Component } from "@angular/core";

@Component({
    selector: '#my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title: string = 'An Ng2 Component';

    constructor() {
    }
}