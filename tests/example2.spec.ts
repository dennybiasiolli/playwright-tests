import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dennybiasiolli.com/');
  await page.getByRole('button', { name: 'Do not consent' }).click();

  const title = await page.getByRole('heading', { name: 'Denny Biasiolli', exact: true });
  await expect(title).toHaveClass('mb-1');
  const subtitle = await page.getByRole('heading', { name: 'Technology, sports and other amenities' });
  await expect(subtitle).toHaveClass('mb-5');

  const findOutLink = await page.getByRole('link', { name: 'Find Out More' });
  await expect(findOutLink).toHaveClass(/btn-transparent/);
});
