# Listado de Comandos basicos para trabajar con angular

## Creacion del proyecto

ng new <nombre_aplicacion> --prefix <prefijo>
ejemplo: ng new practica1 --prefix pm

## Levantar el proyecto
npm start

## Pintar HTML en componete desde variable en la clase
Para pintar el codigo HTML que se encuentra dentro de un atributo que se definio en una clase se debe utilizar la directiva ***innerHTML***, y asignarle el valor de la variable. Esta directiva se debe agregar dentro de los atributos de la etiqueta. En el ejemplo siguiente se embebe el contenido de la variable ***menu*** en una etiqueta ***div***.

Ejem: 

Template
<div [innerHTML]="menu"></div>

Componente

...
export class AppComponent {
  ...
  menu = `<ul><li>Inicio</li><li>opciones <ul><li>opcion 1</li><li>opcion 2</li></ul></li></ul>`;
}
...

## Crear un componente

Para crear un componente se deben realizar tres pasos: Importacion de dependencias, definicion de metadata (Decoradores), definicion de logica de negocio (Clase).

### Importacion de dependencia

Para importar dependencia se utiliza la palabra clave **import** seguido de {}, en los cuales se coloca el listado de depencencias que se desea importar, seguido de la palabra clave **from** seguido del nombre del modulo donde se encuentram las dependencias que se estan importando encerrado entre comillas simples. 

Ejem: import { Component } from '@angular/core';

### Definicion de metadata (Decoradores)

Para la creacion de componentes se utiliza el decorador **@Component**. Este decorador permite definir el selector el nombre del selector (etiqueta o tag html) en el cual se incrustara el componete, el nombre o el template que se utilizara, los estillos CSS entre otros. a continuacion se presenta una estrcutura basica de un componente:

Estructura 1:

@Component({
  selector: 'pm-root',
  template: `<h1>{{title}}</h1> 
    <div [innerHTML]="menu">{{menu}}</div>
  `
})

Estructura 2:

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

Nota: Es importante tener en cuenta que la definicion del decorador inicia con **({** y termina con **})**

### definicion de logica de negocio (Clase)

En esta parte del componente se definen los atributos y metodos que definen o rigen el comportamiento del componente. En este caso se debene tener algunos aspectos importantes. En la definicion de la clase se debe utilizar la palabra clave **export** que es la que permite que el componte pueda ser utilizado en otras partes de la aplicacion. se debe utilizar la palabra clave **class** para definir el nombre del componete. La estructura basica de un componete es la siguiente:

export class AppComponent {
  title = 'Primera practica de angular';
  atributo 2 = `<ul><li>Inicio</li><li>opciones <ul><li>opcion 1</li><li>opcion 2</li></ul></li></ul>`;

//TODO: Verificar la definicion de los metodos
  function metodo1():{
      return "Metodo 1";
  }
}

## Registro de componetes en la aplicacion principal

Para poder utilizar un componente, este se debe de registrar en la aplicacion. Para registrar el componente se debe de acceder al archivo **app.module.ts**. En este archivo se deben hacer dos pasos, el primero es importar el componete y el segundo es adicionarolo a la lista de modulos, para lo cual se utiliza el decorador **@NgModule**. A continuacion se presenta un ejemplo tomado como referencia el componente anterior:

Paso 1: Import del componente

import { AppComponent } from './app.component';

Paso 2: Registro del componetne

@NgModule({
  declarations: [
    **AppComponent**
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

Nota: Observar que el nombre del componente se debe agragar en la seccion de **declarations** del decorador y en algunas ocasiones tambien se agraga en la seccion de **bootstrap**. Ademas, que el nombre del componente debe ser el mismo de la clase. Ademas, el nombre del componentes no van entre comillas.


## Componentes y recursos
Fuentes e iconos : https://fontawesome.com/
Iconos y plantillas: https://getbootstrap.com/
### intalacion de librerias
nmp install bootstrap font-awesome