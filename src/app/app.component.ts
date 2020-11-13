import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'my-app';
  posts: Post[] = [
    {title:"React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 1},
    {title:"Angular", text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.", id: 2},
    {title:"Vue", text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces", id: 3},
    {title:"Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 4}
  ]

  titleS: SearchObject = {
    text: '',
    searchType: SearchType.ByTitle
  }

  recalculatePostsId ()
  {
    var id = 1
    this.posts.forEach((item)=>
    {
      item.id = id
      id++
    })
  }

  updatePosts (event){
    this.posts.unshift(event)

    // recalculate posts' IDs
    this.recalculatePostsId()
  }

  removeIdPost(id:number) {
    this.posts = this.posts.filter((item)=>item.id!=id)

    // recalculate posts' IDs
    this.recalculatePostsId()
  }

  onChangeSearch(event) {

    this.titleS = {
      text: event,
      searchType: SearchType.ByTitle
    }

    console.log('app.component.ts, onChangeSearch', 'event = ', event, 'titleS = ', this.titleS)
  }

  onChangeSearchType(event) {
    this.titleS = {
      text: this.titleS.text,
      searchType: event
    }
    console.log('app.component.ts, onChangeSearchType', 'event = ', event, 'titleS = ', this.titleS)
  }
}
export  interface  Post {
  title: string
  text: string
  id?: number
}

export  interface  SearchObject {
  text: string,
  searchType: SearchType
}

export enum SearchType {
  ByTitle = 1,
  ByText
}

