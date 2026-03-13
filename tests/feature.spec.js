import { test } from '@playwright/test';
import { AdminPanelVerify, CommonLinkVerify, EnvantoPawllyVerify, TrustpilotVerify } from './common';

const home_url = process.env.HOME_URL;

test.describe("Features", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-643']").hover();
    });

    test.describe("Appointment", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1420']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("Overall Bookings Report", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'Overall Bookings Report')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/feature/reporting-for-pet-care-business/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    test.describe("Employee Management", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1419']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("Employee Mobile App", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'Employee Mobile App')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/product/employee-app/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    test.describe("Payment", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1418']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("financial control", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'financial control')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/feature/financial-transactions-report/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    test.describe("Client Management", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1417']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
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

    test.describe("Event", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1416']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
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

        test("mobile app", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'mobile app')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/product/customer-app/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    test.describe("Blog", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1415']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
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

    test.describe("Notification", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1414']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("mobile app", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'mobile app')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/product/employee-app/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    test.describe("Finances", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1413']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("Employee members' earnings", async ({ page }) => {
            const LinkLocator = page.locator("//body[1]/div[2]/main[1]/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/p[1]/a[1]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/feature/employee-management/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    test.describe("Reporting", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1412']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("Booking Report", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'Booking Report')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/feature/appointment-booking-scheduling/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    test.describe("Powerful Setting Panel", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-1411']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
            const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, Locator);
        });

        test("Trustpilot Verify", async ({ page }) => {
            const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, TrustpilotVerifyLocator);
        });

        test("payment options", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'payment options')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/feature/multiple-payments-options/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });

        test("notification", async ({ page }) => {
            const LinkLocator = page.locator("//a[contains(text(),'notification')]");
            await LinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://pawlly.iqonic.design/feature/real-time-notification/";
            await CommonLinkVerify(page, LinkLocator, expectedLink);
        });
    });

    test.describe("E-Commerce", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-2696']").click();
        });

        test("Buy now", async ({ page }) => {
            const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
            await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
        });

        test("Explore now", async ({ page }) => {
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