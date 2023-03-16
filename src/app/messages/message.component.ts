//import { Hero } from '../hero';
import { Component } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  constructor(public messageService: MessageService) {}
  // @Input() hero?: Hero;
}
