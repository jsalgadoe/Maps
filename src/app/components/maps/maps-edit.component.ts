import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


import { FormBuilder,FormGroup } from "@angular/forms";
@Component({
  selector: 'app-maps-edit',
  templateUrl: './maps-edit.component.html',
  styleUrls: ['./maps-edit.component.css']
})
export class MapsEditComponent implements OnInit {

  form:FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder,
    public dialogRef:MatDialogRef<MapsEditComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any) {
    console.log(data);

this.form = fb.group({
  'title':data.name,
  'desc' :data.desc
})
  }
  value = 'Clear me';
  ngOnInit(): void {
  }

  saveChanges(){
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
