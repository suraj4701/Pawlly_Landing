import { expect, test } from '@playwright/test';
import { AdminPanelVerify, EmployeeAppAppstore, EmployeeAppPlaystore, EnvantoPawllyVerify, EnvantoVerify, TrustpilotVerify, UserAppAppstore, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("Home Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Home Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("Home User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//a[contains(text(),'User App')]");
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Home Admin Panel Verify", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Home User App Appstore", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppAppstore(page, adminpanelLocator);
})

test("Home User App Playstore 2", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Home Explore", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("Home Employee App Appstore", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppAppstore(page, adminpanelLocator);
})

test("Home Employee App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await EmployeeAppPlaystore(page, adminpanelLocator);
})

test("Home Explore Pawlly for Developer", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[contains(text(),'Explore Pawlly for Developer')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/pet-sitting-software-for-developers/");
});

test("Home Explore Pawlly for Owners", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[contains(text(),'Explore Pawlly for Owners')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/pet-sitting-software-for-business-owners/");
});

test("Home Buy now", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[15]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Buy Service", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/pawlly-flutter-app-with-laravel-backend/");
});

test("Home Buy now 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Buy Pawlly Now", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoPawllyVerify(page, EnvantoKivicareVerifyLocator);
})

test("Facebook link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[1]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.facebook.com/iqonicdesign");
})

test("YouTube link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[2]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/c/IqonicDesign");
})

test("X Twitter link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[3]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://x.com/iqonicdesign");
})

test("Instagram link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[4]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.instagram.com/iqonicdesign/");
})

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://pawlly.iqonic.design/product/laravel-admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/laravel-admin-panel/");
})

test("Home Footer Mobile App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://pawlly.iqonic.design/product/customer-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/customer-app/");
});

test("Home Footer Employee", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://pawlly.iqonic.design/product/employee-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/product/employee-app/");
});

test("Home Footer Boarding", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/service/pet-boarding/");
});

test("Home Footer Veterinary", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/div[1]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/service/pet-veterinary/");
});

test("Home Footer Grooming", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/service/pet-grooming/");
});

test("Home Footer Traning", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/div[1]/div[2]/div[1]/ul[1]/li[4]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/service/pet-training/");
});

test("Home Footer Walking", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/div[1]/div[2]/div[1]/ul[1]/li[5]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/service/pet-walking/");
});

test("Home Footer DayCare", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[3]/div[1]/div[2]/div[1]/ul[1]/li[6]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/service/pet-daycare/");
});

test("Home Footer Docs", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[4]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/documentation/pawlly-doc/build/");
});

test("Home Footer RoadMap", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[4]/div[1]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/roadmap/");
});

test("Home Footer Video", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[4]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])

    await newPage.waitForURL("https://www.youtube.com/watch?v=Yu18kvixk6I")
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/watch?v=Yu18kvixk6I");
});

test("Home Footer FAQ", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[4]/div[1]/div[2]/div[1]/ul[1]/li[4]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/faq/");
});

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[5]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
});

test("Home Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[5]/div[1]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://pawlly.iqonic.design/pricing/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://pawlly.iqonic.design/pricing/");
});

test("Home Footer Get A Quote", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[5]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/cost-calculator/");
});

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[5]/div[1]/div[2]/div[1]/ul[1]/li[4]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.design/licensing-terms-more/");
});

test("Home Footer hire Us", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[5]/div[1]/div[2]/div[1]/ul[1]/li[5]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/");
});

test("Home Footer Iqonic Design", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[contains(text(),'Iqonic Design.')]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://iqonic.design/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://iqonic.design/");
});