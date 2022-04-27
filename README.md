![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/allantrigo/0848564d7646ffba3eefc4822d2b4845/raw/jest-test__heads_master.json)
[![CI](https://github.com/allantrigo/jest-test/actions/workflows/main.yml/badge.svg)](https://github.com/allantrigo/jest-test/actions/workflows/main.yml)
# jest-test
Esse projeto é um exemplo sobre como o Jest realiza os testes de uma aplicação. No projeto está sendo usado o TypeScript, mas pode ser usado para JavaScript comum e até mesmo junto a outros frameworks.
# Instalando
Neste projeto foi usado o Yarn para realizar a execução do projeto, desta forma, após realizar o clone do projeto usando o seguinte comando:
```
git clone https://github.com/allantrigo/jest-test.git
```
Com o projeto clonado basta então executar o seguinte comando para instalar as dependências
```
yarn
```
# Executando os testes
Sendo um projeto focado em mostrar os possíveis testes do Jest, é necessário executar comandos para mostrar os testes.
## Testes comuns
É possível executar testes comuns e de execução mais rápida através do seguinte comando:
```
yarn test
```
Uma vez executado o comando mostrará os testes executados para o usuário.
## Testes com coverage
É possível ver também a coverage do projeto usando o seguinte comando:
```
yarn coverage
```
Ao executar esse comando é possível ver também a coverage do projeto. Além disso, é possível visualizar também a coverage detalhadamente a partir da pasta que é criada, chamada ```coverage```, dentro dela há uma outra pasta chamada ```lcov-report```, dentro dela há o index.html, um arquivo que mostra também a coverage detalhada e as branchs não inspecionadas do código.

Projeto desenvolvido por [Allan Trigo](https://github.com/allantrigo), [Jessian Ribeiro](https://github.com/JessianCRB) e [Lucas Alípio](github.com/Lucas-Alipio).
