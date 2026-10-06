
import {CommonSteps} from '../helpers/CommonSteps'


test.describe(`Validation of Components`,()=>{

    let commonSteps = new CommonSteps();

    test(`NAV-001 — Verify Navbar Components`,async ({basePage})=>{
        await commonSteps.step1(basePage);
        await test.step(`Verify the DemoBlaze logo is displayed`,async()=>{
           
        })
    })
})