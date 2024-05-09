import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { LiscenseListerService } from '../services/liscense-lister.service'; 

@Component({
  selector: 'app-liscense-lister',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './liscense-lister.component.html',
  styleUrls: ['./liscense-lister.component.css']
})
export class LiscenseListerComponent implements OnInit {
  dataFromBackend: any

  constructor(private licenseListerService: LiscenseListerService) { } // Inyecta el servicio

  ngOnInit(): void {
    this.licenseListerService.getDataFromBackend().subscribe(data => { 
      this.dataFromBackend = data;
    });
  }
}
