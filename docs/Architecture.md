# Architecture

The site is statically generated using [Gatsby](https://www.gatsbyjs.org/). This uses [React](https://reactjs.org/) to template the site and load data.

## Site map

```
  https://retune.de
    |
    + /                   <-- Site start page
    |
    + /site-visits        <-- All Studio Visits
    |   |
    |   + /:slug          <-- Individual Studio Visit
    |                         e.g. /studio-visit-31/
    |
    + /festivals          <-- All Festivals
    |   |
    |   + /:slug          <-- Individual Festival
    |                         e.g. /festival-2018/
    |
    + /digital-arts-lab   <-- All Digital Arts Labs
    |   |
    |   + /:slug          <-- Individual Digital Arts Lab
    |                         e.g. /festival-2018/
    |
    + /services            <-- All Services
    |
    + /about
    |
    + /imprint
    |
    + /datenschutz
```

## Pages

Pages map directly into URLs on the site. For example, [`../src/pages/studio-visits.js`](../src/pages/studio-visits.js) can be seen at [`https://retune.de/studio-visits`]().

Future events and News items are dynamically created, since they are crated in the CMS.

### News items

News items are fetched from the CMS and a page is automatically created for each item from [`../gatsby-node.js`](../gatsby-node.js) fetches the list of all news posts and [`../src/templates/news.js`](../src/templates/news.js) is the actual page template that fetches the content for the news item page.

Since News items and Future Events are identical in layout, the rendering is handled in the [`../src/components/ItemPage`](../src/components/ItemPage) component.

### Future or past events

Events behave differently depending on whether they're upcoming or in the past.

Future Events display in the same modal-style layout as News items.

[`../gatsby-node.js`](../gatsby-node.js) fetches the list of all the events and then:

- if they're in the past, renders them in the correct page as their type e.g. a `festivals` event will render in [`../src/pages/festivals.js`](../src/pages/festivals.js)
- if they'r in the future, renders them using [`../src/templates/events.js`](../src/templates/events.js)

## Components

The page templates use [React Components](https://reactjs.org/docs/components-and-props.html) to split the page into self-contained chunks. Some components are reused in many pages e.g. [`../src/components/Collapsible`](../src/components/Collapsible) and others are only used in one page e.g. [`../src/components/Intro`](../src/components/Intro).

## Managing page head

To add things to the page `<head>`, try the following:

1. See if there's a [gatsby plugin](https://www.gatsbyjs.org/plugins/) that will do this for you. For example, the matomo scripts are managed by [`gatsby-plugin-matomo`](https://www.gatsbyjs.org/packages/gatsby-plugin-matomo/)
2. [Use Helmet](https://www.gatsbyjs.org/docs/add-page-metadata/#using-react-helmet-and-gatsby-plugin-react-helmet) to add the tags from a Component or a Page. The plugins are already loaded and ready to be used. See [`../src/components/Layout`](../src/components/Layout) for an example.

## CSS and typography

### Global text styles

Text sizes and other global styles are defined in [`../src/components/Layout/index.css`](../src/components/Layout/index.css).

Any class defined in this style is available globally. For exmaple, adding the class name `"mql-m"` will give the element the text size "medium" at the desktop breakpoint.

### Component local styles

Everything else belongs in self-contained component styles. This prevents CSS from one component affecting anything else on the page.

## Images

Images are processed by gatsby from the CMS. This generates low-resolution thumbnails of each image and produces multiple sizes for different browser viewport widths.

The [`../src/components/Image`](../src/components/Image) component is a wrapper around the [`gatsby-image`](https://www.gatsbyjs.org/docs/working-with-images/) component. This handle loading a high-resolution version of the image when it scrolls into view.

## CMS

We currently use [Prismic](https://prismic.io/) as a headless CMS. When the build is run, all the data is fetching from Prismic and the static HTML is rendered for every page. A data view is also produced so that when the initial page is loaded, the browser can just fetch the data instead of all the HTML again.
