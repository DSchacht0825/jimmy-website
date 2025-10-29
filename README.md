# Maggy Piano Services Website

A modern, artistic website for Jimmy Maggy's piano tuning and restoration services in Cincinnati, Ohio.

## Features

- **Artistic Design**: Clean Helvetica typography with tight letter-spacing
- **Left-Side Navigation**: Vertical navigation that flows artistically down the page
- **Responsive Layout**: Mobile-friendly design that adapts to all screen sizes
- **Hero Background**: Custom imagery as hero section background
- **Sections Include**:
  - Hero section with striking typography
  - About section highlighting Jimmy's Berklee College of Music education
  - Services grid with detailed offerings
  - Comprehensive FAQ section
  - Contact form integrated with Netlify Forms

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deploying to Netlify

### Option 1: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 2: Connect Git Repository

1. Push this code to a GitHub/GitLab/Bitbucket repository
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Netlify will auto-detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Option 3: Drag & Drop

1. Run `npm run build`
2. Go to [Netlify](https://app.netlify.com/drop)
3. Drag the `build` folder to the upload area

## Contact Form

The contact form is configured to work with Netlify Forms automatically. Once deployed on Netlify:
- Form submissions will appear in your Netlify dashboard under "Forms"
- You can configure email notifications in Netlify settings

## Technologies Used

- React 18
- Create React App
- Netlify Forms
- CSS3 with responsive design
- Helvetica Neue typography

## Contact Information

**Phone**: 815-603-9854
**Service Area**: Cincinnati, OH | Northern Kentucky | Southern Indiana

---

Built with artistic flair for a distinguished piano technician.
