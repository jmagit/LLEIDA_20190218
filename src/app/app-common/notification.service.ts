import { Injectable } from '@angular/core';
import { LoggerService } from 'src/indra-core';

export enum NotificationType {
  error,
  warn,
  info,
  log
}

export class Notification {
  constructor(private id: number, private message: string, private type: NotificationType) { }

  get Id() { return this.id; }
  set Id(value: number) { this.id = value; }
  get Message() { return this.message; }
  set Message(value: string) { this.message = value; }
  get Type() { return this.type; }
  set Type(value: NotificationType) { this.type = value; }
}
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private listado: Array<Notification> = [];

  constructor(private out: LoggerService) { }

  public get Listado() { return Object.assign([], this.listado); }
  public get HayNotificaciones() { return this.listado.length > 0; }

  public add(msg: string, type: NotificationType = NotificationType.error): void {
    if (!msg) {
      this.out.error('Invalid params');
      return;
    }
    const newId = this.listado.length ? this.listado[this.listado.length - 1].Id + 1 : 1;
    this.listado.push(new Notification(newId, msg, type));
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
