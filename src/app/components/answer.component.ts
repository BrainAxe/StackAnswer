import { Component } from '@angular/core';
import { StackService } from '../services/stack.service';
import 'rxjs/add/operator/map';


@Component({
  moduleId: module.id,
  selector: 'answer',
  templateUrl: 'answer.component.html'

})
export class AnswerComponent {
  answer:any[];
  problem:string;
  constructor(private _stackService:StackService){
  	this._stackService.getAnswer().subscribe(answer => {
  		//console.log(answer);
  		this.answer = answer;
  	})
  }

  searchProblem(){
	this._stackService.updateProblem(this.problem);

	this._stackService.getAnswer().subscribe(answer => {
  		this.answer = answer;
  	})
  }

}
