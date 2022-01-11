import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UsersService} from './../services/users.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  form:FormGroup;
  id:any;
  constructor(private fb: FormBuilder, private usersService: UsersService,private router: Router,private route: ActivatedRoute) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
     this.getData(this.id);
  }

  getData = async(id)=>{
    this.usersService.getEditUser(id).subscribe((res) => 
            {
              if(res['status'] === 'success'){
                this.form.patchValue({
                  name: res['data'].name,
                  email: res['data'].email,
                  phone: res['data'].phone,
                });
              }
            });
  }

  editUser = async()=>{
    this.usersService.editUser(this.form.value, this.id).subscribe((res) => 
            {
              this.router.navigate(['/user-list']);
            });
  }

}
