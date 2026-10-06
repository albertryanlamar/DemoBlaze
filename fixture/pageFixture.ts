import test as base from 'playwright/test';

type myPage = {

    basePage: BasePage;
    
}

const test = base.extend<myPage>({
  
    basePage: async ({page},use) =>{
        const basePage = new BasePage(page);
        await use(basePage);
    }
})