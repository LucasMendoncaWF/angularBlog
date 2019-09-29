import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrls: ['./related-posts.component.scss']
})
export class RelatedPostsComponent implements OnInit {

  relatedPosts: Object = [
    {Title: "Related Post 1", Img: "assets/imgs/img1.png" , Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit eleifend orci, eget varius lorem scelerisque sit amet. Mauris id sodales arcu, malesuada auctor sapien. Integer vehicula, est et luctus feugiat, mauris ligula feugiat enim, a tempor dui mi a lorem. Etiam condimentum turpis sapien, in tincidunt mauris suscipit quis. Nunc vel turpis dolor. Proin vel lobortis erat. Ut maximus cursus sem, id pellentesque mauris sodales at. "},
    {Title: "Related Post 2", Img: "assets/imgs/img2.jpg" , Desc: "Mauris pharetra dolor vel libero imperdiet sollicitudin. Morbi semper eros nec ex dictum fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam quis sem lacinia laoreet est quis, vulputate ipsum. Nullam a laoreet ligula. Suspendisse in ultricies massa. Nulla facilisi. Donec eget porta dui, nec commodo enim. Donec et purus lorem. Fusce placerat ex turpis, ut aliquam ex semper a. Phasellus rutrum, nunc ornare facilisis congue, augue turpis vulputate enim, ac commodo felis sapien vitae lectus. Duis efficitur felis erat, condimentum tincidunt mauris luctus ut. Integer malesuada nisl est, at cursus metus iaculis non. "},
    {Title: "Related Post 3", Img: "assets/imgs/img3.jpg" , Desc: "Morbi hendrerit est sed auctor egestas. Etiam bibendum ligula at malesuada maximus. Morbi semper elit enim, eget vestibulum velit suscipit in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ullamcorper, ligula sit amet volutpat porta, arcu orci pulvinar quam, a rutrum justo justo vitae urna. Integer imperdiet porta maximus. Praesent vitae ornare turpis, ac aliquet nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vitae mollis arcu. Sed lectus felis, condimentum sed convallis ac, venenatis at dolor. Nam congue neque suscipit ultrices pretium. Donec quis tincidunt elit. Donec volutpat imperdiet turpis non luctus. "},
    {Title: "Related Post 4", Img: "assets/imgs/img4.jpg" , Desc: "Sed felis purus, venenatis ut tellus et, elementum tempus orci. Vestibulum congue vehicula cursus. Sed hendrerit orci massa, ut efficitur odio auctor dignissim. Fusce nunc libero, pharetra in diam nec, fermentum tempor eros. Aliquam pellentesque sagittis cursus. Fusce at iaculis dolor. Integer maximus egestas dolor vitae faucibus. "},
  ]

  constructor() { }

  ngOnInit() {
  }

}
