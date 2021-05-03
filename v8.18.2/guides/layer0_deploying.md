# Deploying on the Layer0

Layer0 is an ultra-fast, scalable, cloud-based platform for hosting modern web applications. Layer0 allows you to control powerful caching and routing capabilities at the network edge via JavaScript code.

## Sign up for a free account

To sign up for a free account visit the [Layer0 Developer Console](https://app.layer0.co/signup).

## Deploying your site

To deploy your site on the Layer 0, in the root directory of your app, globally install `layer0`.

```
npm i -g @layer0/cli
```

Then, run:

```
layer0 deploy
```

If you created your app using `create-react-storefront` and answered "yes" to "Will you be deploying your app on Layer0?", your project already has an npm script for deploying:

```
npm run deploy
```

Deployment takes about a minute. The first time you deploy it may take up to 15 minutes for the DNS entry for your site to propagate it's way through the internet. The URL for your site will be listed in the terminal output.

By default, the site is deployed to your personal account. To deploy your site to a team, first create the team in the Layer0 developer console, then deploy using:

```
layer0 deploy <team-name>
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
    "deploy": "layer0 deploy <team-name>"
  }
}
```

## Deploying changes

Whenever you change your app, simply redeploy using the same commands you used above. Layer0 gives each deployment a permanent URL based on the team name, site name, git branch name, and a sequential build number. You can see the full list of deployments in the site view in the Layer0 Developer Console.
