import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface EmailData {
  emails: { email: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificarEmail(email: string): Observable<boolean> {
    return this.http.get<EmailData>('assets/dados/verificarEmail.json')
      .pipe(
        delay(3000),
        map((dados: EmailData) => dados.emails),
        // tap(console.log),
        map((emails: { email: string }[]) => emails.filter(v => v.email === email)),
        // tap(console.log),
        map((emails: { email: string }[]) => emails.length > 0 )
        // tap(console.log)
      );
  }
}
