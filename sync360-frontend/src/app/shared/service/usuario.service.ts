import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  isDelete: any;
  id?: number;
  nome_completo: string;
  idade?: number;
  rua?: string;
  bairro?: string;
  estado?: string;
  biografia?: string;
  imagem_perfil?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiBaseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiBaseUrl}/usuarios`);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiBaseUrl}/usuario/${id}`);
  }

  createUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/usuario`, usuario);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/usuario/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/usuario/${id}`);
  }

  
  saveUsuario(usuario: Usuario): Observable<any> {
    if (usuario.id) {
      return this.updateUsuario(usuario.id, usuario);
    }
    return this.createUsuario(usuario);
  }
}
