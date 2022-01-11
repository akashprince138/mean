import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {UsersService} from './../services/users.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'action'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private router:Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    
    this.users();
  }

  users = async()=>{
    this.usersService.users().subscribe((res) => 
            {
              this.dataSource = new MatTableDataSource<any>(res['data']);
              
    this.dataSource.paginator = this.paginator;
            });
  }

  ngAfterViewInit() {
  }

  addUser = ()=>{
    this.router.navigate(['/add-user']);
  }

  editUser = (id)=>{
    this.router.navigate(['/edit-user/'+id]);
  }

  delete = (id)=>{
    if(confirm("Are you sure to delete ")) {
    this.usersService.deleteUser(id).subscribe((res) => 
            {
              this.users();
            });
    }
  }
}

