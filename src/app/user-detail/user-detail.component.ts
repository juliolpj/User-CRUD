import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user: User;
  constructor(
    private route: ActivatedRoute, private userService: UsersService) { 
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

}
