


export class PageObjectManager{
    
    basePage: BasePage

    constructor(page:Page){
      this.basePage = new BasePage(page)
    }
}