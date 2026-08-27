import { test, expect } from '@playwright/test';

// ─── Homepage ────────────────────────────────────────────────────────────────

test('has correct title and hero heading', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Black Lab Dev/i);
  await expect(page.getByRole('heading', { name: /Real Lessons from Real/i })).toBeVisible();
});

test('main navigation links are present', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Primary navigation' });
  await expect(nav.getByRole('link', { name: 'What We Build' })).toBeVisible();
  await expect(nav.getByRole('link', { name: "Who It's For" })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Our Work' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Insights' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'About' })).toBeVisible();
});

test('"Explore All Insights" CTA navigates to articles', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Explore All Insights' }).click();
  await expect(page).toHaveURL(/\/articles/);
});

test('"Get in Touch" CTA navigates to contact page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Get in Touch' }).click();
  await expect(page).toHaveURL(/\/contact/);
});

test('"Our Work" nav link navigates to case studies', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Primary navigation' });
  await nav.getByRole('link', { name: 'Our Work' }).click();
  await expect(page).toHaveURL(/\/case-studies/);
  await expect(page.getByRole('heading').first()).toBeVisible();
});

test('homepage featured article card navigates to the article', async ({ page }) => {
  await page.goto('/');
  const featured = page.locator('a[href^="/articles/"]').first();
  await expect(featured).toBeVisible();
  await featured.click();
  await expect(page).toHaveURL(/\/articles\/.+/);
  await expect(page.getByRole('heading').first()).toBeVisible();
});

// ─── Legacy / redirects ────────────────────────────────────────────────────────

test('/work redirects to /case-studies', async ({ page }) => {
  await page.goto('/work');
  await expect(page).toHaveURL(/\/case-studies/);
});

test('/services/b2b-website-design redirects to the small business service page', async ({ page }) => {
  await page.goto('/services/b2b-website-design');
  await expect(page).toHaveURL(/\/services\/small-business-website-design/);
});

test('/services/manufacturing-website-design redirects to /partners', async ({ page }) => {
  await page.goto('/services/manufacturing-website-design');
  await expect(page).toHaveURL(/\/partners/);
});

// ─── Services & Industries ─────────────────────────────────────────────────────

test('"What We Build" nav link navigates to services', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Primary navigation' });
  await nav.getByRole('link', { name: 'What We Build' }).click();
  await expect(page).toHaveURL(/\/services/);
  await expect(page.getByRole('heading').first()).toBeVisible();
});

test('"Who It\'s For" nav link navigates to industries', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Primary navigation' });
  await nav.getByRole('link', { name: "Who It's For" }).click();
  await expect(page).toHaveURL(/\/industries/);
  await expect(page.getByRole('heading').first()).toBeVisible();
});

test('industry pages load with correct titles', async ({ page }) => {
  const industries = [
    { url: '/industries/manufacturing', name: /Manufacturing/i },
    { url: '/industries/ecommerce', name: /Ecommerce/i },
    { url: '/industries/healthcare', name: /Healthcare/i },
    { url: '/industries/technology', name: /SaaS|Technology/i },
    { url: '/industries/professional-services', name: /Professional Services/i },
    { url: '/industries/education', name: /Education/i },
  ];

  for (const industry of industries) {
    await page.goto(industry.url);
    await expect(page).toHaveTitle(industry.name);
    await expect(page.getByRole('heading').first()).toBeVisible();
  }
});

// ─── Partner & Service Pages ──────────────────────────────────────────────────

test('service and partner pages load with correct titles', async ({ page }) => {
  const pages = [
    { url: '/services/small-business-website-design', name: /Small Business Website Design/i },
    { url: '/partners', name: /White-Label Web Development/i },
    { url: '/partners/white-label-web-development', name: /White-Label Web Development/i },
    { url: '/partners/seo-fulfillment', name: /Technical SEO Fulfillment/i },
  ];

  for (const target of pages) {
    await page.goto(target.url);
    await expect(page).toHaveTitle(target.name);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
});

test('"Partners" nav link navigates to the partners page', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Primary navigation' });
  await nav.getByRole('link', { name: 'Partners' }).click();
  await expect(page).toHaveURL(/\/partners/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

// ─── Articles Section ─────────────────────────────────────────────────────────

test('articles index page loads and lists articles', async ({ page }) => {
  await page.goto('/articles');
  await expect(page).toHaveTitle(/Articles/i);
  await expect(page.getByRole('heading').first()).toBeVisible();
  await expect(page.locator('a[href^="/articles/"]').first()).toBeVisible();
});

test('article card navigates to full article', async ({ page }) => {
  await page.goto('/articles');
  const firstArticle = page.locator('a[href^="/articles/"]').first();
  await firstArticle.click();
  await expect(page).toHaveURL(/\/articles\/.+/);
  await expect(page.getByRole('heading').first()).toBeVisible();
});

// ─── Contact Page ─────────────────────────────────────────────────────────────

test('contact page loads with a form or CTA', async ({ page }) => {
  await page.goto('/contact');
  await expect(page).toHaveURL(/\/contact/);
  await expect(page.getByRole('heading').first()).toBeVisible();
  const contactForm = page.locator('form');
  const phoneLink = page.getByRole('link', { name: /513/ });
  await expect(contactForm.or(phoneLink).first()).toBeVisible();
});

// ─── Work / Case Studies Page ──────────────────────────────────────────────────

test('case studies page loads and shows past work', async ({ page }) => {
  await page.goto('/case-studies');
  await expect(page).toHaveURL(/\/case-studies/);
  await expect(page.getByRole('heading').first()).toBeVisible();
  await expect(page.getByText('Globe Iron Roofing')).toBeVisible();
});

// ─── Footer ───────────────────────────────────────────────────────────────────

test('footer contains nav links and contact info', async ({ page }) => {
  await page.goto('/');
  const footer = page.locator('footer');
  await expect(footer.getByRole('link', { name: 'Case Studies' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'Schedule a Call' })).toBeVisible();
  await expect(footer).toContainText('513');
});

test('footer copyright year is current', async ({ page }) => {
  await page.goto('/');
  const footer = page.locator('footer');
  const year = new Date().getFullYear().toString();
  await expect(footer).toContainText(year);
});

// ─── SEO / Metadata regression ─────────────────────────────────────────────────

test('page titles do not double up the trailing brand suffix', async ({ page }) => {
  const pages = ['/', '/services', '/services/small-business-website-design', '/partners', '/partners/white-label-web-development', '/partners/seo-fulfillment', '/industries', '/case-studies', '/articles', '/contact', '/about', '/privacy', '/terms', '/cookies', '/cincinnati-web-developer'];
  for (const url of pages) {
    await page.goto(url);
    const title = await page.title();
    expect(title, `${url} title was: "${title}"`).not.toMatch(/Black Lab Dev(elopment)? \| Black Lab Dev\s*$/i);
  }
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
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(5000);
});
