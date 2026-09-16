import {Locator, Page} from '@playwright/test';

export class MovieDetailsPage {
    readonly title: Locator;
    readonly rating: Locator;
    readonly releaseYear: Locator;

    constructor(private readonly page: Page) {
        this.title = page.getByRole('heading', {level: 1});

        this.rating = page.getByText(/^\d+(\.\d+)?\/10$/).first();

        this.releaseYear = page.getByRole('Link', {name: /^\d{4}$/}).first();
    }
}
