# FIP Wizard Basic Deployment Configuration

**‼ More information can be found in the [documentation 📕](https://fip-wizard.readthedocs.org)**

This is an example deployment of FIP Wizard ready for a usage on a local machine. It contains preconfigured [Data Stewardship Wizard](https://ds-wizard.org) (DSW) togeher with templates.

If you want to run it in production, please use [the production deployment configuration](https://github.com/fip-wizard/fip-deployment-production).

## Instructions

**1. Clone repository**

```
$ git clone https://github.com/fip-wizard/fip-deployment-basic
```

**2. Edit configs**

The FIP Wizard is mostly preconfigured. However, there are still some properties that has to be defined. Go through configuration files and find `(!)` with description what to do.

**3. Run docker**

```
$ docker-compose up -d
```

**4. Open browser**

- FIP Wizard
  - Default username:`albert.einstein@example.com`
  - Default password `password`.


## Important notes

For more information, see [FIP Wizard Docs](https://fip-wizard.readthedocs.org) and [DSW Docs](https://docs.ds-wizard.org)
