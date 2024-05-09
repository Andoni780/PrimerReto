import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { LiscenseListerService } from '../services/liscense-lister.service';
import { LiscenseResponseData, LiscenseSearchRequest } from '../models/liscense-list.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liscense-lister',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, AsyncPipe, JsonPipe],
  templateUrl: './liscense-lister.component.html',
  styleUrls: ['./liscense-lister.component.css']
})
export class LiscenseListerComponent {
  dataFromBackend: Observable<LiscenseResponseData> | null = null

  searchCtrl = new FormControl<string>('')

  constructor(private licenseListerService: LiscenseListerService) { }

  onClick($event: MouseEvent) {
    if (this.searchCtrl.value === null) return;

    const searchRequest: LiscenseSearchRequest = {
      page: 1,
      buscado: this.searchCtrl.value
    }

    this.dataFromBackend = this.licenseListerService.getDataFromBackend(searchRequest)
  }
}
