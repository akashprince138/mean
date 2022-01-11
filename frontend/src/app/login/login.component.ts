import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb: FormBuilder,private loginService: LoginService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  login = async()=>{
    this.loginService.login(this.form.value).subscribe((res) => 
            {
              if(res['status'] === "success"){
                this.router.navigate(['/user-list']);
              }
            });
  }
}
