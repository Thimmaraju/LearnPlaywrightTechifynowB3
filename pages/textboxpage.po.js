import { expect } from "@playwright/test"
import { emitKeypressEvents } from "node:readline"

export class textboxPage {


    constructor(page) {
        this.page =     page
        this.usernameInput = page.locator("#userName")
        this.emailInput = page.locator('#userEmail')
        this.currentAddressInput = page.locator('#currentAddress')
        this.permanentAddressInput = page.locator('#permanentAddress')
        this.submitBtn = page.locator('#submit')
        this.displayName = page.locator('#name')
        this.diaplyEmail = page.locator('#email')
        this.displayCurrentAddress = page.locator("//p[@id='currentAddress']")
        this.displayPermanentAddress = page.locator("//p[@id='permanentAddress']")

    }

    async lauchUrl(){

      await  this.page.goto('https://demoqa.com/text-box')
    }

    async fillDetails(name, email, currentaddress, permanetaddress) {

        await this.usernameInput.fill(name)
        await this.emailInput.fill(email)
        await this.currentAddressInput.fill(currentaddress)
        await this.permanentAddressInput.fill(permanetaddress)
        await this.submitBtn.click()


    }

    async verifydataDisplay(name, email, currentaddress, permanetaddress) {

        await expect(this.displayName).toContainText(name)
        await expect(this.diaplyEmail).toContainText(email)
        await expect(this.displayCurrentAddress).toContainText(currentaddress)
        await expect(this.displayPermanentAddress).toContainText(permanetaddress)

    }
}

