import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  users: User[] = [];

  // constructor() { }
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    })
  }

  deletePerson(id:string){
    this.userService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item.usuario !== id);
         console.log('Person deleted successfully!');
    })
  }

}

