import { expect, test } from '@playwright/test';
import { TrustpilotVerify, UserAppAppstore, UserAppPlaystore } from './common';
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

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/customer-app/");
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

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/");
});

test("WhyDifferent ForDevelopers tech support", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1431']").click()
    const LinkLocator = page.locator("//a[contains(text(),'tech support')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
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

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/pricing/");
});

test("WhyDifferent ForBusinessOwner top-notch support", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1430']").click()
    const LinkLocator = page.locator("//a[contains(text(),'top-notch support')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
});

test("WhyDifferent ForBusinessOwner custom development services", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-635']").hover()
    await page.locator("//li[@id='menu-item-1430']").click()
    const LinkLocator = page.locator("//a[contains(text(),'custom development services')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/");
});