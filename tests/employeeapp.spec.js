import { test } from '@playwright/test';
import { CommonLinkVerify, EmployeeAppPlaystore, EnvantoPawllyVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("Product EmployeeApp Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Product EmployeeApp Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("Product EmployeeApp View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("Product EmployeeApp Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Product EmployeeApp Customer Satisfaction", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const LinkLocator = page.locator("//a[contains(text(),'Customer Satisfaction')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://pawlly.iqonic.design/feature/client-management/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("Product EmployeeApp View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("Product EmployeeApp View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("Product EmployeeApp View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("Product EmployeeApp View Demo 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("Product EmployeeApp View Demo 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1429']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})