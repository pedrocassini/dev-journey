# Roadmap Backend: de Infra a Dev (Node/TypeScript)

Oct 13, 2026 · @Pedro Henrique Cassini Pinto

## Visão geral

Este roadmap leva você de zero em backend a um portfólio pronto para candidaturas em cerca de 6 meses, com 8 a 10 horas de estudo por semana, usando JavaScript/TypeScript e Node e aproveitando o que a faculdade já ensina. Os prazos são estimativas: ajuste conforme a carga do semestre e do trabalho.

**Ritmo semanal sugerido**

- 3 sessões de 1h30 durante a semana (teoria curta + exercícios).
- 1 sessão longa de 3 a 4 horas no fim de semana (projeto e prática).
- Regra geral: 70% prática, 30% teoria. Se passou mais de 30 minutos só assistindo, pare e escreva código.

**As fases, em ordem**

1. Fase 0: ambiente, Git e hábitos (semanas 1-2).
2. Fase 1: JavaScript sólido (meses 1-2).
3. Fase 2: Node.js, HTTP e APIs REST (mês 3).
4. Fase 3: TypeScript e PostgreSQL (meses 3-4).
5. Fase 4: autenticação, testes e NestJS (mês 5).
6. Fase 5: Docker, deploy e CI/CD (mês 6).
7. Projetos de portfólio (a partir da Fase 2, em paralelo).
8. Fase 6 opcional: Java e Spring Boot (mês 7 em diante).

**Como usar**

- Cada fase tem tópicos, exercícios em formato de checklist e um critério de avanço. Só passe adiante quando o critério for cumprido.
- Guarde tudo em um repositório no GitHub: exercícios, anotações e projetos. Ele vira seu portfólio.
- Fontes úteis ao longo do caminho: MDN Web Docs e javascript.info (JavaScript), documentação oficial do Node, do PostgreSQL, do NestJS e do Docker, e o roadmap.sh como mapa de referência. Prefira sempre a documentação oficial.

## Fase 0 · Ambiente, Git e hábitos (semanas 1-2)

Objetivo: ter um ambiente de trabalho profissional e o hábito de versionar tudo desde o primeiro dia.

**Tópicos**

- VS Code, Node.js LTS instalado com nvm, terminal (você já domina Linux e shell: aproveite).
- Git e GitHub: commit, branch, merge, pull request, resolução de conflitos, `.gitignore`.
- Mensagens de commit claras e README bem escrito.

**Exercícios**

- [ ] Instalar o Node LTS com nvm e rodar um script "hello world".
- [ ] Criar o repositório `dev-journey` no GitHub, com README, para guardar exercícios e anotações.
- [ ] Fazer 10 commits pequenos com mensagens claras, em uma branch separada, e abrir um pull request para você mesmo.
- [ ] Provocar um conflito de merge de propósito e resolvê-lo.
- [ ] Configurar chave SSH e deixar o perfil do GitHub completo (foto, bio, link do LinkedIn).

**Critério de avanço:** você cria um repositório, trabalha em branch e abre um pull request sem consultar tutorial.

## Fase 1 · JavaScript sólido (meses 1-2)

Objetivo: dominar a linguagem, em especial o modelo assíncrono, que é a base de tudo em Node e o assunto mais cobrado em entrevistas.

**Tópicos**

- Tipos, escopo, hoisting, `this`, closures, funções como valores.
- Arrays e objetos: `map`, `filter`, `reduce`, destructuring, spread, `Map` e `Set`.
- Módulos ES, classes e protótipos (compare com POO em Java).
- Assíncrono: callbacks, Promises, `async/await`, event loop, tratamento de erros.
- JSON, `fetch`, `fs/promises`, leitura de argumentos de linha de comando.

**Exercícios de fundamentos**

- [ ] Reescrever em JS cinco algoritmos que você fez em C (busca binária, ordenação, pilha, fila, lista ligada) e comparar as diferenças.
- [ ] Resolver 20 exercícios de `map`/`filter`/`reduce` (agrupar pedidos por cliente, somar por categoria, achar duplicados).
- [ ] Implementar do zero `debounce`, `memoize` e `once` usando closures.
- [ ] Criar uma classe `Fila` e uma `Pilha` com testes simples via `node:test`.

