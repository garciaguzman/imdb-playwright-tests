import {expect, Page} from '@playwright/test';

export class Top250Page {
    constructor(private readonly page: Page) {
    }

    async validatePageLoaded(): Promise<void> {
        await expect(
            this.page.getByRole('heading', {
                name: /IMDb Top 250 Movies/i,
            })
        ).toBeVisible();
    }

    async selectFirstMovie() {
        const firstMovie = this.page
            .locator('h4.ipc-title__text')
            .first();

        await firstMovie.click();
    }
}
