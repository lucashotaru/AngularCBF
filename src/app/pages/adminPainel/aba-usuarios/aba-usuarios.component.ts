import { DecimalPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Usuarios } from 'src/app/models/UsuariosModel';
import { USUARIOSLISTA } from 'dados/UsuarioListagemLista';

@Component({
  selector: 'app-aba-usuarios',
  templateUrl: './aba-usuarios.component.html',
  styleUrls: ['./aba-usuarios.component.scss'],
  providers: [UsuariosService, DecimalPipe]
})
export class AbaUsuariosComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  displayedColumns: string[] = ['id', 'Nome', 'Email', 'Registro', 'acoes'];
  dataSource = new MatTableDataSource<Usuarios>([]);
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchPosts()
    console.log('DataSource', this.dataSource)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  fetchPosts(): void {
      this.dataSource.data = USUARIOSLISTA;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
