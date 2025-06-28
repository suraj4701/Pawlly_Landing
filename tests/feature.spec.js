import { expect, test } from '@playwright/test';
import { AdminPanelVerify, EnvantoPawllyVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("Features Appointment Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1420']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Appointment Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1420']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Appointment Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1420']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Appointment Overall Bookings Report", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1420']").click()
    const LinkLocator = page.locator("//a[contains(text(),'Overall Bookings Report')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/feature/reporting-for-pet-care-business/");
});

test("Features Employee Management Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1419']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Employee Management Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1419']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Employee Management Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1419']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Employee Management Employee Mobile App", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1419']").click()
    const LinkLocator = page.locator("//a[contains(text(),'Employee Mobile App')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/employee-app/");
});

test("Features Payment Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1418']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Payment Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1418']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Payment Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1418']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Payment financial control", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1418']").click()
    const LinkLocator = page.locator("//a[contains(text(),'financial control')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/feature/financial-transactions-report/");
});

test("Features Client Management Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1417']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Client Management Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1417']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Client Management Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1417']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Client Management admin panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1417']").click()
    const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
});

test("Features Event Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1416']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Event Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1416']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Event Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1416']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Event admin panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1416']").click()
    const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
});

test("Features Event  mobile app", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1416']").click()
    const LinkLocator = page.locator("//a[contains(text(),'mobile app')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/customer-app/");
});

test("Features Blog Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1415']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Blog Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1415']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Blog Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1415']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Blog admin panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1415']").click()
    const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
});

test("Features Notification Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1414']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Notification Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1414']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Notification Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1414']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Notification mobile app", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1414']").click()
    const LinkLocator = page.locator("//a[contains(text(),'mobile app')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/employee-app/");
});

test("Features Finances Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1413']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Finances Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1413']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Finances Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1413']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Finances Employee members' earnings", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1413']").click()
    const LinkLocator = page.locator("//body[1]/div[2]/main[1]/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/p[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/feature/employee-management/");
});

test("Features Reporting Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1412']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Reporting Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1412']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Reporting Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1412']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Reporting Booking Report", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1412']").click()
    const LinkLocator = page.locator("//a[contains(text(),'Booking Report')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/feature/appointment-booking-scheduling/");
});

test("Features Powerful Setting Panel Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1411']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features Powerful Setting Panel Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1411']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features Powerful Setting Panel Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1411']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features Powerful Setting Panel payment options", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1411']").click()
    const LinkLocator = page.locator("//a[contains(text(),'payment options')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/feature/multiple-payments-options/");
});

test("Features Powerful Setting Panel notification", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-1411']").click()
    const LinkLocator = page.locator("//a[contains(text(),'notification')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/feature/real-time-notification/");
});

test("Features E-Commerce Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-2696']").click()
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Features E-Commerce Explore now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-2696']").click()
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Features E-Commerce Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-2696']").click()
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Features E-Commerce admin panel", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-643']").hover()
    await page.locator("//li[@id='menu-item-2696']").click()
    const LinkLocator = page.locator("//a[contains(text(),'admin panel')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
});