
# Setup

## Create a root folder
➜  `mkdir single-spa-micro-frontend` \

## Create a root config
➜  `cd single-spa-micro-frontend` \
➜  `npx create-single-spa --moduleType root-config`

>\? Directory for new project root-config `Enter` \
? Which package manager do you want to use? `npm` \
? Will this project use Typescript? `Yes` \
? Would you like to use single-spa Layout Engine `Yes` \
? Organization name (can use letters, numbers, dash or underscore) `nit`

➜  `cd root-config` \
➜  `npm start -- --port 9000`

## Create a header app

Goto the __single-spa-micro-frontend__ folder to create react parcel app\
➜  `npx create-single-spa --moduleType app-parcel`
>? Directory for new project `header` \
? Which framework do you want to use? `react` \
? Which package manager do you want to use? `npm` \
? Will this project use Typescript? `Yes` \
? Organization name (can use letters, numbers, dash or underscore) `nit` \
? Project name (can use letters, numbers, dash or underscore) `header`


Register application in root config & start header app\
➜  `npm start -- --port 8500`

## Create a reviews CRA app

Goto the __single-spa-micro-frontend__ folder to create CRA app\
➜  `npx create-react-app reviews --template typescript` \
➜  `cd reviews` \

Add Craco Plugin Config
➜  `npm i single-spa-react @craco/craco craco-plugin-single-spa-application` \
➜  `touch craco.config.js` 


Register application in root config & start reviews app\
➜  `npm start`
