import {Page,Locator} from 'playwright/test'
import {CommonActions} from '../helpers/CommonActions'

export class NavigationBar{

    logo:Locator;
    homeLink:Locator;
    contactLink:Locator;
    aboutUsLink:Locator;
    cartLink:Locator;
    loginLink:Locator;
    signupLink:Locator;
    logoutLink:Locator;
    welcomeUser:Locator;
    commonActions:CommonActions;


    constructor(public page:Page){
       
        this.commonActions = new CommonActions();
        this.logo = this.page.locator('#nava');
        this.homeLink = this.page.getByRole('link', { name: 'Home' });
        this.contactLink = this.page.getByRole('link', { name: 'Contact' });
        this.aboutUsLink = this.page.getByRole('link', { name: 'About us' });
        this.cartLink = this.page.getByRole('link', { name: 'Cart' });
        this.loginLink = this.page.getByRole('link', { name: 'Log in' });
        this.signupLink = this.page.getByRole('link', { name: 'Sign up' });
        this.logoutLink = this.page.getByRole('link', { name: 'Log out' });
        this.welcomeUser = this.page.locator('#nameofuser');
    }

    //actions
    async clickHome(){
       await this.commonActions.safeClick(this.homeLink);
    }


}