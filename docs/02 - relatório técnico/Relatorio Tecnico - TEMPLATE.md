# Informações do Projeto
BLOOD-ON: SOLIDARIEDADE E INOVAÇÃO NA VEIA - UMA TRANSFUSÃO DE AMOR

SISTEMA DE INFORMAÇÃO/ANÁLISE E DESENVOLVIMENTO DE SISTEMAS 

## Participantes

- CAIQUE VILLARREAL
- FERNANDO OLIVEIRA SOARES
- SAMUEL VITAL SANTOS SILVA

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

A doação de sangue é um ato de extrema importância para a saúde pública, sendo fundamental para salvar vidas em situações de emergência, no tratamento de doenças crônicas e na realização de procedimentos médicos complexos. No entanto, apesar de sua relevância, a escassez de sangue nas agências transfusionais é uma realidade enfrentada por muitas pessoas no mundo todo. Esta escassez é agravada por fatores tais como desinformação, burocracias e dificuldade na logística. É neste contexto que surge a Blood-On, plataforma que pretende jogar luz nesse assunto e encurtar as distâncias entre o potencial doador e o paciente que tanto precisa do sangue.

## Problema

De acordo com as entrevistas feitas em campo identificamos problemas importantes como:
 - Falta de conhecimento sobre os requisitos necessários para ser considerado um doador apto - Muitas pessoas não sabem se estão aptas para doar sangue porque não conhecem os critérios necessários, como idade, peso e histórico médico.
 - Dificuldade em encontrar locais próximos para doação de sangue - É difícil para algumas pessoas encontrar centros de doação de sangue perto delas, especialmente em áreas mais remotas.
 - Desinformação sobre os horários de funcionamento dos centros de doação - As pessoas muitas vezes não sabem quando os centros de doação de sangue estão abertos, o que pode resultar em visitas desperdiçadas.
 - Desconhecimento dos benefícios da doação - Muitas pessoas não sabem que doar sangue não só ajuda os pacientes, mas também pode ser benéfico para elas mesmas, como receber uma verificação de saúde gratuita, tirar folga no serviço, etc.

   
## Objetivos

O principal objetivo da plataforma Blood-On é aumentar a oferta de sangue em hospitais e clínicas através da conscientização das pessoas e esclarecimentos acerca do tema. Esta ferramenta foi desenvolvida com a finalidade de estabelecer uma conexão eficiente, prática e segura entre doadores e instituições de coleta de sangue, visando maximizar o número de doações e assegurar que estes centros de coleta disponham de estoques adequados para atender às demandas dos pacientes.

Para alcançar o objetivo acima os doadores poderão contar com diversos recursos na plataforma proposta, dentre eles:
  - Cadastro único e com respeito à proteção dos dados conforme exige a LGPD.
  - Perfil que deverá ser preenchido uma única vez, mas que poderá ser atualizado a fim de agilizar a próxima doação.
  - Tela com revisão dos requisitos para doação somente quando necessário e de forma bastante prática.
  - Acesso aos Centros de captação de sangue mais próximos, bem como o horário de funcionamento e dados do contato do estabelecimento.
  - Histórico de doações.
  - Outros.

## Justificativa

A doação de sangue é uma demonstração essencial de solidariedade que pode salvar vidas. Entretanto, durante as entrevistas qualitativas feitas pelo grupo foi percebido que é comum encontrar pessoas que desconhecem os procedimentos e locais adequados para realizar essa nobre ação, enquanto outras pessoas se sentem desmotivadas a participar desse processo. Com isso, a doação de sangue se encontra em um estado crítico, onde determinados tipos sanguíneos possuem estoques consideravelmente baixos e precisam de novos doadores, conforme divulgado pelo portal Hemominas. A plataforma Blood-On surge como uma resposta a esses desafios, visando eliminar essas barreiras ao oferecer uma forma intuitiva e acessível de buscar e contatar as instituições de coleta de sangue. Nosso objetivo é não apenas fornecer um meio conveniente para doar sangue, mas também educar e motivar os doadores, facilitando assim o processo de doação para todos os envolvidos.


