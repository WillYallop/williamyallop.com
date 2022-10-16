BP Deploy is a simple Wordpress plugin to trigger Bitbucket pipelines. This plugin enables you to trigger a pipeline, view trigger history and configure the target repository, workspace and branch for your pipeline trigger.

## Getting started

- Enable pipelines in you Bitbucket repository!
- Create a pipeline that triggers on a commit to a branch. Bellow is an example.

```yml
pipelines:
  branches:
    master:
      - step:
          script:
            - echo "This script runs only on commit to the main branch."
```

- Create an app password. Navigate to your Bitbucket "Personal settings" and then to the "App passwords" tab. You will need this password later so keep note of it.
- Clone the repository into your Wordpress plugin directory.
- In your wp-config file define the BP_APP_PASSWORD variable for the app password you created in step 3. `define('BP_APP_PASSWORD', 'THE_VALUE');`.
- Activate the plugin, and navigate to its settings tab. Fill in the fields.
- You are ready to trigger deployments.

## Notes

- Uninstalling the plugin will delete the deployment history.
- This plugin only supports pipelines that trigger on commits to a branch.
