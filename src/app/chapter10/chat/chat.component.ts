import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../messages.service';
import {ThreadsService} from '../threads.service';
import {UserService} from '../user.service';
import {ChatExampleData} from '../ChatExampleData';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [
    MessagesService,
    ThreadsService,
    UserService
  ]
})
export class ChatComponent implements OnInit {
  constructor(private messagesService: MessagesService, private threadsService: ThreadsService, private userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }

  ngOnInit() {
  }

}
