import { Injectable } from '@angular/core';
import { LoggerService } from 'src/indra-core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private listado: Array<string> = [];

  constructor(private out: LoggerService) { }

  public get Listado() { return Object.assign([], this.listado); }

  public add(msg: string): void {
    if (!msg) {
      this.out.error('Invalid params');
      return;
    }
    this.listado.push(msg);
    this.out.error(msg);
  }

  public remove(indice: number): void {
    if (0 <= indice && indice < this.listado.length) {
      this.listado.splice(indice, 1);
    } else {
      this.out.error('Index out of range');
    }
  }

  public clear(): void {
    if (this.listado.length) {
      this.listado.splice(0);
    }
  }
}
