# Event Types

A guide on how to create new event types on the site. This is a bit involved but mainly because adding new event types isn't something that happens very often.

Adding a new type involves:

1. Adding the new `type id` to the `Event` template in the Prismic CMS
2. Adding the type id from Prismic to `gastby-config.js`
3. Create an aggregation page for the new event type
4. Add the event type to the site navigation

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
