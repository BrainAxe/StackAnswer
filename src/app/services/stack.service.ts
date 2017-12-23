import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class StackService{
	private answer:string;

	constructor(private _http:Http){
		//console.log("Github Service Ready...");
		this.answer = '';

	}
	
	getAnswer(){
		return this._http.get('https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + this.answer + '&site=stackoverflow').map(res => res.json().items);
	}

	updateProblem(problem:string){
		this.answer = problem;
	}

}


