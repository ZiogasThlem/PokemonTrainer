import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { Observable, map, of, switchMap } from 'rxjs';
import { enviroment } from 'src/environments/environment';

const { trainerApiKey, trainerApiUrl } = enviroment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }
  

  // when user types a valid username, by making use of 
  // CheckUsername search the trainer API for the submited
  // username and redirects the user to the Pokemon-Catalogue,
  // with his collection stored from the last time they were logged in.
  // If it doesn't exists, CreateTrainer is called and the new trainer is
  // registered to the API.
  public login(username: string): Observable<Trainer> {
    return this.checkUsername(username)
      .pipe(
        switchMap((trainer: Trainer | undefined) => {
        if (trainer === undefined) {
          return this.createTrainer(username);
        }
        return of(trainer);
      })
    )
  }

  // checking if trainer name provided from input form exists in the trainer API
  private checkUsername(username: string): Observable<Trainer | undefined> {
    return this.http.get<Trainer[]>(`${trainerApiUrl}?username=${username}`)
      .pipe(
        map((response: Trainer[]) =>  response.pop()
        )
      )
  }

  // doing post request to trainer API for new trainer entry
  private createTrainer(username: string): Observable<Trainer> {

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