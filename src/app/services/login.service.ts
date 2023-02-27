import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { Observable, map, of, switchMap } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment.prod';

const { trainerApiKey, trainerApiUrl } = enviroment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }
  
  public login(username: string): Observable<Trainer> {
    return this.checkUsername(username)
      .pipe(
        switchMap((trainer: Trainer | undefined) => {
        if (trainer === undefined) {
          return this.createUser(username);
        }
        return of(trainer);
      })
    )
  }

  private checkUsername(username: string): Observable<Trainer | undefined> {
    return this.http.get<Trainer[]>(`${trainerApiUrl}?username=${username}`)
      .pipe(
        map((response: Trainer[]) =>  response.pop()
        )
      )
  }

  private createUser(username: string): Observable<Trainer> {

    const trainer = {
      username,
      pokemon: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": trainerApiKey
    })

    return this.http.post<Trainer>(trainerApiUrl, trainer, {headers})
  }
}