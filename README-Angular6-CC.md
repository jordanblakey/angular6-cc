# Angular 6 Crash Course Notes

## Code Style

- Typescript
- ES6 Classes
- Using Decororators

## Angular Concepts

Components - Basically, webcomponents. Multiple root nodes, unlike typical React app.

Services - Classes that send data and functionality across components

## Installation

- Angular CLI, or
- Quickstart Seed

### Commands

Basics
`ng serve, build, lint, test, e2e`

```sh
npm audit fix
ng doc forRoot #Open Angular API documentation with search term
ng update #Update to the latest version of angular
ng build --prod #Create a dist folder for deployment
ng add @ng-bootstrap/schematics # Add bootstrap schematic to the project
ng add @angular/pwa # Add progressive web application to project
ng test # Open Karma in the browser
ng g pipe uppercase -m awesome # Generate a pipe and include it in module "awesome"
ng g pipe awesome/lowercase # Generate a pipe and nest it in module awesome
ng g module awesome # Generate module awesome
ng g c neat2 --spec false -t -s # Generate component with no tests, inlining styles and template
ng g c neat --spec false -t -s # 
ng g c neat
ng generate component cool
ng generate component --help
```

Component Generation
`ng g component components/user`

## Basic Component

```js
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent {
  name = 'Angular'
}
```

```html
<body>
  <my-app>Loading AppComponent content here...</my-app>
</body>
```

## Basic Service

```js
import { Injectable } from '@angular/core'
import { User } from './user'
import { USERS } from './mock-users'

@Injectable()
export class UserService {
  getUsers(): User[] {
    return USERS
  }
}
```

## Syntax

```html
<!-- String Interpolation -->
{{hello}}
<!-- Events -->
<button (click)="onClick(input.value)">Click Me</button>
<!-- Two Way Data Binding -->
<input type="text" [(ngModel)]="name" name="name">
<!-- For -->
<li *ngFor="let hobby of hobbies; let i = index">{{hobby}}: {{index}}</li>
```
