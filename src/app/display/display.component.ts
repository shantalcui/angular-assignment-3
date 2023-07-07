import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styles: [`
        .white {
            color: white;
        }
    `]
})

export class AppDisplay {
    secretPassword = '';
    displayStatus = false;
    clickLogs = [];
    clickCount = 0;
    clickLog = '';

    ngOnInit() { }

    // constructor() {
    //     this.clickCount = this.clickLogs.length > 5 ? 6 : 0;
    // }

    onChangeDisplayStatus() {
        this.displayStatus = !this.displayStatus;
        if (this.displayStatus == true) {
            this.secretPassword = 'Secret Password = tuna';
            this.clickLogs.push('Click count: ' + this.clickCount++ + ' ' + this.secretPassword);
            this.clickCount = this.clickLogs.length;
        }
    }

    getColor() {
        return this.clickCount > 5 ? 'blue' : 'transparent';
    }

}