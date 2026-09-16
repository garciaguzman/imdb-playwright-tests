import {Page} from '@playwright/test';

export class HomePage {
    constructor(private readonly page: Page) {
    }

    async goto(): Promise<void> {
        await this.page.goto('/');
    }

    async searchForMovie(movieTitle: string): Promise<void> {
        const searchBox = this.page.getByPlaceholder('Search IMDb');

        await searchBox.fill(movieTitle);
        await searchBox.press('Enter');
    }

    async navigateToTop250(): Promise<void> {
        const menuButton = this.page.getByLabel('Open navigation drawer');

        await menuButton.click();

        await this.page
            .getByText('Top 250 movies', {exact: true})
            .click();
    }
}
