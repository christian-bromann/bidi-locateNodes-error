import { browser } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        console.log(
            browser.capabilities.browserName,
            await browser.$(`*`).getTagName()
        );
    })
})

