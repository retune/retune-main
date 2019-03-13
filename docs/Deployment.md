# Deployment

As the site is static, it must be re-built to update it. Running a build generates a set of HTML pages and assets that are served from a static web server.

## Automated builds

Travis CI is used to build the site whenever something changes. The output is then SSH copy'd to a web server.

## Github build trigger

Travis integrates with Github so whenever new code is pushed to Github, the site is rebuilt.

## CMS build trigger

To trigger a new build whenever content is changed in the CMS, we make use of [Prismic's web hooks](https://intercom.help/prismicio/webhooks/webhooks). Prismic is configured to `HTTP POST` to a URL whenever something new is published.

We run a tiny API on our web server that listens for the incoming `HTTP POST` from Prismic and then triggers a new build on Travis.

The API is in [../trigger-build].

## Daily build trigger

Parts of the site show date-sensitive content. For example, showing a list of upcoming events.

A [cron job](https://manual.uberspace.de/en/daemons-cron.html) is run daily at midnight Berlin time.

The cron task runs `trigger-build/trigger-build.sh` which hits the web hook service from above.

```sh
crontab -l
@midnight /home/retune/retune-main/trigger-build/trigger-build.sh
```

## Build manually

To build the site locally, run the following command:

    npm run build

Then run a local static web server to view the site:

    npm run serve
