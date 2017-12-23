import { Component } from '@angular/core';
import { AnswerComponent } from './components/answer.component';
import { StackService } from './services/stack.service';
 
@Component({
  moduleId: module.id ,
  selector: 'app-root',
  templateUrl: 'app.component.html'

})
export class AppComponent {
  title = 'app';
}
