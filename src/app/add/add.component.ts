import { Component, OnInit } from '@angular/core';
import { WrapperService } from '../wrapper.service';
import { Contact } from '../contact';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    public wrapperService: WrapperService,
    private sanitizer: DomSanitizer) {
    this.wrapperService.globalService.createContactForm();
  }

  ngOnInit() {
    this.wrapperService.globalService.showAdd();
    this.wrapperService.globalService.currentContact = new Contact('', '', '', '', '/assets/no-image.svg', '', '');
  }

  get f() {
    return this.wrapperService.globalService.contactForm.controls;
  }

}
