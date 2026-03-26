import { test, expect } from '@playwright/test';



test("verify check boxes ", async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.locator('#checkBoxOption2').check()

    await expect(page.locator('#checkBoxOption2')).toBeChecked()

    await page.waitForTimeout(3000)

    await page.locator('#checkBoxOption2').uncheck()

    await expect(page.locator('#checkBoxOption2')).not.toBeChecked()

})


test("verify Radio Button ", async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.locator('input[value="radio3"]').check()

    await expect(page.locator('input[value="radio3"]')).toBeChecked()

    await page.waitForTimeout(3000)

    //await page.locator('input[value="radio3"]').uncheck()

    await expect(page.locator('input[value="radio1"]')).not.toBeChecked()


})


test("verify Drop down ", async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.locator('#dropdown-class-example').selectOption('Option2')

})


test("verify Drop down  2", async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await page.locator('#dropdown-class-example').selectOption('Option2')

})


test("Working With Tabs", async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const [newTab] = await Promise.all([

         page.waitForEvent('popup'),

         page.locator('//a[@href="https://www.linkedin.com/company/orangehrm/mycompany/"]').click()

    ])

    await newTab.waitForTimeout(3000)

    await newTab.locator('//icon[@class="contextual-sign-in-modal__modal-dismiss-icon lazy-loaded"]').click()

})

// Working with NewTab not Possible cypress 

test("Working With Tables ", async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/tables')

   // How Many rows 
   
   await expect.soft(page.locator('//table[@id="table1"]/tbody/tr')).toHaveCount(8)
   
   //How Many coloumns 
   
   await expect(page.locator('//table[@id="table1"]/thead/tr/th')).toHaveCount(6)
   
   //in 2nd row 3rd coloumn what is value
   
   await expect(page.locator('//table[@id="table1"]/tbody/tr[2]/td[3]')).toHaveText('fbach@yahoo.com')

})



test("verify Iframes", async ({page}) => {

  await page.goto('https://jqueryui.com/checkboxradio/')   
   
   await page.frameLocator('//iframe[@class="demo-frame"]').locator('//label[@for="checkbox-1"]').click()
   

})


test("verify Shadow DOM", async ({page}) => {

  await page.goto('http://watir.com/examples/shadow_dom.html')   
   
   await page.locator('input[type="text"]').fill("Raju")
   

})


test('Upload multiple files ', async ({page}) =>{

    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')

    await page.locator('//input[@type="file"]').setInputFiles(['testdata/Cat.jpg', 'testdata/search.png'])
})

