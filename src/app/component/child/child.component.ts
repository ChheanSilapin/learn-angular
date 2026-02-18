import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  sendMessageToParent() {
    this.messageEvent.emit('Hello from Child!');
  }

}
