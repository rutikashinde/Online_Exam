import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import baseUrl from './helper';

import { map } from 'rxjs/operators';

import { BehaviorSubject, Observable } from 'rxjs';

import { Router } from '@angular/router';

import { User } from '../models/user.model';

import helper from './helper';
@Injectable({

  providedIn: 'root'

})

export class UserService {

  public user: Observable<User>;

  private userSubject: BehaviorSubject<User>;

  constructor(
    private router: Router,

    private http: HttpClient

    ) { }

    public get userValue(): User {

      return this.userSubject.value;

  }

  insertUser(user: User): Observable<User>{

    return this.http.post<User>(`${baseUrl}/user`,user);

  }

}