import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/shared/service/usuario.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  displayedColumns: string[] = ['imagem_perfil', 'nome_completo', 'idade', 'rua', 'bairro', 'estado', 'acoes'];
  dataSource = new MatTableDataSource<Usuario>();

  constructor(
    public usuarioService: UsuarioService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(res => {
      this.dataSource.data = res.filter(usuario => !usuario.isDelete);
    });
  }
  openUsuarioForm(): void {
    const dialogRef = this.dialog.open(UsuarioFormComponent, {
      maxWidth: '95vw',
      width: '500px',
      panelClass: 'custom-dialog',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }

  editarUsuario(usuario: Usuario): void {
    const dialogRef = this.dialog.open(UsuarioFormComponent, {
      maxWidth: '95vw',
      width: '500px',
      panelClass: 'custom-dialog',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }


  excluirUsuario(usuario: Usuario): void {
    if (confirm(`Deseja excluir o usuário "${usuario.nome_completo}"?`)) {
      this.usuarioService.deleteUsuario(usuario.id!).subscribe(() => {
        this.ngOnInit();
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: Usuario, filter: string) =>
      (data.nome_completo?.toLowerCase().includes(filter) ?? false) ||
      (data.rua?.toLowerCase().includes(filter) ?? false);

    this.dataSource.filter = filterValue;
  }
  

}
