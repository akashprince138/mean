import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {UsersService} from './../services/users.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form:FormGroup;
  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  addUser = async()=>{
    this.usersService.addUser(this.form.value).subscribe((res) => 
            {
              this.router.navigate(['/user-list']);
            });
  }
}
