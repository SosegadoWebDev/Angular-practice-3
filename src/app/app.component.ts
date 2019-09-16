import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-three';
  displayParagraph = false
  buttonClicks = []

  buttonParagraph() {
    this.displayParagraph = !this.displayParagraph
    // this.buttonClicks.push(this.buttonClicks.length + 1)
    this.buttonClicks.push(new Date())
    // console.log(this.buttonClicks)
  }
}
