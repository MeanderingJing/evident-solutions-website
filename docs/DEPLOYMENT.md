# Deployment Documentation

This document provides comprehensive information about deploying the Evident Solutions website.

## Overview

The website is configured for static export and can be deployed to various hosting platforms. The primary deployment target is GitHub Pages via GitHub Actions.

## Deployment Targets

### 1. GitHub Pages (Primary)

**Status**: ✅ Configured

**Method**: Automated via GitHub Actions

**Workflow**: `.github/workflows/deploy.yml`

#### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save settings

2. **Automatic Deployment**:
   - Push to `main` branch triggers deployment
   - GitHub Actions builds and deploys automatically
   - Site available at: `https://your-username.github.io/evident-solutions-website/`

3. **Manual Deployment**:
   ```bash
   npm run deploy
   ```
   This builds the static site in the `out/` directory.

#### GitHub Actions Workflow

The workflow (`.github/workflows/deploy.yml`) performs:

1. **Build Job**:
   - Checks out code
   - Sets up Node.js
   - Installs dependencies
   - Runs linting
   - Builds static site

2. **Deploy Job**:
   - Uploads build artifacts
   - Deploys to GitHub Pages
   - Only runs on `main` branch

#### Custom Domain Setup

To use a custom domain:

1. **Add CNAME file** to `public/` folder:
   ```
   your-domain.com
   ```

2. **Update DNS**:
   - Add CNAME record: `your-domain.com` → `your-username.github.io`
   - Or add A records for GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Configure in GitHub**:
   - Go to repository Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

4. **Update Next.js Config** (if using subdirectory):
   ```javascript
   // next.config.mjs
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name',
   ```

### 2. Vercel (Alternative)

**Status**: ⚠️ Not configured (requires server features)

**Method**: Connect GitHub repository

**Steps**:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects Next.js
4. Deploy (automatic on every push)

**Note**: Vercel supports full Next.js features (API routes, Server Components, etc.)

### 3. Netlify (Alternative)

**Status**: ⚠️ Not configured

**Method**: Connect GitHub repository

**Steps**:
1. Go to [netlify.com](https://netlify.com)
2. Import your GitHub repository
3. Build command: `npm run build:static`
4. Publish directory: `out`
5. Deploy

### 4. Other Static Hosts

Any static hosting service that supports HTML/CSS/JS:

- **AWS S3 + CloudFront**
- **Azure Static Web Apps**
- **Cloudflare Pages**
- **Firebase Hosting**

## Build Process

### Static Export

The project is configured for static export in `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};
```

### Build Commands

```bash
# Development build
npm run build

# Static export (for GitHub Pages)
npm run build:static

# Production server (requires server)
npm run build && npm run start
```

### Build Output

Static export creates an `out/` directory containing:
- Static HTML files
- CSS and JavaScript bundles
- Public assets
- Font files

## Environment Variables

### Development

Create `.env.local` for local development:

```env
# Example (not currently used)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Production

For GitHub Pages, environment variables are not supported (static export).

For other platforms (Vercel, Netlify), set environment variables in platform settings.

### Security

- **Never commit** `.env.local` to version control
- Use platform-specific environment variable settings for production
- Prefix public variables with `NEXT_PUBLIC_` to expose to client

## Pre-Deployment Checklist

- [ ] All tests passing (`npm run test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Build succeeds (`npm run build:static`)
- [ ] No console errors in browser
- [ ] All pages load correctly
- [ ] Forms work correctly
- [ ] Images load correctly
- [ ] Links work correctly
- [ ] Mobile responsive design verified
- [ ] SEO metadata verified

## Deployment Process

### Automated (GitHub Actions)

1. **Push to main branch**:
   ```bash
   git push origin main
   ```

2. **GitHub Actions runs automatically**:
   - Installs dependencies
   - Runs linting
   - Builds static site
   - Deploys to GitHub Pages

3. **Monitor deployment**:
   - Go to repository → Actions tab
   - Check workflow status
   - View deployment logs if errors occur

### Manual Deployment

1. **Build locally**:
   ```bash
   npm run build:static
   ```

2. **Test locally**:
   ```bash
   # Serve the out directory
   npx serve out
   ```

3. **Deploy**:
   - Upload `out/` directory contents to hosting service
   - Or push to `gh-pages` branch (if using GitHub Pages manually)

## Troubleshooting

### Build Fails

**Issue**: Build fails with errors

**Solutions**:
- Check Node.js version (should be 18.17+)
- Clear `.next` and `node_modules`, reinstall
- Check for TypeScript errors: `npm run build`
- Review error messages in build logs

### Site Not Updating

**Issue**: Changes not reflected after deployment

**Solutions**:
- Clear browser cache
- Check GitHub Actions workflow completed successfully
- Verify changes were pushed to `main` branch
- Wait a few minutes (GitHub Pages can take time to update)

### 404 Errors

**Issue**: Pages return 404

**Solutions**:
- Verify `basePath` and `assetPrefix` are correct (if using subdirectory)
- Check that all routes have `page.tsx` files
- Verify static export completed successfully
- Check hosting service routing configuration

### Images Not Loading

**Issue**: Images don't display

**Solutions**:
- Verify `images.unoptimized: true` in `next.config.mjs`
- Check image paths are correct
- Ensure images are in `public/` directory
- Verify image file extensions are supported

### Forms Not Working

**Issue**: Contact form doesn't submit

**Solutions**:
- Check Server Actions are properly configured
- Verify form validation is working
- Check browser console for errors
- Test Server Actions locally

### Performance Issues

**Issue**: Site loads slowly

**Solutions**:
- Optimize images (compress, use WebP)
- Check bundle size (use `npm run build` to see sizes)
- Enable CDN if available
- Check network tab in browser DevTools

## CI/CD Pipeline

### GitHub Actions Workflow

The workflow runs on:
- Push to `main` branch
- Pull requests to `main` branch

**Workflow Steps**:
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Run linting
5. Build static site
6. Deploy to GitHub Pages (only on `main`)

### Customizing the Workflow

Edit `.github/workflows/deploy.yml` to:
- Add additional build steps
- Run tests before deployment
- Deploy to multiple environments
- Add notifications

## Monitoring

### After Deployment

1. **Check site is live**: Visit the deployed URL
2. **Test all pages**: Navigate through all routes
3. **Test forms**: Submit contact form
4. **Check mobile**: Test on mobile devices
5. **Check SEO**: Verify metadata in page source

### Analytics (Future)

Consider adding:
- Google Analytics
- Vercel Analytics
- Custom analytics solution

## Rollback

If deployment fails or issues are found:

1. **GitHub Pages**: Revert to previous commit
2. **Manual**: Rebuild and redeploy previous version
3. **Git**: Use `git revert` to undo changes

## Best Practices

1. **Test before deploying**: Always test locally first
2. **Use feature branches**: Don't deploy directly to `main`
3. **Review changes**: Use pull requests for code review
4. **Monitor deployments**: Check deployment status
5. **Keep dependencies updated**: Regularly update packages
6. **Document changes**: Update documentation with new features

## Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Netlify Deployment Guide](https://docs.netlify.com/)

