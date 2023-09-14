# React (with vite and typescript)

![React (with vite and typescript)](https://user-images.githubusercontent.com/698079/267819735-fee06b8e-e6a1-4f25-b4be-95524968e6ed.png)

I have been using Next.js since 2018 in production. However, I am annoyed with their ever-growing do everything bs. So, I created this simple React application template that supports:

* Server side and client side rendering, as well as static site generation (a.k.a. pre-rendering)
* File-based routing (nested)

A React app template to help you get started with [React](https://react.dev) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org).

## Getting started

```shell
$ git clone https://github.com/th0th/react-vite-ts.git
$ cd react-vite-ts
$ pnpm install
$ pnpm run dev
```

## Running

### Development

Vite support Hot Module Reloading (HMR) out of the box.

1. Install dependencies

   ```shell
   $ pnpm install
   ```

2. Run development server

   ```shell
   $ pnpm run dev
   ```

   Then the application should be accessible on [http://localhost:5173](http://localhost:5173).


### Production

You have 3 choices for running the application in production environment.

1. Server side rendering

   ```shell
   $ pnpm install
   $ pnpm run build
   $ pnpm run serve
   ```
   
2. Client side rendering

   ```shell
   $ pnpm install
   $ pnpm run build:client
   ```
   
   Then you can use any kind of web hosting service, and upload the contents of the `dist/client` directory.

3. Static site

   ```shell
   $ pnpm install
   $ pnpm run generate
   ```
   
   Then again, you can use any kind of web hosting service, and upload the contents of the `dist/static` this time.

## Shameless plug

I am an indie hacker, and I am running two services that might be useful for your business. Check them out :)

### WebGazer

[<img alt="WebGazer" src="https://user-images.githubusercontent.com/698079/162474223-f7e819c4-4421-4715-b8a2-819583550036.png" width="256" />](https://www.webgazer.io/?utm_source=github&utm_campaign=react-vite-ts-readme)

[WebGazer](https://www.webgazer.io/?utm_source=github&utm_campaign=react-vite-ts-readme) is a monitoring service that checks your website, cron jobs, or scheduled tasks on a regular basis. It notifies
you with instant alerts in case of a problem. That way, you have peace of mind about the status of your service without
manually checking it.

### PoeticMetric

[<img alt="PoeticMetric" src="https://user-images.githubusercontent.com/698079/162474946-7c4565ba-5097-4a42-8821-d087e6f56a5d.png" width="256" />](https://www.poeticmetric.com/?utm_source=github&utm_campaign=react-vite-ts-readme)

[PoeticMetric](https://www.poeticmetric.com/?utm_source=github&utm_campaign=react-vite-ts-readme) is a free as in freedom, open source, privacy-first and regulation-compliant website analytics tool.

No cookies or personal data collection. So you don't have to worry about cookie banners or GDPR, CCPA, and PECR compliance.

## License

Copyright © 2023, Gökhan Sarı. Released under the [MIT License](./LICENSE).
