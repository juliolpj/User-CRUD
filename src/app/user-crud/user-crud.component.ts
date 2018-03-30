import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {
  public filtroIsActive: string = "Todos";
  public users: User[];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  remove(user: User) {
    this.userService.deleteUser(user).subscribe( () => {
      this.users = this.users.filter( u => user.id !== u.id);
    });
  }

  filtrarIsActive(filtro:string) {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      if (filtro == 'Todos') {
        this.users = this.users;
      }
      if (filtro == 'Activos') {
        this.users = this.users.filter( u => u.isActive === true);
      }
      if (filtro == 'Inactivos') {
        this.users = this.users.filter( u => u.isActive === false);
      }      
    });
    
    this.filtroIsActive = filtro;
  }
}
