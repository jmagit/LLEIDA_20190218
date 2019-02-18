import { Component } from '@angular/core';
import { NotificationService } from './app-common/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';

  constructor(notify: NotificationService) {
    notify.add('Esto es una demo');
    notify.remove(0);
    notify.add(null);
    notify.remove(0);
   }
}
