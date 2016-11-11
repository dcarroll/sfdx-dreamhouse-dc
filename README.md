# SFDX Dreamhouse App

## Salesforce DX Quick Start

> **Important:** Salesforce DX is available as a developer preview. Salesforce DX isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don't implement functionality developed with these commands or tools.</td>

The Salesforce Developer Experience (SFDX) starts with source code living in your version control system (VCS). It doesn’t matter which VCS you use, only that you use one. In this quick start, we’ll assume you’re using Git and Github, as this is where we’ve stored the Dreamforce ’16 Developer Keynote sample application, called the DreamHouse app, which we will use for this quick start.

## Set Up the Developer Workspace

Our first goal is to set up a developer workspace for us to use to modify our application. It starts by cloning the repository. Use the command ...

    git clone https://github.com/forcedotcom/sfdx-dreamhouse.git

… or ...

    git clone git@github.com:forcedotcom/sfdx-dreamhouse.git

… to clone the repository. Then, open the directory.

    cd sfdx-dreamhouse

![image](https://cloud.githubusercontent.com/assets/746259/19616507/52c78698-97c9-11e6-8671-eba4c8bae9d5.png)

Cloning the repository pulls all the source code to the local filesystem. Before you start editing, though, you’ll want to check out your own branch. This is a best practice as defined by [Github Flow](https://guides.github.com/introduction/flow/).

    git checkout -b wadebranch

Now you’re working in your own branch, making it easier to submit updates to your team later on.

In SFDX we provide a comprehensive set of capabilities through our new command-line interface, which is shipped as a Heroku plugin. You can take a look at all of the available commands by typing `heroku force --help`.

![image](https://cloud.githubusercontent.com/assets/746259/19616512/78c36060-97c9-11e6-9983-1a655a733a9d.png)

## Authorize the Environment Hub

To try out our application, we’ll first have to authorize with our environment hub. The environment hub provides a place to create and attach all of the orgs we’ll use throughout the full development lifecycle – not only scratch orgs, but also sandbox and production environments.

There are two ways to authorize with the environment hub – using a traditional OAuth Web Server flow, where the user interactively logs in through a browser, or the JWT OAuth flow, in which you can use certificates to facilitate non-interactive logins. The latter is particularly useful for automated processes that are not able to interactively log in. For this document, we will use the OAuth Web Server flow and interactive login to the org.

To authorize, start with the CLI:

    heroku force:org:authorize

A web-browser will open, allowing you to log in:

![image_2](https://cloud.githubusercontent.com/assets/746259/19540589/75df7560-9615-11e6-84d2-521997e0a7a8.png)

You’ll next need to authorize the SFDX "Global Connected App".

![image_3](https://cloud.githubusercontent.com/assets/746259/19540593/75e27134-9615-11e6-8299-c215ae38a334.png)

Once logged in, the CLI has been authorized.

![image](https://cloud.githubusercontent.com/assets/746259/19616515/9ded635e-97c9-11e6-900e-cc6acf9d92ba.png)

From here, you’ll authorized to interact with the hub org.

## Create a Workspace Scratch Org

Next step is to create a scratch org we can use during development. The scratch org is also created through the CLI, using a config file. The DreamHouse App repository provides a few example config files. If you type cat config/workspace-scratch-def.json you can see some of the options available:

```
{
  "Company": "ACME Org",
  "Country": "US",
  "LastName": "Your Last Name",
  "SignupEmail": "your@email.com",
  "Edition": "Enterprise",
  "OrgPreferences" : {
     "S1DesktopEnabled" : true,
     "ChatterEnabled" ": false
  }
}
```

To create the scratch org, type the following command in the CLI:

    heroku force:org:create --file config/workspace-scratch-def.json

In less than a minute, the command should complete. You’ll get two items in the output: the Org ID and the username.

![image](https://cloud.githubusercontent.com/assets/746259/19616524/d8c4573a-97c9-11e6-9ced-2ab8bf83ae35.png)

Notice that we didn’t get a password. Given that we can type the command heroku force:org:open, which uses the Salesforce front door to automatically login with a cached authentication token, there’s no explicit need for us to know the password. Of course, we can use --password to pass in a known password if required.

At this point we have a brand new, empty, scratch org. We need to populate it with the source we first pulled out of Github. For this, we’ll use the source synchronization APIs, also available in the CLI.

## Push Source Metadata to Scratch Org

To push all the local source into the scratch org, type the command: heroku force:src:push. It will take a few moments, but quickly all the metadata will be pushed into the scratch org.

![image](https://cloud.githubusercontent.com/assets/746259/19616528/196668e6-97ca-11e6-900b-d63cbad55306.png)

## Assign a Permset to the DreamHouse App

At this point we’re close to being able to run the DreamHouse app. But, the DreamHouse app uses a permission set to provide access to the app. You can see this in the source that was pushed into the org. Before we can access the app, we need to assign that permset using the CLI:

    heroku force:permset:assign -n DreamHouse

![image](https://cloud.githubusercontent.com/assets/746259/19616529/3cee3046-97ca-11e6-8125-18643db2ab50.png)

## Import Test Data

Lastly, we don’t have any of the DreamHouse app data in the org. But we do have sample data in our repository. Using the CLI, we can use the SObject Tree API to import this data into the org.

    heroku force:data:import --plan data/sample-data-plan.json

![image](https://cloud.githubusercontent.com/assets/746259/19616537/5b1ee268-97ca-11e6-8533-938e1fde73e1.png)

Now we’ve fully setup and configured our developer workspace. We’re ready to begin development.

## Open the WorkSpace Scratch Org

We can try out the application by opening our scratch org: `heroku force:org:open`. Notice you won’t have to log in!

To open the DreamHouse app, click the App Launcher and then click DreamHouse:

![image_9](https://cloud.githubusercontent.com/assets/746259/19540595/75f33442-9615-11e6-87ad-1557af9d9709.png)

The app will re-launch to the DreamHouse app. Congratulations, you’ve just setup the application in a branch new scratch org.

## Modify the Application in the Force.com IDE 2

The next step is to modify our application, and to do this all we need is a text editor. It could be VIM, Sublime, Atom, or even Notepad. You can also use our updated Force.com IDE (also called Force.com IDE 2).

When you first open the IDE, you need to connect it to your local Git repository. Select the Git Repositories tab …

![image_10](https://cloud.githubusercontent.com/assets/746259/19540598/75f747da-9615-11e6-9f8c-274032728a15.png)

… and click "Add an existing local Git repository." Browse to your Git repository, select the result, and finish.

![image_11](https://cloud.githubusercontent.com/assets/746259/19540600/75f7e0fa-9615-11e6-854a-559e7ddf90c4.png)

Given we have already added an Eclipse project definition, we need to tell Eclipse to load the project. Right-click the repository and select "Import Projects…"

![image_12](https://cloud.githubusercontent.com/assets/746259/19540596/75f4a00c-9615-11e6-9e42-dc996394978d.png)

Click through the wizard, and then switch to the Project Explorer. You’ll see your project.

![image_13](https://cloud.githubusercontent.com/assets/746259/19540599/75f76c24-9615-11e6-9ab6-5742956f2bff.png)

You’re now able to use Eclipse to update your project and it’s fully integrated into the Git repository.

## Test the Application Using the Test Runner

Now, at this point we could push this back into source control. But first, let’s ensure all our unit tests pass. For this, we’ll use the new test runner that’s integrated into the CLI.

    heroku force:test --config test/test-runner-config.json --profile local

This command will run the local profile that’s specified in the test runner config. By default, this is setup to run all our Apex tests and Selenium tests. All the Selenium jars and binaries will get downloaded as part of the execution of the test runner.

## More to Come

Soon we'll add the following to this quick start:

* Details on setting up Heroku Pipelines
* Details on setting up Heroku CI
* Process for kicking off Continuous Integration and Continuous Delivery with Heroku Flow

## Resources

For details on using sfdx-dreamhouse, please review the [Salesforce DX Developer Guide](https://goo.gl/L0uHFf).

## Issues

Please log issues related to this repository [here](https://github.com/forcedotcom/sfdx-dreamhouse/issues).
