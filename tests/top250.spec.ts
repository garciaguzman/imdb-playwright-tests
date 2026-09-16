import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {Top250Page} from '../pages/Top250Page';
import {MovieDetailsPage} from '../pages/MovieDetailsPage';

test.describe('IMDb Top 250 Movies', () => {
    test('should open the first movie and validate its details', async ({page}) => {
        const homePage = new HomePage(page);
        const top250Page = new Top250Page(page);
        const movieDetailsPage = new MovieDetailsPage(page);

        await homePage.goto();

        await homePage.navigateToTop250();

        await top250Page.validatePageLoaded();

        await top250Page.selectFirstMovie();

        await expect(movieDetailsPage.title).toBeVisible();

        await expect(movieDetailsPage.rating).toBeVisible();

        await expect(movieDetailsPage.releaseYear).toBeVisible();
    })
})

