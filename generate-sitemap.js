import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

// Define your static routes manually
const staticPages = [
  '',
  'about',
  'projects',
  'blog',
  'contact',
  'sitemap',
  'legal',
];

// Mock data for dynamic routes (In a real app, fetch this from your data source)
// You should mirror the slugs from src/data/mockData.ts
const blogSlugs = [
  'build-collaborative-filtering-recommendation-system-python',
  'integrating-generative-ai-top-3-pre-trained-models-react',
  'modern-etl-pipelines-architecting-data-flows-ai-analytics',
  'rest-vs-graphql-2025-performance-caching',
  'ci-cd-beginners-deploy-production-github-actions',
  'api-versioning-strategies-uri-vs-header',
  '5-critical-database-design-mistakes-scaling-startups',
  'docker-compose-guide-setup-full-stack-dev-environment',
  'mastering-environment-variables-security-guide-node-js',
  'advanced-sql-data-analysis-5-queries-developer-needs'
];

async function generate() {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((route) => {
          return `
            <url>
              <loc>${`https://temitopeagbola.com/${route}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${route === '' ? 1.0 : 0.8}</priority>
            </url>
          `;
        })
        .join('')}
      ${blogSlugs
        .map((slug) => {
          return `
            <url>
              <loc>${`https://temitopeagbola.com/blog/${slug}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formatted = await prettier.format(sitemap, {
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
  console.log('✅ sitemap.xml generated!');
}

generate();