import { test } from '@playwright/test';
import { CommonLinkVerify, EmployeeAppPlaystore, EnvantoPawllyVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("Product EmployeeApp", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-644']").hover();
        await page.locator("//li[@id='menu-item-1429']").click();
    });

    test("Trustpilot Verify", async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/a[1]");
        await TrustpilotVerify(page, locator);
    });

    test("Envanto Verify", async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[3]/div[1]/a[1]");
        await EnvantoVerify(page, locator);
    });

    test("View Demo", async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EmployeeAppPlaystore(page, locator);
    });

    test("Buy now", async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoPawllyVerify(page, locator);
    });

    test("Customer Satisfaction", async ({ page }) => {
        const locator = page.locator("//a[contains(text(),'Customer Satisfaction')]");
        await locator.scrollIntoViewIfNeeded();
        const expectedLink = "https://pawlly.iqonic.design/feature/client-management/";
        await CommonLinkVerify(page, locator, expectedLink);
    });

    test("View Demo 2", async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, locator);
    });

    test("View Demo 3", async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, locator);
    });

    test("View Demo 4", async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, locator);
    });

    test("View Demo 5", async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, locator);
    });

    test("View Demo 6", async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await EmployeeAppPlaystore(page, locator);
    });
});