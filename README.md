# wch-site-application
Source code for the Watson Content Hub sample site single page application - Oslo. 

## Documentation

See the documentation on developer works how to customize the sample website or creating your own:

[Developing your own website](http://developer.ibm.com/customer-engagement/docs/developing-your-own-website/)

[Managing a web site in Watson Content Hub](https://www.ibm.com/support/knowledgecenter/SS3UMF/dch/admin/website_admin_std.html)

## Getting set up

From you cli make sure to install project dependencies by running `npm install`

### Changing the tenant

You can set the tenant information, by changing the values in `src/app/Constants.ts`.
This file determines from which tenant site and layout information gets served
from.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app
will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in
the `assets/` directory. Use the `-prod` flag for a production build.

## Deployment to Watson Content Hub

Run `npm run deploy` to deploy the built code to Watson Content Hub. There is also a shortcut for building and deploying in one step via `npm run build-deploy`.

## Running unit tests and end-to-end tests

See the included detailed documentation on running tests [Running unit tests and end-to-end tests](RunningTest-README.md) .

## Advanced

### Code scaffolding

To use code scaffolding you will want the Angular CLI with this project. To
install it globally run `npm install -g @angular/cli`.

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|module`.

## License

See the included license file [License](LICENSE) .
