import {test} from 'playwright/test'
import {BasePage} from '../pages/BasePage'

export class CommonSteps {


    async step1(basePage:BasePage){
        await test.step(`Navigate to website`,async()=>{
           await basePage.openWebsite();
        })
    }
}