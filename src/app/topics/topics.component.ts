import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  topics: Object = ["Exaple Topic 1", "Internet", "Games", "Programming", "Others"];

  constructor() { }

  ngOnInit() {
  }

}
