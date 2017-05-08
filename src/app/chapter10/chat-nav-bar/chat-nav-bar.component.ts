import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import {MessagesService} from '../messages.service';
import {Message, Thread} from '../models';
import {ThreadsService} from '../threads.service';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number;

  constructor(private messagesService: MessagesService, private threadsService: ThreadsService) { }

  ngOnInit() {
    this.messagesService.messages
      .combineLatest(this.threadsService.currentThread, (messages: Message[], currentThread: Thread) => [currentThread, messages])
      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount = _.reduce(messages, (sum: number, m: Message) => {
            const messageIsInCurrentThread: boolean = m.thread && currentThread && (currentThread.id === m.thread.id);

            if (m && !m.isRead && !messageIsInCurrentThread) {
              sum = sum + 1;
            }

            return sum;
          }, 0);
      });

    console.log('unreadMessagesCount', this.unreadMessagesCount);
  }

}
