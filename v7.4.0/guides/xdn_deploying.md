# Deploying on the Moovweb XDN

Moovweb's XDN is an ultra-fast, scalable, cloud-based platform for hosting modern web applications. The XDN allows you to control powerful caching and routing capbilities at the network edge via JavaScript code.

## Sign up for a free account

To sign up for a free account visit the [Moovweb XDN Developer Console](https://le-deployer-dev.herokuapp.com/login).

## Deploying your site

To deploy your site on the Moovweb XDN, in the root directory of your app, run:

```
npm run build && xdn deploy
```

If you created your app using `create-react-storefront` and answered "yes" to "Will you be deploying your app on the Moovweb XDN?", your project already has an npm script for deploying:

```
npm run deploy
```

Deployment takes about a minute. The first time you deploy it may take up to 15 minutes for the DNS entry for your site to propagate it's way through the internet. The URL for your site will be listed in the terminal output.

By default, the site is deployed to your personal account. To deploy your site to a team, first create the team in the XDN developer console, then deploy using:

```
npm run build && xdn deploy <team-name>
```

Or, using npm:

```
npm run deploy -- <team-name>
```

We recommend adding the team name to the `deploy` script in your package.json so it's done the same way every time:

```js
// package.json
{
  "scripts": {
    "deploy": "npm run build && xdn deploy <team-name>"
  }
}
```

## Deploying changes

Whenever you change your app, simply redeploy using the same commands you used above. The XDN gives each deployment a permanent URL based on the team name, site name, git branch name, and a sequential build number. You can see the full list of deployments in the site view in the XDN Developer Console.
