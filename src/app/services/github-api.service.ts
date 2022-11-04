import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubRepo } from '../interfaces/GithubRepo';
import { GithubUser } from '../interfaces/GithubUser';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly baseURL: string = 'https://api.github.com/users/'

  constructor(
    private http: HttpClient // objeto responsável por fazer as requisições http no Angular
  ) { }

  /**
   * Métodos HTTP
   * Leitura de dados -> GET
   * Criação de dados -> POST
   * Atualização de dados -> PUT
   * Deleção de dados -> DELETE
   */

  procurarUsuario(username: string) /* renato3x  */ {
    // https://api.github.com/users/michaelJackson
    /**
     * o objeto http, responsável por fazer as requisições, possui o método get(), que serve
     * para fazer requisições HTTP utilizando o verbo GET. Basta apenas passar a URL de acesso
     * como parâmetro
     */

    return this.http.get<GithubUser>(`${this.baseURL}${username}`)
  }

  procurarRepos(username: string) {
    // https://api.github.com/users/michaelJackson/repos
    return this.http.get<GithubRepo[]>(`${this.baseURL}${username}/repos`)
  }
}
