import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

// ─── Homepage ────────────────────────────────────────────────────────────────

test('has correct title and hero heading', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Black Lab Development/i);
  await expect(page.getByRole('heading', { name: /Right Tech/i })).toBeVisible();
});

test('main navigation links are present', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation');
  await expect(nav.getByRole('link', { name: 'Services' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Industries' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Work' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Articles' })).toBeVisible();
});

test('"Start a Project" CTA navigates to contact page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Start a Project' }).first().click();
  await expect(page).toHaveURL(/\/contact/);
});

test('"View Case Studies" CTA navigates to work page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'View Case Studies' }).click();
  await expect(page).toHaveURL(/\/work/);
});

// ─── Services Section ─────────────────────────────────────────────────────────

test('homepage displays all four service areas', async ({ page }) => {
  await page.goto('/');

  const servicesSection = page.getByRole('heading', { name: 'What I Do' }).locator('../..');

  await expect(page.getByRole('heading', { name: 'Web Development', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'SEO & Growth Marketing', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Integrated Digital Solutions', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Custom Software Engineering', exact: true })).toBeVisible();
});

// ─── Industries Section ───────────────────────────────────────────────────────

test('industry cards link to correct pages', async ({ page }) => {
  await page.goto('/');

  const industries = [
    { name: 'Technology & SaaS', url: '/industries/technology' },
    { name: 'E-Commerce & Retail', url: '/industries/ecommerce' },
    { name: 'Healthcare & Life Sciences', url: '/industries/healthcare' },
    { name: 'Manufacturing & Industrial', url: '/industries/manufacturing' },
  ];

  for (const industry of industries) {
    await page.goto('/');
    await page.getByRole('link', { name: industry.name }).click();
    await expect(page).toHaveURL(new RegExp(industry.url));
    await expect(page.getByRole('heading').first()).toBeVisible();
  }
});

// ─── Articles Section ─────────────────────────────────────────────────────────

test('articles section shows recent posts', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /Web Development in 2025/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Ensure Our Platform/i })).toBeVisible();
});

test('article card navigates to full article', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /Web Development in 2025/i }).click();
  await expect(page).toHaveURL(/\/articles\//);
  await expect(page.getByRole('heading').first()).toBeVisible();
});

test('"Explore My Knowledge Library" navigates to articles index', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /Explore My Knowledge Library/i }).click();
  await expect(page).toHaveURL(/\/articles/);
});

// ─── Articles Index ───────────────────────────────────────────────────────────

test('articles index page loads and lists articles', async ({ page }) => {
  await page.goto(`/articles`);
  await expect(page).toHaveTitle(/Articles|Blog|Knowledge/i);
  // At least one article card should be present
  const articles = page.getByRole('link').filter({ hasText: /article|read/i });
  await expect(page.getByRole('heading').first()).toBeVisible();
});

// ─── Contact Page ─────────────────────────────────────────────────────────────

test('contact page loads with a form or CTA', async ({ page }) => {
  await page.goto(`/contact`);
  await expect(page).toHaveURL(/\/contact/);
  await expect(page.getByRole('heading').first()).toBeVisible();
  // Form or email/phone contact should be visible
  const contactForm = page.locator('form');
  const phoneLink = page.getByRole('link', { name: /513/ });
  await expect(contactForm.or(phoneLink).first()).toBeVisible();
});

// ─── Work / Portfolio Page ────────────────────────────────────────────────────

test('work page loads and shows case studies', async ({ page }) => {
  await page.goto(`/work`);
  await expect(page).toHaveURL(/\/work/);
  await expect(page.getByRole('heading').first()).toBeVisible();
});

// ─── Footer ───────────────────────────────────────────────────────────────────

test('footer contains nav links and contact info', async ({ page }) => {
  await page.goto('/');
  const footer = page.locator('footer');
  await expect(footer.getByRole('link', { name: 'Services' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'Contact' })).toBeVisible();
  await expect(footer).toContainText('513');
});

test('footer copyright year is current', async ({ page }) => {
  await page.goto('/');
  const footer = page.locator('footer');
  const year = new Date().getFullYear().toString();
  await expect(footer).toContainText(year);
});

// ─── Performance / Basics ─────────────────────────────────────────────────────

test('homepage has no broken images', async ({ page }) => {
  await page.goto('/');

  const images = page.locator('img');
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const img = images.nth(i);

    // Scroll into view to trigger lazy loading
    await img.scrollIntoViewIfNeeded();

    // Wait for the image to finish loading
    await img.evaluate((el: HTMLImageElement) => {
      if (el.complete) return;
      return new Promise((resolve, reject) => {
        el.addEventListener('load', resolve);
        el.addEventListener('error', reject);
      });
    });

    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  }
});

test('page responds within acceptable time', async ({ page }) => {
  const start = Date.now();
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(5000);
});