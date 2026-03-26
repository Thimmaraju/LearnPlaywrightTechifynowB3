import { test, expect } from '@playwright/test';

import { textboxPage } from "../pages/textboxpage.po"

import data from "../testdata/textboxdata.json"


test("verify text boxes ", async ({page}) => {

    const textbox = new textboxPage(page)

    await textbox.lauchUrl()
    await textbox.fillDetails(data.fullname, data.email, data.currentAddress, data.permanentAddress)
    await textbox.verifydataDisplay(data.fullname, data.email, data.currentAddress, data.permanentAddress)


})