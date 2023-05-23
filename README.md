# StackOverflow API Test

## Description

`stackoverflowapi-test` is a test to fetch a list of StackOverflow users by their reputation and display the list on the screen.
It uses TailwindCSS for styling, React 18 and NextJS 13 with Typescript.
It is designed as a progressive web app in mind as it is just an app shell so that it can be easily bridged to Native.

- Offline first with in-memory caching
- Static export with NextJS
- Native support with Capacitor

## 🚀 Quick start

Please use the last version of NodeJS preferrably version 18.

1.  **Install dependencies.**

    Use the version of NodeJS 18+
    Navigate into your project directory and install it.

    ```shell
    # Install with npm
    npm install
    ```

2.  **Start developing.**

    Development mode.
    Use the version of NodeJS 18+
    Navigate into your project directory and run the following command.

    ```shell
    # run the dev server
    npm run start:dev
    ```

3.  **Test the code.**

    ```shell
    # run test cases
    npm run test
    ```

4.  **Build the app and export static site.**

    ```shell
    # build the app
    npm run build
    ```

5.  **Run mobile version with capacitor.**

    You need to first setup your environment.
    https://capacitorjs.com/docs/getting-started/environment-setup

    ```shell
     # build the app
    npm run build
    # run locally with Android Studio
    npx cap open android
    # run locally with XCode
    npx cap open ios
    ```
