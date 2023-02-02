# Instructions

- Setup new mysql database
- copy paste `.env.example` into `.env` and update the database values
- run `nvm use`, this will look inside the .nvmrc file and use the appropriate nodejs version
- run `npm i`, this will install dependencies
- run `npm run develop`, this will populate the database with the appropriate schema as defined in `/src` which is automatically generated when admin users create content types within the UI

### CMS customisations

Strapi offers some limited customisations to be made via config changes within `/src/admin/app.js` e.g. changing text and logos. However more granular customisation are currently not possible. We therefore need to patch the relevant files within `node_modulas` if we want to make these granular customisations. This approach is not ideal but is currently the only option, see here for details: https://forum.strapi.io/t/customize-the-dashboard-welcome-page/939/21.

If further customisations are required:
1. Go into the relevant file and makes changes, the relevant files will likely be in `/node_modules/@strapi/admin/admin/src/pages`
1. Then run `npm run generate-admin-patches`, this will generate the relevant patch files in `/patches`

We can then apply these patches, for example if we update strapi or when packages are initially installed packages, by running `npm run apply-admin-patches`.

<br>
<br>
<br>
<br>
<br>
<br>

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
