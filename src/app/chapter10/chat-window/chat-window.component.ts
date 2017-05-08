import {Component, ElementRef, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MessagesService} from '../messages.service';
import {Message, Thread, User} from '../models';
import {ThreadsService} from '../threads.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(private messagesService: MessagesService, private threadsService: ThreadsService, private userService: UserService, private el: ElementRef) { }

  ngOnInit() {
    this.messages = this.threadsService.currentThreadMessages;

    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe((thread: Thread) => {
      this.currentThread = thread;
    });

    this.userService.currentUser.subscribe((user: User) => {
          this.currentUser = user;
    });

    this.messages
      .subscribe((messages: Array<Message>) => {
          setTimeout(() => {
            this.scrollToBottom();
          });
      });
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

}
