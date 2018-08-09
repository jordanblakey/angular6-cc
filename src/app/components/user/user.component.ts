import { Component, OnInit } from '@angular/core'
import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string = 'Steve Smith' // setting type on declaration
  age: number
  email: string
  address: Address // Reference an interface (can be imported)
  hobbies: string[]
  hello: any
  posts: Post[]
  isEdit: boolean = false

  constructor(private dataService: DataService) {
    console.log('constructor ran...') // Runs before render
  }

  ngOnInit() {
    this.name = 'John Doe'
    this.age = 30
    this.address = {
      street: '50 main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['painting', 'coding', 'playing music']
    this.hello = 'This can be any type'
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts)
      this.posts = posts
    })
    console.log('ngOnInit ran...') // Runs on render
  }

  onClick() {
    this.name = 'Jordan'
    this.hobbies.push('New Hobby')
    console.log('HELLO')
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby)
    return false
  }

  deleteHobby(hobby) {
    console.log(hobby)
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1)
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit
  }
}


interface Address {
  street: string
  city: string
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}