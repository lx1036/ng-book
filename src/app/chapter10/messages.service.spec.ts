import { inject, TestBed } from '@angular/core/testing';

import { MessagesService } from './messages.service';
import {Message, Thread, User} from './models';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should ...', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));

  it('should test', () => {
    const user: User = new User('Angular', '');
    const thread: Thread = new Thread('id1', 'angular', '');
    const message1: Message = new Message({author: user, text: 'Hi!', thread: thread});
    const message2: Message = new Message({author: user, text: 'Bye!', thread: thread});

    const messagesService: MessagesService = new MessagesService();
    messagesService.newMessages.subscribe((message: Message) => {
      console.log('newMessages: ' + message.text);
    });
    messagesService.messages.subscribe((messages: Message[]) => {
      console.log('messages: ' + messages.length);
    });

    messagesService.addMessage(message1);
    messagesService.addMessage(message2);
  });
});
