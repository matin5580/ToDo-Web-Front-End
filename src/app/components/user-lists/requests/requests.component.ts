import { NotificationService } from './../../../services/notification/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FollowService } from './../../../services/follow/follow.service';
import { Component, OnInit } from '@angular/core';
import { NotificationType } from 'src/app/enum/notification-type';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  username = ''
  requests = []

  constructor(private followService: FollowService,
              private notifier: NotificationService) { }

  ngOnInit(): void {
    this.username = this.followService.getUsername()
    this.getUserRequests()
  }

  getUserRequests() {
    this.followService
      .getAll('get-all-user-requests/' + this.username)
      .subscribe(
        (response: any) => {
          this.requests = response;
        },
        (error: HttpErrorResponse) => {
          this.notifier.notify(
            NotificationType.ERROR,
            error.error.type + ' ' + error.error.message
          );
        }
      );
  }

  acceptRequest(id: string) {
    this.changeRequestStatus(RequestStatus.ACCEPTED, id);
  }

  }

}
