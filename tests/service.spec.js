import { expect, test } from '@playwright/test';
import { AdminPanelVerify, EnvantoPawllyVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("Services Boarding Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1421']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Services Boarding Explore Pawlly", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1421']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Services Boarding Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1421']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Services Boarding create bookings", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1421']").click()
    const LinkLocator = page.locator("//a[contains(text(),'create bookings')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/feature/appointment-booking-scheduling/");
});

test("Services Veterinary Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1425']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Services Veterinary Explore Pawlly", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1425']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Services Veterinary Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1425']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Services Veterinary admin panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1425']").click()
    const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
});

test("Services Grooming Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1423']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Services Grooming Explore Pawlly", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1423']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Services Grooming Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1423']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Services Grooming admin panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1423']").click()
    const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
});

test("Services Training Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1424']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Services Training Explore Pawlly", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1424']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Services Training Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1424']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Services Training admin panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1424']").click()
    const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
});

test("Services Walking Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1426']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Services Walking Explore Pawlly", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1426']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Services Walking Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1426']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Services Walking admin panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1426']").click()
    const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
});

test("Services DayCare Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1422']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Services DayCare Explore Pawlly", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1422']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Services DayCare Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1422']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Services DayCare admin panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-645']").hover()
    await page.locator("//li[@id='menu-item-1422']").click()
    const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
});