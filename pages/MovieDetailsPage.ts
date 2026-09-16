import { Locator, Page } from '@playwright/test';

export class MovieDetailsPage{
    readonly title: Locator;

    constructor(private readonly page: Page){
        this.title = page.getByRole('heading', {level: 1});
    }
}
