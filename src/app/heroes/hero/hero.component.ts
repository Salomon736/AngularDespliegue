import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number=40;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescripcion(): string {
    return `${this.name} ${this.age}`;
  }
  public changeName(): void {
    const newName = prompt("Ingrese el nuevo nombre:");
    if (newName !== null && newName.trim() !== "") {
      this.name = newName;
    }
  }

  public changeAge(): void {
    const newAgeString = prompt("Ingrese la nueva edad:");
    if (newAgeString !== null) {
      const newAge = parseInt(newAgeString);
      if (!isNaN(newAge)) {
        this.age = newAge;
      }
    }
  }
  resetForm(): void {
    this.name = 'Ironman';
    this.age = 40;
    // document.querySelectorAll('h1')!.forEach(Element=>{
    //   Element.innerHTML
    // })
  }
}
