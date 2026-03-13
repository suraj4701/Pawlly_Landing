import { test } from '@playwright/test';
import { AdminPanelVerify, CommonLinkVerify, EnvantoPawllyVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("Services", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-645']").hover();
    });

    // --- SUB-SECTION: Boarding ---
    test.describe("Boarding", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1421']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore Pawlly", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("create bookings", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'create bookings')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/feature/appointment-booking-scheduling/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    // --- SUB-SECTION: Veterinary ---
    test.describe("Veterinary", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1425']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore Pawlly", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("admin panel", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/product/laravel-admin-panel/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    // --- SUB-SECTION: Grooming ---
    test.describe("Grooming", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1423']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore Pawlly", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("admin panel", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/product/laravel-admin-panel/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    // --- SUB-SECTION: Training ---
    test.describe("Training", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1424']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore Pawlly", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("admin panel", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/product/laravel-admin-panel/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    // --- SUB-SECTION: Walking ---
    test.describe("Walking", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1426']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore Pawlly", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("admin panel", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/product/laravel-admin-panel/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    // --- SUB-SECTION: DayCare ---
    test.describe("DayCare", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1422']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore Pawlly", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("admin panel", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/product/laravel-admin-panel/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });
});