**Exercícios de assíncrono**

- [ ] Ler 3 arquivos com `fs/promises` em sequência e depois em paralelo com `Promise.all`; medir a diferença de tempo.
- [ ] Prever a saída de 5 trechos que misturam `setTimeout`, Promises e `async/await`, escrever a previsão e só então rodar para conferir (treino de event loop).
- [ ] Escrever uma função `fetchComRetry` com timeout, número máximo de tentativas e espera crescente entre elas.
- [ ] Tratar erros corretamente em cadeia de Promises e em `try/catch` com `async/await`.

**Mini projeto**

- [ ] CLI em Node que lê um CSV de inventário de servidores (nome, IP, porta), testa a conexão de cada um e gera um relatório de disponibilidade em Markdown ou JSON. Publique no GitHub com README.

**Critério de avanço:** você explica o event loop em 3 minutos sem consultar material e resolve os exercícios de `reduce` e Promises sem pesquisar a sintaxe.

## Fase 2 · Node.js, HTTP e APIs REST (mês 3)

Objetivo: construir APIs bem estruturadas e entender o que o framework faz por baixo.

**Tópicos**

- HTTP a fundo: verbos, status codes, headers, cookies, CORS (aqui sua base de redes ajuda muito).
- Express: rotas, middlewares, tratamento de erros, variáveis de ambiente.
- Validação de entrada com Zod, respostas de erro padronizadas.
- Organização em camadas: rotas, controllers, services, repositórios.
- Paginação, filtros, versionamento e documentação com OpenAPI/Swagger.
- Ferramentas: curl, Postman ou Insomnia, logs estruturados (pino).

**Exercícios**

- [ ] Criar um servidor com o módulo `http` puro, com 3 rotas e sem Express, para ver o que o framework esconde.
- [ ] Construir uma API de tarefas em Express com CRUD completo (dados em memória, por enquanto).
- [ ] Escrever três middlewares: log de requisições, tratamento central de erros e limite simples de requisições por IP.
- [ ] Validar o corpo das requisições com Zod e devolver erros 400 em formato padronizado.
- [ ] Implementar paginação e filtros (`?status=done&page=2&limit=10`).
- [ ] Documentar a API com Swagger/OpenAPI e testar todos os endpoints pelo Postman.
- [ ] Separar o código em camadas (rota, controller, service, repositório) e explicar por que cada camada existe.
- [ ] Consumir sua API com uma tela simples em React, reaproveitando o que você vê na faculdade.

**Critério de avanço:** você sobe uma API do zero com CRUD, validação, tratamento de erros e documentação em menos de 2 horas, sem copiar de tutorial.

## Fase 3 · TypeScript e PostgreSQL (meses 3-4)

Objetivo: tipar o código e persistir dados de forma séria. TypeScript é praticamente o padrão em vagas de Node, e SQL bem escrito é um dos maiores diferenciais de um backend júnior.

**Tópicos de TypeScript**

- Tipos básicos, interfaces, `type`, unions, narrowing, generics e utility types (`Partial`, `Pick`, `Omit`, `Record`).
- `tsconfig` com `strict` ligado, tipagem de funções assíncronas e de erros.

**Tópicos de PostgreSQL**

- Subir o banco com Docker; `JOIN`, `GROUP BY`, subconsultas, CTEs e window functions.
- Índices, `EXPLAIN ANALYZE`, transações e níveis de isolamento, constraints.
- Migrations versionadas e acesso via Prisma ou query builder (como Knex ou Kysely); pool de conexões.
- Seu conhecimento de modelagem e de PL/SQL Oracle se transfere quase direto: compare com PL/pgSQL.

**Exercícios de TypeScript**

- [ ] Migrar a API da Fase 2 para TypeScript com `strict` ligado e sem usar `any`.
- [ ] Criar um tipo genérico `Paginated<T>` e usá-lo em todas as respostas paginadas.
- [ ] Resolver 15 desafios de nível fácil do repositório `type-challenges`.

**Exercícios de banco de dados**

