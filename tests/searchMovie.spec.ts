import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {SearchResultsPage} from '../pages/SearchResultsPage'
import {MovieDetailsPage} from '../pages/MovieDetailsPage'


test.describe('IMDb movie search', () => {
    test('should search for a movie and validate its title', async ({page}) => {
        const movieTitle = "Inception";

        const homePage = new HomePage(page);
        const searchResultsPage = new SearchResultsPage(page);
        const movieDetailsPage = new MovieDetailsPage(page);

        await homePage.goto();

        await homePage.searchForMovie(movieTitle);

        await searchResultsPage.selectMovie(movieTitle);

        await expect(movieDetailsPage.title).toHaveText(movieTitle);
    })
})


