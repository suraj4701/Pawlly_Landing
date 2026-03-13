import { test } from '@playwright/test';
import { CommonLinkVerify, TrustpilotVerify, UserAppAppstore, UserAppPlaystore } from './common';

const home_url = process.env.HOME_URL;

test.describe("Why Different", () => {

    // Common navigation for the entire Why Different menu
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-635']").hover();
    });

    // --- SUB-SECTION: For Developers ---
    test.describe("For Developers", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1431']").click();
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("Flutter Apps", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'Flutter Apps')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/product/customer-app/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });

        test("User App Playstore", async ({ page }) => {
            const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await adminpanelLocator.scrollIntoViewIfNeeded();
            await UserAppPlaystore(page, adminpanelLocator);
        });

        test("User App Appstore", async ({ page }) => {
            const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]");
            await adminpanelLocator.scrollIntoViewIfNeeded();
            await UserAppAppstore(page, adminpanelLocator);
        });

        test("custom development services", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'custom development services')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://iqonic.tech/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });

        test("tech support", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'tech support')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://iqonic.desky.support/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    // --- SUB-SECTION: For Business Owner ---
    test.describe("For Business Owner", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1430']").click();
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("Price", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'price')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/pricing/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });

        test("top-notch support", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'top-notch support')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://iqonic.desky.support/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });

        test("custom development services", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'custom development services')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://service.iqonic.design/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });
});