- [ ] Modelar o banco da API (diagrama ER) com pelo menos 4 tabelas, incluindo relações 1:N e N:N.
- [ ] Escrever as migrations versionadas e rodá-las do zero em um banco vazio.
- [ ] Resolver 30 consultas de prática em um dataset de exemplo, cobrindo `JOIN`, agregações, CTEs e window functions.
- [ ] Popular uma tabela com 100 mil linhas, criar um índice e comparar o `EXPLAIN ANALYZE` antes e depois.
- [ ] Implementar uma operação transacional (por exemplo, pedido com baixa de estoque) e provar com teste que o rollback funciona quando algo falha.
- [ ] Provocar um problema de N+1 em um endpoint, identificá-lo nos logs e corrigi-lo.
- [ ] Reescrever uma procedure em PL/SQL da faculdade como função em PL/pgSQL e anotar as diferenças.
- [ ] Trocar o armazenamento em memória da API por PostgreSQL.

**Critério de avanço:** a API roda com TypeScript estrito e PostgreSQL, e você explica em voz alta por que um índice acelera uma consulta e o que uma transação garante.

## Fase 4 · Autenticação, testes e NestJS (mês 5)

Objetivo: sair do nível "fiz uma API" para "fiz uma API segura, testada e organizada", que é o que separa um portfólio comum de um bom.

**Tópicos**

- Hash de senha (argon2 ou bcrypt), JWT com access e refresh token, controle de acesso por papéis.
- Noções de segurança: OWASP Top 10 (injeção, autenticação quebrada, exposição de dados), gestão de segredos, rate limiting.
- Testes unitários e de integração (Vitest ou Jest, mais Supertest), TDD básico, mocks.
- NestJS: módulos, controllers, providers, injeção de dependência, pipes, guards e interceptors.
- Princípios SOLID e injeção de dependência (conversa direto com o que você vê em POO com Java).

**Exercícios**

- [ ] Implementar cadastro e login com senha em hash, JWT de acesso e refresh token.
- [ ] Proteger rotas e criar dois papéis (admin e usuário) usando um guard.
- [ ] Escrever pelo menos 20 testes unitários em services e 10 testes de integração em endpoints, com cobertura acima de 70%.
- [ ] Fazer TDD em uma regra de negócio (por exemplo, cálculo de desconto ou de SLA): escreva o teste antes do código.
- [ ] Refazer a API em NestJS e anotar o que mudou em relação ao Express (estrutura, DI, validação).
- [ ] Revisar sua API com um checklist do OWASP Top 10 e corrigir o que encontrar.
- [ ] Escrever um teste que garante que um usuário comum não acessa rota de admin.
- [ ] Opcional: cache com Redis em um endpoint de leitura pesada e um job assíncrono em fila.

**Critério de avanço:** sua API tem autenticação, papéis, testes automatizados rodando com um comando e você consegue explicar como protegeu cada risco do checklist.

## Fase 5 · Docker, deploy e CI/CD (mês 6)

Objetivo: colocar a aplicação no ar de forma repetível. Esta é a fase em que sua experiência em infra vira vantagem clara sobre outros candidatos juniores.

**Tópicos**

- Docker: Dockerfile com multi-stage build, imagens enxutas, `docker compose` (app, PostgreSQL, Redis), volumes, healthchecks.
- Proxy reverso (Nginx ou Caddy), HTTPS com Let's Encrypt, variáveis de ambiente e segredos.
- Deploy: em uma VM sua no Proxmox (excelente para o portfólio) ou em um serviço de hospedagem (Render, Railway, Fly.io; confira os planos gratuitos atuais antes, pois mudam).
- CI/CD com GitHub Actions: lint, testes, build e publicação da imagem.
- Observabilidade básica: logs estruturados em JSON, endpoint `/health`, métricas simples.

**Exercícios**

