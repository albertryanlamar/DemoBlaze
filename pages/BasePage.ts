import {Page} from 'playwright/test'

export class BasePage{

    contructor(public page:Page){

    }

    //actions
    async openWebsite(){
        await this.page.goto('/');
    }

}