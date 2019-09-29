import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-miniature',
  templateUrl: './post-miniature.component.html',
  styleUrls: ['./post-miniature.component.scss']
})
export class PostMiniatureComponent implements OnInit {

  @Input() title: String;
  @Input() img: String;
  @Input() desc: String;

  constructor() { }
  
  ngOnInit() {
  }

}