- [ ] Escrever um Dockerfile multi-stage para a API e reduzir a imagem final ao máximo (compare o tamanho antes e depois).
- [ ] Criar um `docker compose` com app, PostgreSQL e volume, que sobe tudo com um único comando.
- [ ] Montar um pipeline no GitHub Actions: lint, testes, build e publicação da imagem em um registry.
- [ ] Fazer o deploy em uma VM sua com Nginx e HTTPS, ou em um serviço gerenciado.
- [ ] Criar o endpoint `/health` e configurar logs em JSON; opcionalmente, um painel simples no Grafana.
- [ ] Escrever um runbook no README: como subir, como atualizar, como fazer rollback e onde ver os logs.
- [ ] Derrubar o banco de propósito, observar o comportamento da API e documentar o que aprendeu.

**Critério de avanço:** um push na branch principal roda os testes e publica a nova versão automaticamente, e a aplicação está acessível por um link público ou documentado.

## Projetos de portfólio

Três projetos bem acabados valem mais do que dez tutoriais copiados. Todos devem ter autenticação, banco PostgreSQL, testes, Docker e pipeline de CI. O primeiro nasce na Fase 2 e vai evoluindo com cada fase; os outros dois entram a partir do mês 5.

| Projeto                                | Problema que resolve                                                                                              | Stack sugerida                                           | Diferencial                                                                          |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| A. Inventário e monitoramento de infra | Cadastro de servidores e VMs, status, vencimento de licenças e acompanhamento de rotinas de backup                | Node/NestJS, PostgreSQL, React                           | Nasce do seu trabalho real e você explica o domínio melhor que qualquer outro júnior |
| B. Sistema de chamados (helpdesk)      | Abertura e acompanhamento de chamados com estados, prazos de SLA e notificações por e-mail                        | Node/NestJS, PostgreSQL, fila (BullMQ ou similar), React | Máquina de estados, regras de negócio, relatórios em SQL e processamento assíncrono  |
| C. Coletor e integrador                | Consulta a APIs de ferramentas de infra (como a API REST do Proxmox), consolida dados e gera relatórios e alertas | Node/TypeScript, PostgreSQL, agendador de tarefas        | Integração com sistemas externos, tratamento de falhas e retentativas                |

**Checklist de qualidade de cada projeto (README)**

- [ ] Descrição do problema e para quem a solução serve, em poucas linhas.
- [ ] Diagrama simples de arquitetura e do modelo de dados.
- [ ] Instruções para rodar com um único comando (`docker compose up`).
- [ ] Decisões técnicas explicadas (por que esse banco, por que essa estrutura).
- [ ] Capturas de tela ou GIF do funcionamento.
- [ ] Testes automatizados e selo do pipeline de CI no topo.
- [ ] Link da aplicação no ar ou instruções claras de deploy.
- [ ] Seção "o que eu faria diferente / próximos passos", que mostra senso crítico.

**Dica de ouro:** se possível, coloque o Projeto A em uso real no seu trabalho, mesmo que em escala pequena. "Desenvolvi e usei em produção" é uma frase muito mais forte em entrevista do que "fiz um projeto pessoal".

## Trilha paralela · Faculdade, algoritmos, inglês e carreira

O estudo técnico sozinho não basta. Estas frentes rodam o tempo todo, em doses pequenas, junto com as fases.

**Faculdade (aproveite o que já está pagando)**

- C e estrutura de dados: base para entrevistas técnicas. Refaça em JS ou TypeScript as estruturas que você implementa em C.
- Java e POO: pratique SOLID e padrões simples (Strategy, Factory, Repository) e depois reaplique no NestJS.
- Banco de dados e PL/SQL Oracle: use a modelagem das aulas nos seus projetos e compare Oracle com PostgreSQL.
- Programação Web com React: construa o front dos seus projetos A e B.

**Algoritmos (manutenção semanal)**

- [ ] 2 a 3 problemas por semana de nível fácil ou médio (LeetCode, HackerRank ou Exercism), sempre em JS ou TS.
- [ ] Revisar um problema antigo por semana, sem olhar a resposta.

**Inglês (o maior multiplicador de salário a longo prazo)**

- [ ] 20 a 30 minutos por dia: leitura de documentação técnica, vídeos ou podcasts em inglês.
- [ ] Escrever README e commits em inglês a partir do Projeto B.
- [ ] Fazer uma aula de conversação por semana (ou troca de idiomas) a partir do mês 3.

