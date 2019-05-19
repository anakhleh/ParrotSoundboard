import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchText: string
  content: category[] = [
    {
      categoryName: "cat1",
      subcategories: [
        {subcategoryName: "subcat1", sounds:[
          {soundName:"subcatsound1",streamingLink:"subLink1"},
          {soundName:"subcatsound2",streamingLink:"subLink2"}
        ]
      }
      ],
      sounds: [
        {soundName:"catsound1",streamingLink:"catLink1"},
        {soundName:"catsound2",streamingLink:"catLink2"}
      ]
    }
  ]

  //dependency inject rest.ts file into constructor

  ionViewWillEnter(){
    /*
    get the content and content links and assign to content

    */
  }
}

interface category{
  categoryName: string,
  subcategories: subcategory[]
  sounds: sound[]
}

interface subcategory{
  subcategoryName: string,
  sounds: sound[]
}

interface sound{
  soundName: string,
  streamingLink: string
}