import { Component, OnInit } from '@angular/core';
import { ApiService } from './../core/api.service';
import { ServiceModel } from './service.model';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  formValue !: FormGroup;
  ServiceModelObj: ServiceModel = new ServiceModel();
  serviceData !: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilber: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      Id: [''],
      nom: [''],
      sous_service: [''],
      dirige: [''],
      
    })
    this.getAllService();
  }

  clickAddService(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postServiceDetail() {
    
    this.ServiceModelObj.nom = this.formValue.value.nom;
    this.ServiceModelObj.sous_service = this.formValue.value.sous_service;
    this.ServiceModelObj.dirige = this.formValue.value.dirige;
   
    this.api.postServices(this.ServiceModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Service addesd successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllService();
      },
        err => {
          alert("something went wrong");
        })
  }

  getAllService() {
    this.api.getServices()
      .subscribe(res => {
        this.serviceData = res;

      })
  }

  deleteServices(row: any) {
    this.api.deleteServices(row.id)
      .subscribe(res => {
        alert("Service deleted");

      })
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.ServiceModelObj.id = row.id;
    this.formValue.controls['nom'].setValue(row.nom);

    this.formValue.controls['sous_service'].setValue(row.sous_service);

    this.formValue.controls['dirige'].setValue(row.dirige);

    
  }

  updateServiceDetail() {
    this.ServiceModelObj.nom = this.formValue.value.nom;
    this.ServiceModelObj.sous_service = this.formValue.value.sous_service;
    this.ServiceModelObj.dirige = this.formValue.value.dirige;
    
    this.api.updateServices(this.ServiceModelObj, this.ServiceModelObj.id)
      .subscribe(res => {
        alert("Mise a jour")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllService();
      })
  }
}