* Meta: ler documentação sem traduzir em 3 meses e conseguir conduzir uma entrevista simples em inglês em cerca de 12 meses.

**Carreira (construção contínua)**

- [ ] Atualizar o LinkedIn e o GitHub com foto, resumo e projetos, e fixar os 3 melhores repositórios.
- [ ] Reescrever o currículo em uma página, com foco em "infraestrutura + desenvolvimento backend" e resultados concretos.
- [ ] Propor uma automação ou ferramenta interna no trabalho a cada mês e registrar o resultado (tempo economizado, erros evitados).
- [ ] Acompanhar vagas de backend júnior e analista de sistemas para entender quais tecnologias aparecem com mais frequência na sua região e no remoto.

## Fase 6 (opcional) · Java e Spring Boot (mês 7 em diante)

Só entre aqui depois de concluir ao menos um projeto completo em Node e de olhar o mercado com dados. Java com Oracle e PL/SQL costuma aparecer em bancos, seguradoras e grandes empresas, e você já tem a base de POO e de banco pela faculdade.

**Como decidir**

- [ ] Levantar 30 vagas de backend júnior ou analista de sistemas (sua região e remoto) e contar quantas pedem Node, Java ou .NET.
- [ ] Se Java aparecer com muito mais frequência que Node na sua região, siga esta fase. Se Node dominar, aprofunde Node e deixe Java como segunda linguagem.

**Tópicos**

- Spring Boot, Spring Data JPA, Maven ou Gradle, Bean Validation, Spring Security.
- Testes com JUnit e Mockito; integração com Oracle e PostgreSQL via JDBC ou JPA.

**Exercícios**

- [ ] Reimplementar a API do Projeto A em Spring Boot, com PostgreSQL, autenticação e testes.
- [ ] Chamar uma procedure PL/SQL Oracle a partir de uma aplicação Java.
- [ ] Comparar as duas versões do Projeto A (estrutura, desempenho, quantidade de código) em um post ou no README.

**Critério de avanço:** você consegue apresentar o mesmo sistema em duas stacks e defender as diferenças com argumentos técnicos.

## Checklist de marcos e entrada no mercado

Comece a se candidatar quando o primeiro projeto completo estiver no ar, em torno do mês 5 ou 6, sem esperar o roadmap terminar. Os prazos abaixo são metas, não garantias.

**Marcos**

- [ ] Mês 1: repositório de estudos no GitHub ativo, com commits semanais.
- [ ] Mês 2: CLI de relatório de servidores publicado.
- [ ] Mês 3: API REST com CRUD, validação e documentação.
- [ ] Mês 4: API em TypeScript com PostgreSQL, migrations e transações.
- [ ] Mês 5: autenticação, papéis e testes automatizados rodando.
- [ ] Mês 6: Projeto A no ar com Docker e pipeline de CI/CD.
- [ ] Meses 7 a 9: Projetos B e C concluídos e com README de qualidade.

**Vagas-alvo**

- Desenvolvedor backend júnior, desenvolvedor Node júnior.
- Analista de sistemas, sustentação de aplicações (N2/N3), integração e automação.
- Analista DevOps ou cloud júnior (plano B, com a bagagem de infra a seu favor).

**Preparação para entrevistas**

- [ ] Revisar algoritmos básicos, SQL (`JOIN`, agregações, índices), HTTP/REST e event loop.
- [ ] Treinar a apresentação de cada projeto em 3 minutos: problema, decisões técnicas, o que deu errado e o que você aprendeu.
- [ ] Fazer pelo menos 2 simulados de entrevista com um amigo ou colega de faculdade.
- [ ] Refazer um teste técnico em casa, com prazo de 3 horas, e pedir feedback sobre o código.

**Ritmo de candidaturas e revisão**

- Meta: 5 a 10 candidaturas por semana, com mensagem personalizada para cada vaga, e contato direto com recrutadores no LinkedIn.
- A cada 4 semanas, revise: quantas respostas vieram, em que etapa você parou e o que precisa ajustar (currículo, projetos ou algum tópico técnico).
- Mantenha o emprego atual enquanto estuda e só faça a troca quando houver uma proposta que faça sentido.
