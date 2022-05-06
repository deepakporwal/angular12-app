import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-sample-rxjs',
  templateUrl: './sample-rxjs.component.html',
  styleUrls: ['./sample-rxjs.component.css']
})
export class SampleRxjsComponent implements OnInit {
  
  observervable$;
  mySubjectObject$; // this is a subject variable

  constructor() { }

  ngOnInit(): void {
     this.observervable$ = Observable.create((observer)=>{
        observer.next(1);
        observer.next(2);
        observer.complete();
    });
    
    this.observervable$.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });

    this.mySubjectObject$ = new Subject();
    this.mySubjectObject$.subscribe(x=>console.log('first subscribe :' + x));
    this.mySubjectObject$.next(1);
    this.mySubjectObject$.next(2);

    this.mySubjectObject$.subscribe(x=>console.log('second subscribe :' + x));
    this.mySubjectObject$.next(3);
    this.mySubjectObject$.next(4);

    this.mySubjectObject$.complete();
  
  }

  ngDestroy(){
    this.observervable$.unsubsribe();
  }

}
