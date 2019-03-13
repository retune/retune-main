# Trigger Build Service

Listens on a port for [Prismic CMS webhooks](https://intercom.help/prismicio/webhooks/webhooks).

Runs with [supervisord on uberspace](https://manual.uberspace.de/en/daemons-supervisord.html).

## Install

1.  Write Travis API token to `trigger-build/retune-travis-api-token.txt`
2.  `cp trigger-build/trigger-build.ini ~/etc/services.d/`
3.  `supervisorctl reread`
4.  `supervisorctl update`

## Check running

Run: `supervisorctl status`
Logs are in ~/log/supervisor.log
