import { Component} from '@angular/core';
@Component({
selector: 'app-counter',
template: `<h1>Hola Counter</h1>
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

<h1 class="text-4xl font-bold text-center mb-8">{{title}}</h1>
<h3 class="flex justify-center gap-4 text-lg font-semibold mb-4">Counter: {{counter}}</h3>
<div class="flex justify-center gap-4 mb-8">
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" (click)="incrementar(+1)">+1</button>
  <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" (click)="incrementar(-1)">-1</button>
  <button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" (click)="reset()">Reset</button>
</div>


`,
})

export class CounterComponent{
  public title: string = 'Laravel17';
  public counter: number = 0;

  incrementar(value : number):void{
    this.counter = this.counter + value;
  }
  reset(): void{
    this.counter = 0;
  }
}
