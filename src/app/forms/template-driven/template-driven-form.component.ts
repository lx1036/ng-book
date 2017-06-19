import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit, AfterViewChecked {
  
  public user = {
    name: 'lx1036',
    account: {
      email: '',
      confirm: '',
    }
  };
  
  
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewChecked(): void {
    console.log(this.user.name);
  }

  public onSubmit(f: NgForm) {
    console.log(f.value, f.valid);
  }
}
