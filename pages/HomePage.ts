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
        const menuButton = this.page.getByRole('button', {
            name: /menu|open navigation drawer/i,
        });

        await menuButton.click();

        await this.page.getByRole('link', {name: /top 250 movies/i}).click();
    }
}
