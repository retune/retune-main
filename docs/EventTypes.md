# Event Types

A guide on how to create new event types on the site. This is a bit involved but mainly because adding new event types isn't something that happens very often.

Adding a new type involves:

1. Adding the new `type id` to the `Event` template in the Prismic CMS
2. Adding the type id from Prismic to `gastby-config.js`
3. Create an aggregation page for the new event type
4. Add the event type to the site navigation

If the aggregation page requires seperate info, then also:

5. Create page-specific info template in Prismic CMS
6. Populate template with content
7. Fetch data for page in aggregation page

## 1. Adding the new `type id` to the `Event` template in the Prismic CMS

1. Visit [the Prismic event configuration](https://retune-main.prismic.io/masks/events.json/)
2. Click the gear icon next to the `type` field
3. Add the new type id in the "Options (Define one option per line)" on a new line

Note: the Event ID should be lowercase, should not have spaces, but might be separated by hyphens e.g. `studio-visit`

4. Click the "OK"
5. "Save" the template

## 2. Adding the type id from Prismic to `gastby-config.js`

Add a new block to the `eventTypes` object in the `gatsby-config.js`.

The format is:

```js
  eventTypes: {
    id: {
      label: 'Singular Label',
      plural: 'Plural Labels',
      urlPath: 'used-in-urls',
    },
  },
```

For example, a new type called `digital-arts-lab` added to Prismic might have the following config:

```js
  eventTypes: {
    'digital-arts-lab': {
      label: 'Digital Arts Lab',
      plural: 'Digital Arts Labs',
      urlPath: 'digital-arts-lab',
    },
  },
```

Once published, it's important that the urlPath is not changed as it will break existing web links for those content items.

## 3. Create an aggregation page for the new event type

Copy one of the existing aggregation pages (`pages/studio-visits.js` or `pages/festivals.js`). The page should be named the same as the URL path in the config.

The template should be customised to fit the new event type. At a minimum:

- change the GraphQL query to filter on events with the new ID e.g. from:

  ```
  filter: { data: { type: { eq: "festival" } } }
  ```

  to:

  ```
  filter: { data: { type: { eq: "digital-arts-lab" } } }
  ```

- fetch page data from a different

## 4. Add the event type to the site navigation

In [`../src/components/Navigation/Navigation.js`]().

## 5. Create page-specific info template in Prismic CMS

1. [Visit Custom Type list in Prismic CMS](https://retune-main.prismic.io/masks/)
2. Press "Create new" button
3. Select "Single Type"
4. Enter a type name (camelCase the ID plus "Page" e.g. `digitalArtsLabPage`)
5. "Create new custom type"
6. Drag "Rich Text" field into "Main"
7. Field name: `info`
8. API ID: `info`
9. Click "Unselect All" above HTML tag buttons
10. Select "p" tag button
11. Click "OK"
12. "Save" custom type

## 6. Populate template with content

1. [Visit the Prismic content page](https://retune-main.prismic.io/documents/working/)
2. Select the custom type you created in the list e.g. `digitalArtsLabPage`
3. Enter the content
4. Save
5. Publish
6. Publish now

## 7. Fetch data for page in aggregation page

Tweak the GraphQL on the page to fetch the data. The ID of the page will have a capital first letter and the rest will be lowercase 🙃 e.g. `digitalArtsLabPage` will become `Digitalartslabpage`:

```
page: allPrismicDigitalartslabpage {
  edges {
    node {
      id
      data {
        info {
          html
        }
      }
    }
  }
}
```
