import { test } from '@playwright/test';
import { CommonLinkVerify, TrustpilotVerify, UserAppAppstore, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("WhyDifferent ForDevelopers Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1431']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("WhyDifferent ForDevelopers Flutter Apps", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1431']").click()
    const LinkLocator = page.locator("//a[contains(text(),'Flutter Apps')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://pawlly.iqonic.design/product/customer-app/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("WhyDifferent ForDevelopers User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1431']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("WhyDifferent ForDevelopers User App Appstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1431']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppAppstore(page, adminpanelLocator);
})

test("WhyDifferent ForDevelopers custom development services", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1431']").click()
    const LinkLocator = page.locator("//a[contains(text(),'custom development services')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.tech/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("WhyDifferent ForDevelopers tech support", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1431']").click()
    const LinkLocator = page.locator("//a[contains(text(),'tech support')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.desky.support/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("WhyDifferent ForBusinessOwner Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1430']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("WhyDifferent ForBusinessOwner Price", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1430']").click()
    const LinkLocator = page.locator("//a[contains(text(),'price')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://pawlly.iqonic.design/pricing/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("WhyDifferent ForBusinessOwner top-notch support", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1430']").click()
    const LinkLocator = page.locator("//a[contains(text(),'top-notch support')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.desky.support/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});

test("WhyDifferent ForBusinessOwner custom development services", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1430']").click()
    const LinkLocator = page.locator("//a[contains(text(),'custom development services')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://service.iqonic.design/";
    await CommonLinkVerify(page, LinkLocator, expectedLink);
});