import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {UserDTO} from '../../security/models/userDTO';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  constructor(private userService: UserService,
              private modalService: NgbModal,
              private router: Router) {
  }

  username: string;
  usersList: Array<UserDTO>;
  filteredUserList: Array<UserDTO>;

  ngOnInit(): void {
    if (!sessionStorage || !sessionStorage.getItem('accessToken')) {
      this.router.navigate(['/no-access']);
    } else if (
      sessionStorage.getItem('roles') !== 'ROLE_ADMIN') {
      this.router.navigate(['/not-authorized']);
    } else {
      this.loadUsers();
    }
  }

  openDeleteModal(user: UserDTO, deleteModal) {
    this.modalService.open(deleteModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'delete') {
        this.userService.deleteUser(user).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.usersList = users;
      this.filteredUserList = users;
    });
  }

  searchForUsername() {
    this.filteredUserList = this.usersList.filter(user => {
      return user.username.includes(this.username);
    });
  }
}
