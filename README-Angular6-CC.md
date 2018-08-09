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