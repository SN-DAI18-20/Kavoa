# Projet Kavoa

## Installation
_WIP_

## Introduction à TypeScript

Ce projet utilise React avec **TypeScript**, TypeScript est une *préprocesseur* JavaScript conçu par Microsoft dans l'optique de faciliter les développeurs issus d'environnements C# et Java au développement front. TypeScript apporte entre autre un typage fort.

Bien que la syntaxe peut différer de JavaScript, l'ensemble des méthodes restent disponibles. Si vous souhaitez obtenir plus d'information concernant TypeScript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/).

Voici un exemple typique de typage des variables avec TypeScript :
```ts
const variable:number = 2
```

Vous serez peut être amené à avoir des erreurs du type
```js
Le paramètre 'variable' possède implicitement un type 'any'.
```

Cela signifie que vous n'avez pas donné de type à votre variable, vous pourrez lui mettre le type **any**, qui correspond à tout les types:
```ts
const variable:any = 2
```

## Architecture de l'application
```
.
├── README.md
├── package.json
├── /node_modules
├── /public
│   └── index.html
├── /src
│   ├── /Components
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── /utils
├── /stories
├── tsconfig.json
│   ├── /Pages
└── yarn.lock
```

Voici les dossiers sur lesquelles vous agirez :
```
├── src
│   ├── Components
│   │   └── Vos composant .tsx
│   └── utils
│       └── Quelques outils, d'api, de chargement de page, etc que vous aurez besoin
└── stories
    └── index.story.js
```

## Précision sur l'utilisation de react

Les composants pourront être soit en classes soit en fonction, mais devront toujours s'exporter individuellement, pas d'export par default:
```js
export class MonComposant extends React.Component {
    //du code du code
}
```
ou
```js
export const MonComposant = () => {
    //du code du code
}
```

Si vous passez des props(attributs) personnalisé à vos composants, il faudra les mettres un seul et unique object appelé props

## Utilisation de storybook
Chaque composant crée devra être ajouté à ```index.story.js```

Pour ajouter un composant :
```js
storiesOf('Le nom de votre composant', module)
    .add('sans donnée', () => <Composant />)
    .add('avec donnée', () => <Composant props={datas} />)
    .add('un sous composant', () => <SousComposant/>)
```