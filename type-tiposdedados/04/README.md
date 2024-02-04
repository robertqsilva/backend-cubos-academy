![](https://i.imgur.com/xG74tOh.png)

# Exercício 04

## Impressão de Etiquetas

Uma linha de produção de computadores precisa implementar uma nova funcionalidade, ao sistema de gestão usado em sua fábrica, para geração automática de etiquetas dos produtos. Implemente uma função que receba um objeto, conforme exemplo abaixo, como argumento e retorne uma lista com todas as informações das etiquetas geradas.

```javascript
    {
        produto: 'CPU Dual Core 3.0GHZ',
        lote: 321,
        ano: 2022,
        qtd: 5
    }
```

O resultado para o exemplo acima será:

```javascript
;[
    "321-2022-001",
    "321-2022-002",
    "321-2022-003",
    "321-2022-004",
    "321-2022-005",
]
```

Obs.:

O programa deverá usar o TypeScript e todas variáveis, parâmetros e retorno de funções devem ser tipadas adequadamente.

Não é necessário transpilar o código.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `typescript` `exercicio` `nodeJS` `JavaScript`
