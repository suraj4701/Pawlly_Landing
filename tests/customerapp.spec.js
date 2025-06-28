import { expect, test } from '@playwright/test';
import { EnvantoPawllyVerify, EnvantoVerify, TrustpilotVerify, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("Product CustomerApp Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Product CustomerApp Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("Product CustomerApp View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Product CustomerApp Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Product CustomerApp book appointments", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const LinkLocator = page.locator("//a[contains(text(),'book appointments')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/feature/appointment-booking-scheduling/");
});

test("Product CustomerApp View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Product CustomerApp Grooming", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/p[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/service/pet-grooming/");
});

test("Product CustomerApp Day Care", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const LinkLocator = page.locator("//a[contains(text(),'Day Care')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/service/pet-daycare/");
});

test("Product CustomerApp View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Product CustomerApp View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Product CustomerApp View Demo 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Product CustomerApp View Demo 6", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Product CustomerApp View Demo 7", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[10]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Product CustomerApp View Demo 8", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Product CustomerApp View Demo 9", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[12]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Product CustomerApp View Demo 10", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-644']").hover()
    await page.locator("//li[@id='menu-item-1428']").click()
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[13]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})