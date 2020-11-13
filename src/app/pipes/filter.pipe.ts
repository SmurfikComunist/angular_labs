import {Pipe, PipeTransform} from '@angular/core';
import {Post, SearchObject, SearchType} from '../app.component'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(post: Post[], searchObject: SearchObject): Post[] {

    console.log('PipeTransform', searchObject, searchObject.text)
    if(!searchObject.text.trim()) {
      return post
    } else {
      return post.filter(item=>{
        if(searchObject.searchType == SearchType.ByTitle)
        {
          return item.title.toLowerCase().includes(searchObject.text.toLowerCase())
        }
        else if(searchObject.searchType == SearchType.ByText)
        {
          return item.text.toLowerCase().includes(searchObject.text.toLowerCase())
        }
      })
    }

  }

}
