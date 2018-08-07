# Trigger Build Service

Listens on a port for [Cockpit CMS webhooks](https://getcockpit.com/documentation/api/webhooks).

Runs with [supervisord on uberspace](https://manual.uberspace.de/en/daemons-supervisord.html).

## Install

1.  Write Travis API token to `trigger-build/retune-travis-api-token.txt`
2.  `cp trigger-build/trigger-build.ini ~/etc/services.d/`
3.  `supervisorctl reread`
4.  `supervisorctl update`

## Check running

Run: `supervisorctl status`
Logs are in ~/log/supervisor.log

## Available webhooks

See here: https://github.com/agentejo/cockpit/issues/661
