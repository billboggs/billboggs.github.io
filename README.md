# Bill Boggs - Personal Website

This is my personal portfolio written with React + [Mantine Component Libary](https://mantine.dev) and Typescript. It's currently being deployed to my [Github Pages site](https://billboggs.github.io) using Github Actions.

## Installing and running

```
npm install
npm run dev
```

## Structure

I'm currently using react router which serves the components from [src/views](src/views). All of the components within the `views` directory will need to be wrapped in a [Layout](src/components/Layout/Layout.tsx) component if they would like to utilize the header.
