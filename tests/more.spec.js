import { test } from '@playwright/test';
import { AdminPanelVerify, CommonLinkVerify, EnvantoPawllyVerify } from './common';
const home_url = process.env.HOME_URL;

test("More Pricing Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2059']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("More Pricing Buy Service", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-2059']").click()
    const LinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://service.iqonic.design/services/pawlly-flutter-app-with-laravel-backend/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("More Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//li[@id='menu-item-650']")
    const expectedLink = "https://iqonic.tech/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("More Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//li[@id='menu-item-3143']")
    const expectedLink = "https://pawlly.iqonic.design/pawlly-demo-call/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("More Buy now", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]");
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("More Explore Pawlly", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]");
    await AdminPanelVerify(page, Locator);
})