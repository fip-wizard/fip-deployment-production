# FIP Wizard Production Deployment Configuration

**‼ More information can be found in the [documentation 📕](https://fip-wizard.readthedocs.org)**

This is an example deployment of FIP Wizard ready for a production usage. It contains preconfigured [Data Stewardship Wizard](https://ds-wizard.org) (DSW) togeher with templates.

If you want to try it on your local machine, please use [the basic deployment configuration](https://github.com/fip-wizard/fip-deployment-basic).

## Instructions

**1. Clone repository**

```
$ git clone https://github.com/fip-wizard/fip-deployment-production
```

**2. Edit configs**

The FIP Wizard is mostly preconfigured. However, there are still some properties that has to be defined. Go through configuration files and find `(!)` with description what to do.

**3. Generate certificates**

For running HTTPS, you need to generate certificates and mount it to the proxy. We recommend to use [Let's encrypt](https://letsencrypt.org/) together with [certbot](https://certbot.eff.org/). You need 2 certificates - for DSW and for DSW API.


**4. Run docker**

```
$ docker-compose up -d
```

**5. Create triple store**

Open AllegroGraph in browser and create `fip` triple store.

**6. Open browser**

- FIP Wizard
  - Default username:`albert.einstein@example.com`
  - Default password `password`.


## Important notes

For more information, see [FIP Wizard Docs](https://fip-wizard.readthedocs.org) and [DSW Docs](https://docs.ds-wizard.org)
