import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-create-details',
  templateUrl: './edit-create-details.component.html',
  styleUrls: ['./edit-create-details.component.scss'],
})
export class EditCreateDetailsComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditCreateDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  mode = 'create';
  ngOnInit(): void {
    const projectName = this.data?.info?.projectName || null;
    const technology = this.data?.info?.technology || null;
    this.mode = this.data?.mode;
    this.formGroup = this.formBuilder.group({
      projectName: [projectName, Validators.required],
      technology: [technology, Validators.required],
    });
  }

  onSubmit(value: any) {
    this.dialogRef.close(value);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
