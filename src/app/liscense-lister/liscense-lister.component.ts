import { AfterViewInit, Component, Input, booleanAttribute } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { LiscenseListerService } from '../services/liscense-lister.service';
import { LiscenseResponseData, LiscenseSearchRequest } from '../models/liscense-list.models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';





@Component({
  selector: 'app-liscense-lister',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, AsyncPipe, JsonPipe, MatPaginatorModule, MatTableModule],
  templateUrl: './liscense-lister.component.html',
  styleUrls: ['./liscense-lister.component.css']
})


export class LiscenseListerComponent implements AfterViewInit{



  searchCtrl = new FormControl<string>('')
  displayedColumns: string[] = ['matricula', 'modelo', 'color'];

  dataSource = new MatTableDataSource<LiscenseResponseData>();
  public pagina : number=1;

  @ViewChild(MatPaginator) paginator!: MatPaginator; 


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private licenseListerService: LiscenseListerService) { }

  nextPage() {
    this.pagina += 1;
    this.changePage();
  }
  prPage() {
    this.pagina -= 1;
    this.changePage();
  }

  changePage() {
    if (this.searchCtrl.value === null) return;

    const searchRequest: LiscenseSearchRequest = {
      page: this.pagina,
      buscado: this.searchCtrl.value
    }

    this.licenseListerService.getDataFromBackend(searchRequest).subscribe((data: LiscenseResponseData[]) => {
      this.dataSource = new MatTableDataSource<LiscenseResponseData>(data)
    })
  }
  search(){
    if (this.searchCtrl.value === null) return;

    const searchRequest: LiscenseSearchRequest = {
      page: 1,
      buscado: this.searchCtrl.value
    }

    this.licenseListerService.getDataFromBackend(searchRequest).subscribe((data: LiscenseResponseData[]) => {
      this.dataSource = new MatTableDataSource<LiscenseResponseData>(data)
    })
  }
  onPageChange($event: PageEvent) {
    console.log(PageEvent);
  }
}
