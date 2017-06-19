import {Component, Input, OnInit} from '@angular/core';
import {Message, User} from '../../models';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe((user: User) => {
        this.currentUser = user;

        if (this.message.author && user) {
          this.incoming = this.message.author.id !== user.id;
        }
    });
  }

}
