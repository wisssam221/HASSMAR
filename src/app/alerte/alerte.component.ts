import { Component, OnInit } from '@angular/core';
import { ApiService } from './../shared/api.service';
import { AlerteModel } from './alerte.model';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.css']
})
export class AlerteComponent implements OnInit {

  formValue !: FormGroup;
  AlerteModelObj: AlerteModel = new AlerteModel();
  alerteData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilber: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      Intitule: [''],
      niveau_dalerte: [''],
      date: [''],
      creer_par: [''],
      destinataire: [''],
      
    })
    this.getAllAlerte();
  }

  clickAddAlerte(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postAlerteDetail() {
    this.AlerteModelObj.Intitule = this.formValue.value.Intitule;
    this.AlerteModelObj.niveau_dalerte = this.formValue.value.niveau_dalerte;
    this.AlerteModelObj.date = this.formValue.value.date;
    this.AlerteModelObj.creer_par = this.formValue.value.creer_par;
    this.AlerteModelObj.destinataire = this.formValue.value.destinataire;
    
    this.api.postAlertes(this.AlerteModelObj)
      .subscribe(res => {
        console.log(res);
        alert("alerte addesd successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllAlerte();
      },
        err => {
          alert("something went wrong");
        })
  }

  getAllAlerte() {
    this.api.getAlertes()
      .subscribe(res => {
        this.alerteData = res;

      })
  }

  deleteAlertes(row: any) {
    this.api.deleteAlertes(row.id)
      .subscribe(res => {
        alert("ALerte deleted");

      })
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.AlerteModelObj.id = row.id;
    this.formValue.controls['Intitule'].setValue(row.Intitule);

    this.formValue.controls['niveau_dalerte'].setValue(row.niveau_dalerte);

    this.formValue.controls['date'].setValue(row.date);

    this.formValue.controls['creer_par'].setValue(row.creer_par);

    this.formValue.controls['destinataire'].setValue(row.destinataire);

    
  }

  updateAlerteDetail() {
    this.AlerteModelObj.Intitule = this.formValue.value.Intitule;
    this.AlerteModelObj.niveau_dalerte = this.formValue.value.niveau_dalerte;
    this.AlerteModelObj.date = this.formValue.value.date;
    this.AlerteModelObj.creer_par = this.formValue.value.creer_par;
    this.AlerteModelObj.destinataire = this.formValue.value.destinataire;
    
    this.api.updateAlertes(this.AlerteModelObj, this.AlerteModelObj.id)
      .subscribe(res => {
        alert("Mise a jour")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllAlerte();
      })
  }
}
