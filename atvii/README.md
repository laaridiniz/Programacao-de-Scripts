<h1 align="center"> 💻 Atividade II </h2>

> Desenvolvimento de um aplicativo web que mostre os dados do último sorteio da Mega-sena, da Lotofácil e da Quina.

Objetivos:

- Criar aplicações React TS;
- Requisições HTTP;
- Context e hooks;
- CSS;
- Rotas.

Requisitos Funcionais:

- A aplicação deverá consumir os resultados disponibilizados na API: https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados;
- A aplicação deverá rotas para /lotofacil, /megasena e /quina;
- A aplicaçãodeverá ter um menu com os links para Lotofácil, Megasena e Quina (cor #260085). O link com a URL em exibição deverá ter os estilos {  color:  "#aaa",  pointerEvents:  "none"  }. A propriedade CSS pointer-events desabilita o link;
- Enquanto o resultado não estiver disponível deverá ser exibida uma mensagem de "carregando" centralizada na tela na vertical e horizontal.

Requisitos não funcionais:

- A aplicação deverá ser codificada usando React TypeScript;
- O projeto deverá ter os seguintes pacotes: assets (arquivo de imagens PNG), components (pacote com o menu  da  página), pages (terá as páginas Lotofacil,  Megasena  e  Quina), contexts (Contexto e Provider), hooks (função que retorna os recursos do Contexto), services (faz a conexão com a API de Loterias da Caixa) e types (interfaces);
- A aplicação deverá rodar na porta 3001;
- O ícone da página deverá serhttps://loterias.caixa.gov.br/Style%20Library/images/favicon.ico;
- Utilize a fonte Roboto em todos os textos. Dica: adicione o pacote @fontsource/roboto (https://www.npmjs.com/package/@fontsource/roboto) e o importe no arquivo src/index.tsx;
- Utilize axios para processar as requisições HTTP.

## Execução

Para executar a aplicação desenvolvida, siga as instruções abaixo:

1) Clone este repositório

```$ git clone https://github.com/laaridiniz/Programacao-de-Scripts.git```

2) Acesse a pasta atvi

```$ cd atvii```

2) Instale as dependências

```$ npm install```

3) Execute a aplicação

```$ npm start```


## Resultados

https://user-images.githubusercontent.com/86115352/235468994-7bbfb700-7b1c-40a5-bbca-96cb956b7a86.mp4




