import { test, expect } from '@playwright/test';
import addempdata from "../../testdata/addempapidata.json"
const { faker } = require('@faker-js/faker');

let employeeNumber;

test('Verify Get Employees Through API request', async ({ request }) => {

    const URL = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC"

    console.log(process.env.COOKIEVALUE)
    const getAllEmps = await request.get(URL, {
        headers: {
            Cookie: process.env.COOKIEVALUE
        }
    })

    expect(getAllEmps.status()).toBe(200)

    console.log(await getAllEmps.json())

})

test('Verify Add Employee Through API request', async ({ request }) => {

    const URL = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"

    console.log(process.env.COOKIEVALUE)

    addempdata.employeeId = faker.string.alphanumeric(5)
    const createEmp = await request.post(URL, {
        headers: {
            Cookie: `rangehrm=${process.env.COOKIEVALUE}`
        },
        data: addempdata
    })

    expect(createEmp.status()).toBe(200)
    console.log(await createEmp.json())

    const body = await createEmp.json()

    employeeNumber = body.data.empNumber

    // Exact field validations
    expect(body.data).toHaveProperty('empNumber');
    expect(typeof body.data.empNumber).toBe('number');
    expect(body.data.lastName).toBe('Potlala');
    expect(body.data.firstName).toBe('Sowmya');
    expect(body.data.middleName).toBe('abc');
    expect(body.data.employeeId).toBe(addempdata.employeeId);

    // Null validation
    expect(body.data.terminationId).toBeNull();

    // Empty arrays
    expect(body.meta).toEqual([]);
    expect(body.rels).toEqual([]);

})


test('Verify Update Employee Through API request', async ({ request }) => {

    const URL = `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/${employeeNumber}/personal-details`

    const updateEmp = await request.put(URL, {
        headers: {
            Cookie: process.env.COOKIEVALUE
        },
        data: {
            "lastName": "Potlala",
            "firstName": "Sowmya",
            "middleName": "abc",
            "employeeId": "112233",
            "otherId": "98765",
            "drivingLicenseNo": "12345678",
            "drivingLicenseExpiredDate": null,
            "gender": 2,
            "birthday": null
        }
    })

    console.log(await updateEmp.json())

})



test('Verify DELETE Employee Through API request', async ({ request }) => {

    const URL = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"

    const deleteEmp = await request.delete(URL, {
        headers: {
            Cookie: process.env.COOKIEVALUE
        },
        data: { "ids": [246] },
    })

    console.log(await deleteEmp.json())

})