import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditCreateDetailsComponent } from '../edit-create-details/edit-create-details.component';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.scss'],
})
export class UserDetailsListComponent implements OnInit {
  constructor(
    private userService: UserServiceService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}
  userDetails: any = {};
  dataSource = [];
  displayedColumns: string[] = ['projectName', 'technology', 'edit', 'delete'];
  showLoader = false;
  ngOnInit(): void {
    this.fetchUserDetails();
  }

  /**
   * API call fetch default details
   */
  fetchUserDetails(): void {
    this.showLoader = true;
    this.userService.getUserInfo().subscribe((response: any) => {
      this.userDetails = response;
      this.dataSource = this.userDetails?.to_do_list;
      this.showLoader = false;
    }),
      (error: any) => {
        this.showLoader = false;
      };
  }

  /**
   * API call to delete row
   * @param key key to delete
   */
  deletetoDoItem(key: number) {
    this.showLoader = true;
    this.userService.deleteToDoInfo(key).subscribe((response: any) => {
      this.snackBar.open('Successfuly Deleted !!', 'X', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 2000,
      });
      this.fetchUserDetails();
      this.showLoader = false;
    }),
      (error: any) => {
        this.showLoader = false;
      };
  }

  /**
   * API call to fetch create new todo list
   */
  openCreateNewToDo() {
    const dialogRef = this.dialog.open(EditCreateDetailsComponent, {
      width: '250px',
      data: { mode: 'create' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.showLoader = true;
        this.userService.createNewtoDo(result).subscribe((response: any) => {
          this.showLoader = false;
          this.snackBar.open('Successfuly Created !!', 'X', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2000,
          });
          this.fetchUserDetails();
        }),
          (error: any) => {
            this.showLoader = false;
          };
      }
    });
  }

  /**
   * APi to edit row details
   * @param info edit row details
   */
  openEditToDo(info: any) {
    const dialogRef = this.dialog.open(EditCreateDetailsComponent, {
      width: '250px',
      data: { mode: 'edit', info },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.showLoader = true;
        Object.assign(result, { key: info.key });
        this.userService.ediToDo(result).subscribe((response: any) => {
          this.showLoader = false;
          this.snackBar.open('Successfuly updated !!', 'X', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2000,
          });
          this.fetchUserDetails();
        }),
          (error: any) => {
            this.showLoader = false;
          };
      }
    });
  }
}
