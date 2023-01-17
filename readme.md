# NLW Setup

## Como clonar e executar esse projeto

Até o momento esse projeto está em desenvolvimento

Git Clone `git clone https://github.com/felpfsf/nlw-setup-web.git`

No diretório execute o comando `yarn` para instalar as dependências.

Para executar digite o comando `yarn dev`.

## Anotações Gerais

### Iniciando o projeto

- [ ] **`yarn create vite <nome do projeto>`** - Cria o projeto utilizando o vite, depois selecionar `React` e então `Typescript`. Na pasta do projeto execute o comando yarn para terminar de instalar as dependências.
- [ ] **`yarn add -D tailwindcss postcss autoprefixer`** - Sim, esse projeto usa tailwind(chora mais), esse comando irá instalar o tailwind, postcss e autoprefixer como dependencias de desenvolvimento.
- [ ] **`yarn tailwindcss init -p`** - cria o arquivo tailwind.config.cjs e postcss.config.cjs, contém as principais regras de configuração para o uso do tailwind. Nesse arquivo adicione dentro de content a seguinte linha: `"./index.html, "./src/**/*.{js, ts, jsx, tsx}"`. Isso faz com que o tailwind monitore os arquivos de seu projeto.
- [ ] Em `src` crie um arquivo `index.css` e adicione as diretivas para cada layer. Costumo aplicar uma cor para font e fundo padrão no body. Não esquecer que este arquivo deve ser importado em `main.tsx`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body{
  @apply bg-neutral-900 text-neutral-100 antialiased;
}
```

- [ ] **`yarn add -D prettier prettier-plugin-tailwindcss`** - Configuração oficial do TailwindCSS para poder realizar o sort/origanização das classes de forma automática.

### Instalando fonts

Uma das formas de instalar fonts do google usando o TailwindCSS é a seguinte:

Selecionar a font desejada, no caso do projeto será a Inter com os estilos de **400(regular)**, **600(semibold)**, **700(bold)** e **800(extrabold)**, esse código deve ser aplicado em **`index.html`**

```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
    rel="stylesheet"
  />
```

Em tailwind.config.cjs na linha extend crie um objeto fontFamily e dentro dele adicione o nome da variável da font, que é inter, seguido por um array, este array deve conter o nome dela seguido pelo tipo que é `sans-serif`

```css
...
extend:{
  fontFamily: {
    inter: ['Inter', 'sans-serif']
  }
}
```

Para testar as configurações, vá em app.tsx e crie um texto e na tag digite className="font-inter text-4xl", isso aplicará a font inter ao texto e um tamanho de 36px.
Exemplo:
`<h1 className="text-4xl font-extrabold font-inter">Habit Tracker</h1>`
