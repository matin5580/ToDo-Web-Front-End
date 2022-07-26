import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private followService: FollowService) {}

  ngOnInit(): void {
  }

}
