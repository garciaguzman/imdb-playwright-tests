import {Page} from '@playwright/test';

export class SearchResultsPage {
    constructor(private readonly page: Page) {
    }

    async selectMovie(movieTitle: string): Promise<void> {
        await this.page
            .getByRole("link", {name: movieTitle, exact: true})
            .first()
            .click();
    }
}