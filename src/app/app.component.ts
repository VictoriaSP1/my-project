import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  /*El componente debe ser público,
  de otra forma la plantilla no puede
  acceder a ellos*/
  name = 'Victoria';
  age = 22;
  img = "https://toppng.com/uploads/preview/mujer-de-perfil-11551060298h3xjoh9pil.png";
  btnDisabled = true;

  person = {
    name: "Victoria",
    age: 22,
    avatar: 'https://toppng.com/uploads/preview/mujer-de-perfil-11551060298h3xjoh9pil.png'
  }

  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge (){
    this.person.age++;
  }

  onScroll (event: Event) {
    //Le decimos que se va a comportar como un elemento HTML
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName () {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
