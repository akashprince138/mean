import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-arr',
  templateUrl: './arr.component.html',
  styleUrls: ['./arr.component.css']
})
export class ArrComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: this.fb.array([])
    });
  }

  ngOnInit(): void {
  }

  get name() {
    return this.form.controls["name"] as FormArray;
  }

  addName() {
    const nameForm = this.fb.group({
        username: ['', Validators.required],
    });
    this.name.push(nameForm);
  }
  deleteName(nameIndex: number) {
    this.name.removeAt(nameIndex);
  }

  submit(){
    console.log("this.form.status", this.form.status);
    console.log("this.form.value", this.form.value);
  }
}