## Público-Alvo

Nosso público-alvo inclui:
 - Potenciais doadores - Pessoas saudáveis com idade entre 18 e 69 anos, residentes  na região metropolitana de Belo Horizonte.
 - Hospitais e clínicas - Estabelecimentos de saúde que dependem do suprimento de sangue para realizar transfusões e procedimentos médicos, localizados na região metropolitana de Belo Horizonte.
 - Profissionais da saúde - Médicos, enfermeiros e outros profissionais da saúde que estejam envolvidos no processo de transfusão de sangue, podendo trabalhar na conscientização dos pacientes e de seus familiares, e que residem na região metropolitana de Belo Horizonte.
 - Centros de coleta - Instituições responsáveis pela coleta, armazenamento e distribuição de sangue, localizados na região metropolitana de Belo Horizonte.
 
 
# Especificações do Projeto

Nessa parte do projeto iremos abordar: Personas, proposta de valor, histórias de usuarios, requisitos e restrições 
Para fazermos isso utilizamos a ferramente "Miro".

## Personas e Mapas de Empatia

Persona 1:
<br>
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/95587943/9632a7cb-455a-4013-871c-18637d2b51c0) 
<br>
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/95587943/010de9c2-c366-44c1-9e06-0ebf1846226b)
<br>
Persona 2: 
<br>
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/95587943/572d4f14-221c-4ad5-91ab-7e351dad1eca) 
<br> 
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/95587943/bb4d6153-e12d-47a3-9b45-5d7dae35f313)
<br>
Persona 3: 
<br>
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/95587943/94e8460a-afdf-4611-89a1-7412a70a7526)
<br> 
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/95587943/7dd509bd-87f3-4fef-9909-4513654524bd)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`        | QUERO/PRECISO ... `FUNCIONALIDADE`                |PARA ... `MOTIVO/VALOR`                 |
|----------------------------|---------------------------------------------------|----------------------------------------|
|Usuário do site             | Receber sangue                                    | Para fazer uma transfusão de sangue   |                   
|Medico                      | Verificar a situação da doacao de um determinado tipo sanguineo| Para incentivar doadores desse tipo sanguineo a doarem |
|Medico                      | Acessar informações sobre doação de sangue        | Para poder orientar meus pacientes e incentivá-los a doar sangue|
|Designer gráfica            | Agendar minha próxima doação de sangue            | Para continuar fazendo a diferença na comunidade e ajudar aqueles que precisam|
|Designer gráfica            | Encontrar um local de doação de sangue próximo    | Para poder contribuir regularmente para salvar vidas|
|Digital influencer          | Compartilhar minha experiência de doação de sangue| Inspirar minha audiência a se envolver em ações altruístas| 
|Doador de sangue            | Doar sangue                                       | Ajudar pessoas que precisam do meu tipo de sangue|
|Designer gráfica            | Receber lembretes sobre a próxima data de doação  | Poder planejar minha agenda com antecedência e reservar um tempo para doar sangue|
|Digital influencer          | Ter acesso a recursos visuais atrativos sobre doação de sangue| Para compartilhar e aumentar o impacto das minhas mensagens
|Medico                      | Receber relatórios periódicos sobre a taxa de doação de sangue na região| Poder avaliar o progresso das campanhas de doação e identificar áreas que necessitam de mais esforços de conscientização.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|

|RF-001| Cadastro de Usuários: Permitir que os usuários (tanto doadores quanto receptores) se cadastrem no site fornecendo informações básicas, como nome, idade, tipo sanguíneo, e-mail e localização. | ALTO | 

|RF-002| Busca de Bancos de Sangue: Implementar uma função de busca que permita aos usuários encontrar bancos de sangue próximos com base na pesquisa feita pelo usuário.   | ALTO |

|RF-003| Visualizar perfil do banco de sangue: Permite o usuário visualizar o banco de sangue e suas informações de contato       | ALTO |

|RF-004| Perfil do Doador/Receptor: Criar perfis personalizados para os doadores e receptores, onde possam visualizar suas informações e editá-las.   | MÉDIO |

|RF-005| Feedback e Avaliações: Permitir que os usuários avaliem e forneçam feedback sobre suas experiências com os bancos de sangue, ajudando a manter a qualidade dos serviços.   | MÉDIO |

|RF-006| Compatibilidade com Dispositivos Móveis: Garantir que o site seja responsivo e compatível com dispositivos móveis, facilitando o acesso e uso pelos usuários em smartphones e tablets.   | ALTO |

|RF-007| Notificações: Enviar lembretes automáticos aos usuários cadastrados sobre  estados críticos de determinados tipos sanguíneos | BAIXO |

|RF-008|  Criação de tópicos no mural: Permite o usuário criar tópicos e comentar a respeito da doação podendo haver comentarios d outros usuário no mesmo tópico    | MÉDIO  |

|RF-009| Acesso a sites externos: o site deve possuir um link que leva o usuário ao portal explicando mais detalhadamente sobre o processo de doação  | MÉDIO |

|RF-010|  Compartilhamento e curtida no mural: Permite o usuário curtir e fazer o compartilhamento de tópicos e comentários        | MÉDIO |

|RF-011|  Entrar em perfil já criado: Permite o usuário entrar em seu perfil no site  | ALTO |

|RF-012|  Sair da conta : Permite o usuário deslogar da sua conta no site  | ALTO |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|

|RNF-001| Segurança: Garantir a segurança dos dados dos usuários, implementando medidas de proteção, como criptografia de dados e políticas de privacidade robustas. | ALTO | 

|RNF-002| Desempenho: Assegurar que o site seja rápido e responsivo, com tempos de carregamento rápidos e uma experiência de usuário fluida. |  ALTO |  

|RNF-003| Disponibilidade: Manter o site disponível e acessível 24 horas por dia, 7 dias por semana, minimizando o tempo de inatividade e realizando manutenções programadas durante períodos de baixo tráfego. |  MÉDIO | 

|RNF-004| Confiabilidade: Garantir que o site seja confiável e livre de erros, com testes rigorosos de qualidade e monitoramento constante para identificar e corrigir problemas rapidamente. |  MÉDIO | 

|RNF-005| Acessibilidade: Garantir que o site seja acessível para pessoas com deficiências, seguindo as diretrizes de acessibilidade da web e oferecendo recursos como texto alternativo para imagens e teclado navegacional. |  MÉDIO | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
                                                        
|01| Restrições : O projeto deverá ser entregue até o final do semestre.

|02| Restrições : Não pode ser desenvolvido um módulo de backend com banco de dados real.

|03| Restrições : Os usuários doadores não podem editar perfis de banco e o contrário é verdadeiro.

|04| Restrições : Os usuários não podem  acessar as funcionalidaders do site sem estarem logados.

|05| Restrições : Os usuários doadores não podem visualizar informações de contato se nao atenderem os requisitos.


# Projeto de Interface

O projeto de interface foi feito usando o figama e é composto de 12 telas

## User Flow

Visão geral da interação do usuário pelas telas do sistema.

![UserFlow](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/88683487/586563b3-ab8f-4c3c-9dc8-4104a604033b)


## Wireframes
> - Tela de login (pessoas físicas doam e jurídicas recebem a doação);
 ![Imagem do WhatsApp de 2024-04-14 à(s) 20 18 43_0b5c3c8e](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/aa4617e6-a29b-433f-be86-98a243db0f60)
> - Tela de informação sobre a doação (tela para conscientizar os usuários sobre a doação de sangue);
![Imagem do WhatsApp de 2024-04-14 à(s) 20 18 43_e38ba06c](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/85bbe900-bdcc-4bf2-8a3f-68577af3c111)
> - Tela de cadastro (Pessoa Física);
![Imagem do WhatsApp de 2024-04-14 à(s) 20 18 43_e392981a](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/ee5ebd9f-b718-4843-9fcd-caa654a086ef)
> - Tela de cadastro (Pessoa Jurídica);
![Imagem do WhatsApp de 2024-04-14 à(s) 20 18 43_49346261](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/58114466-2c79-47c0-9ecc-7e8e69b68355)
> - Tela de perfil (Doador PF);
![Imagem do WhatsApp de 2024-04-14 à(s) 20 18 43_69ab4113](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/fe2aabb7-59b9-4446-b739-3e3a3e05596e)
> - Tela de perfil (Receptor PJ);
![Imagem do WhatsApp de 2024-04-14 à(s) 20 18 44_6b2d3462](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/ec970d28-b8d1-4e83-a2fd-fcd483509021)
> - Tela de busca de bancos de sangue;
![Imagem do WhatsApp de 2024-04-14 à(s) 20 18 43_9f1a18b9](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/9cf18de1-cdb3-44c5-a028-e71d639b42cf)
> - Tela do banco com o contato, detalhes, nota e comentários sobre o banco;
![Imagem do WhatsApp de 2024-04-14 à(s) 18 05 17_6f4d9790](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/2c4eca0f-7c8f-45ba-8ad4-11ab61d6cf70)
> - Tela de mural;
![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/8739378d-2c56-4e54-aa03-43b2fd75f48f)
> - Tela de comentários sobre a publicação no mural:
![Imagem do WhatsApp de 2024-04-14 à(s) 20 18 43_22bed698](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/e29257c0-32da-4117-bfa0-084ebdc4f595)
> - Tela Inicial
![Imagem do WhatsApp de 2024-04-14 à(s) 20 32 31_1376303e](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-blood-on/assets/164426484/6669bdbd-4f95-43c7-9edf-0c396819f83a)

# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
=======
# Informações do Projeto
`TÍTULO DO PROJETO`  

......  COLOQUE AQUI O SEU TEXTO ......

`CURSO` 

......  COLOQUE AQUI O SEU TEXTO ......

## Participantes

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua a lista dos membros da equipe com seus nomes completos.
>
> Os membros do grupo são: 
> - Fulano da Silva
> - Ciclano Albuquerque

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

......  COLOQUE AQUI O SEU TEXTO ......

> Nesse momento você deve apresentar o problema que a sua aplicação deve
> resolver. No entanto, não é a hora de comentar sobre a aplicação.
> Descreva também o contexto em que essa aplicação será usada, se
> houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de
> fato existir, pois ainda não é a hora de apresentar requisitos
> detalhados ou projetos.
>
> Nesse momento, o grupo pode optar por fazer uso
> de ferramentas como Design Thinking, que permite um olhar de ponta a
> ponta para o problema.
>
> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

......  COLOQUE AQUI O SEU TEXTO ......

> Aqui você deve descrever os objetivos do trabalho indicando que o
> objetivo geral é desenvolver um software para solucionar o problema
> apresentado acima. Apresente também alguns (pelo menos 2) objetivos
> específicos dependendo de onde você vai querer concentrar a sua
> prática investigativa, ou como você vai aprofundar no seu trabalho.
> 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas, Empatia e Proposta de Valor

......  COLOQUE AQUI O SEU TEXTO ......


> Relacione as personas identificadas no seu projeto, os respectivos mapas de empatia e 
> mapas da proposta de valor. Lembre-se que você deve ser enumerar e descrever precisamente 
> e de forma personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> - [Canvas da Proposta de Valor](https://analistamodelosdenegocios.com.br/canvas-da-proposta-de-valor/)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)
>
> **Exemplo de Proposta de Valor**
> ![Exemplo da Proposta de Valor](images/proposta_valor.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

Para garantir o sucesso e a eficiência do projeto Blood-On, adotamos uma abordagem robusta e adaptativa, composta por diversas práticas e ferramentas colaborativas, tais como:

## Organização da equipe e divisão de papéis:
Inicialmente, discutimos em reunião os tipos de trabalho das tarefas bem como os perfis dos integrantes do time a fim de atribuir habilidades prévias com desafios futuros e com isso reduzirmos o tempo das entregas. A ideia é trabalhar com uma curva de aprendizado menor. Por exemplo, os membros com mais facilidade em desenvolvimento de software seriam designados para a equipe de desenvolvimento, enquanto aqueles com experiência em design de interface seriam alocados na equipe de design. Além disso, foi designado um líder de equipe para coordenar as atividades, facilitar a comunicação e garantir o alinhamento dos objetivos do projeto.

## Organização das especificações do Projeto – Miro:
Escolhemos utilizar a ferramenta Miro por se tratar de um ambiente visual e interativo que facilita a comunicação e promove a colaboração em equipe.

## Organização das tarefas – Trello:
Utilizaremos a ferramenta Trello para criar um quadro Kanban personalizado que atenda às necessidades específicas do projeto Blood-On. Cada tarefa será representada por um cartão no quadro, contendo informações detalhadas sobre a atividade, prazo de conclusão e responsável pela execução. O quadro será dividido em colunas que representam os diferentes estágios do fluxo de trabalho, como "A fazer", "Em andamento" e "Concluído". Durante reuniões regulares de equipe, faremos uma revisão cuidadosa do quadro Kanban, identificando possíveis obstáculos, ajustando prioridades e realocando recursos conforme necessário.

## Prototipagem - Figma:
Utilizamos a plataforma FIGMA para a criação das telas Wireframes por ser uma ferramenta versátil e fácil de utilizar, além de possuir a opção de trabalho colaborativo.

## Criação da documentação - Google Docs:
Utilizamos o editor de texto Google Docs para criação da documentação por ser uma ótima ferramenta para trabalho colaborativo, por ser gratuito e fácil.

## Desenvolvimento colaborativo e versionamento – GitHub:
Optamos para que o desenvolvimento colaborativo e o versionamento sejam realizados por meio do GitHub neste projeto. Escolhemos essa plataforma devido à sua reputação no mercado, destacando-se pela facilidade de uso e integração com outras ferramentas essenciais de desenvolvimento, como o VS Code.
             
## Tecnologias utilizadas para Desenvolvimento – HTML, CSS e JavaScript:
Como trabalharemos na construção de um site, utilizaremos basicamente as linguagens HTML, CSS e Javascript. O editor escolhido foi o VS Code por este ser gratuito, leve, e possuir ótima integração com o GitHub, além de inúmeras extensões que facilitam o processo de desenvolvimento. 

## Metodologia Ágil:
Decidimos nos basear nos princípios e práticas da metodologia ágil, como Scrum, para promover uma abordagem iterativa e incremental durante o desenvolvimento do projeto. Isso envolverá a divisão do projeto em iterações menores e mensuráveis, conhecidas como Sprints. Durante essas “Sprints” haverá reuniões periódicas de acompanhamento, para atualizar o progresso, identificar impedimentos e ajustar o plano conforme necessário. Ao final de cada sprint, será realizada uma revisão para revisar o trabalho concluído e adaptar o plano para o próximo ciclo de desenvolvimento.

## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  [https://miro.com](https://miro.com/app/board/uXjVNjOsZMY=/) | 
|Repositório de código | GitHub | [https://github.com](https://github.com/orgs/ICEI-PUC-Minas-PCO-SI/teams/blood-on) | 
|Protótipo Interativo | MavelApp ou Figma | [https://figma.com](https://www.figma.com/files/team/1360648465270502134) | 
|Ferramenta de comunicação | WhatsApp | [https://web.whatsapp.com](https://www.figma.com/files/team/1360648465270502134) | 


>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
