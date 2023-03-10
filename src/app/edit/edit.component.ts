import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WrapperService } from '../wrapper.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(
    private wrapperService: WrapperService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
    this.wrapperService.globalService.createContactForm();
    this.wrapperService.globalService.showEdit();
    this.wrapperService.checkContact(this.id);
    this.wrapperService.setCopyContact(this.id);
  }

  get id(): number {
    return parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }

  get f() {
    return this.wrapperService.globalService.contactForm.controls;
  }

}
