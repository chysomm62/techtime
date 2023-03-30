### Techtime landing page

Built mainly with NextJs, Tailwindcss and Typescript

### Run with Docker

In your terminal project directory run;

```bash
docker-compose up --build --force-recreate
```

build the dockerfile in production;

```bash
docker-compose -f docker-compose.production.yml up --build --force-recreate
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

On netlify [https://chysommtechtime.netlify.app/](https://chysommtechtime.netlify.app/) for the hosted website.

### Run with NextJs

```bash
npm run dev
```
