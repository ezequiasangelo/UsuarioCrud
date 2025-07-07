import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService, Usuario } from 'src/app/shared/service/usuario.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  form!: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  fileName: string | null = null;
  uploading: boolean = false;
  uploadError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private dialogRef: MatDialogRef<UsuarioFormComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: Usuario | null
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      nome_completo: ['', Validators.required],
      idade: [null],
      rua: [''],
      bairro: [''],
      estado: [''],
      biografia: [''],
      imagem_perfil: ['']
    });

    if (this.data) {
      this.form.patchValue(this.data);
      if (this.data.imagem_perfil) {
        this.imagePreview = this.data.imagem_perfil;
      }
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (!file) return;

    this.fileName = file.name;
    this.preview(file);
    this.uploadFile(file);
  }

  private preview(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  private uploadFile(file: File): void {
    this.uploading = true;
    this.uploadError = null;

    const formData = new FormData();
    formData.append('foto', file);

    this.http.post<any>('http://127.0.0.1:8000/api/usuarios/upload-foto', formData)
      .subscribe({
        next: (res) => {
          this.uploading = false;
          if (res.url) {
            this.form.get('imagem_perfil')?.setValue(res.url);
          }
        },
        error: (err) => {
          this.uploading = false;
          this.uploadError = err.error?.erro || 'Erro desconhecido ao enviar imagem';
        }
      });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const usuario: Usuario = this.form.value;
      this.usuarioService.saveUsuario(usuario).subscribe({
        next: res => {
          this.dialogRef.close(true);
        },
        error: err => {
          console.error('Erro ao salvar usuário:', err);
        }
      });
    }
  }
}
