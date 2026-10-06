import { expect,Locator } from "playwrighr/test";

export class CommomActions{

    async safeClick(element:Locator){
       await expect(element).toBeVisible();
       await expect(element).toBeEnable();
       await element.click();
    }

    


}