# Boas Práticas de Commits

Estrutura do commit: `<tipo>[escopo opcional]:<descrição>`

#### Tipo de Commits

1. fix: soluciona um problema na code base
2. feat: inclui um novo recurso na code base
3. BRAKING CHANGE: um commit que contém BREAKING CHANGE no rodapé, ou contém ! após o tipo/escopo, introduz um modificação que queba a compatibilidade da API.

### Exemplos

##### Mensagem de commit com descrição e modificação que quebra a compatibilidade no rodapé

> feat: permitir que o objeto de configuração fornecido estenda outras configurações

##### Mensagem de commit com escopo e ! para chamar a atenção para quebra a compatibilidade

> feat!: envia email para o cliente quando o produto é enviado
