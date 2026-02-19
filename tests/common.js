const { expect } = require('@playwright/test');

const TrustpilotVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.trustpilot.com/review/iqonic.design");
    return newPage;
}

const EnvantoVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://codecanyon.net/user/iqonicdesign/portfolio");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'iqonicdesign - Portfolio')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('iqonicdesign - Portfolio');
    return newPage;
}

const UserAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.pawlly.customer");
    const trustpilotLocator = newPage.locator("//body[1]/c-wiz[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/c-wiz[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Pawlly');
    return newPage;
}

const EmployeeAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.pawlly.employee");
    const trustpilotLocator = newPage.locator("//body[1]/c-wiz[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/c-wiz[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Pawlly for Employee');
    return newPage;
}

const AdminPanelVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    await newPage.waitForLoadState('networkidle');
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/pawlly/login");
    return newPage;
}

const UserAppAppstore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.apple.com/us/app/pawlly/id6458044939");
    const trustpilotLocator = newPage.locator("//h1[@class='svelte-1bm25t']");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Pawlly');
    return newPage;
}

const EmployeeAppAppstore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.apple.com/us/app/pawlly-for-employee/id6462849036");
    const trustpilotLocator = newPage.locator("//h1[@class='svelte-1bm25t']");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('Pawlly for Employee');
    return newPage;
}

const EnvantoPawllyVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Pawlly- Multivendor Pet Care Business App in Flutter & Laravel');
    return newPage;
}

const CommonLinkVerify = async (page, locator, link) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe(link);
    return newPage;
}

module.exports = { TrustpilotVerify, EnvantoVerify, UserAppPlaystore, AdminPanelVerify, UserAppAppstore, EmployeeAppAppstore, EmployeeAppPlaystore, EnvantoPawllyVerify, CommonLinkVerify }