
# Características de um Menu IVR

A página de detalhes de um Menu IVR permite ver e editar a mesma informação que na sua criação:

Na configuração do serviço Menu IVR deve-se proceder da seguinte forma:

1) Escolher a designação do Menu IVR em **Nome do Menu**;

2) Na opção de seleção **Ativo** é possível definir se o Menu IVR é executado quando é efetuada uma chamada para um dos seus Números de Acesso.

3) Na opção **Máximo de Chamadas Simultâneas** é possível definir o máximo de chamadas simultâneas aceites pelo Menu IVR. Se a caixa 'ilimitado' estiver seleccionada será aplicado o máximo definido no serviço Menu IVR - Máximo de Chamadas Simultâneas. Esta opção apenas aparecerá se o cliente tiver o serviço Menu IVR - Máximo de Chamadas Simultâneas.

4) Na opção **Números de Acesso** pode ser definida a numeração de contacto com o Menu IVR, onde podem ser escolhidos vários números de entrada, sejam curtos ou longos (DDI). Apenas podem ser escolhidos números que pertençam à numeração livre do cliente.

    Apenas deve ser configurado um número externo como destino das opções do Menu IVR se existir pelo menos um número longo como número de acesso, caso contrário a chamada não se realiza.

    Caso o serviço Acessos Convergentes esteja alocado ao Cliente, uma chamada para Menu IVR tendo como destino um número externo móvel, é realizada num contexto de chamada móvel-móvel caso:

    - exista numeração móvel configurada nos Números de Acesso do Menu IVR, ou
    - número geral do Cliente para destinos móveis se encontre configurado

5) A opção **Perfil de Números Internacionais** permite definir qual o Perfil de Números Internacionais que deve ser aplicado nas chamadas cujo destino coincida com as regras configuradas no perfil. Apenas disponivel se o cliente tiver o serviço "Números Internacionais" alocado.

    Se o Menu IVR for configurado com a opção "Menu", na secção Configurações para Menu é possível definir diferentes regras de aplicação (Incondicional, Fora de Horário ou Horário).

6) Na opção **Anúncio Inicial** é possível escolher o anúncio que vai ser ouvido quando uma chamada chegar a um dos Números de Acesso do Menu (corresponde ao anúncio de boas-vindas do Menu). Dependendo das configurações de instanciação, pode ser possível não definir nenhum anúncio inicial.

    Este serviço não permite a configuração de anúncios multilingue. No entanto é possível selecionar um anúncio não multilingue e mais tarde modificá-lo para que passe a ser multilingue. Nesse caso, ao editar novamente o menu IVR, o anúncio multilingue estará disponível e selecionado por omissão mas não será possível gravar novamente a configuração sem antes alterar a seleção do anúncio para um que não seja multilingue.

7) Na secção de **Inatividade** é possível definir o **Timeout por inatividade**, em segundos, que, decorrido esse tempo sem nenhum Código escolhido, executa a **Ação** definida a seguir, antes de repetir o Anúncio do Menu. As opções disponíveis para esta Ação são: "Nenhum" (sem ação), "Tocar anúncio" (é tocado o anúncio escolhido) ou "Ditar Texto" (o texto inserido é soletrado pelo sistema de IVR).
Quando é atingido o limite de **Tentativas** escolhido, é executada a **Ação Final** definida. Nesta Ação Final é possível encaminhar a chamada para voicemail ou terminar ou transferir a chamada, com ou sem anúncio ou texto. Nas opções de transferência é necessário definir o número de destino, nas opções de toque de anúncio é necessário definir o anúncio e nas opções com texto é necessário introduzir o texto a ser soletrado pelo sistema de IVR.

   1) Na secção de **Opção Inválida** é possível definir a **Ação** quando o Código escolhido não corresponde a um Código válido do menu IVR, antes de repetir o Anúncio do Menu. As opções disponíveis para esta Ação são: "Nenhum" (sem ação), "Tocar anúncio" (é tocado o anúncio escolhido) ou "Ditar Texto" (o texto inserido é soletrado pelo sistema de IVR).
Atingido o limite de **Tentativas** definido, é executada a **Ação Final** definida. Nesta Ação Final é possível encaminhar a chamada para voicemail ou terminar ou transferir a chamada, com ou sem anúncio ou texto. Nas opções de transferência é necessário definir o número de destino, nas opções de toque de anúncio é necessário definir o anúncio e nas opções com texto é necessário introduzir o texto a ser soletrado pelo sistema de IVR.

   1) Na configuração do Menu IVR podem ser adicionadas e/ou eliminadas regras horárias.

Quando não existem regras com encaminhamento horário, o menu IVR aparece como “Sem horários configurados”. Ao clicar em "Adicionar Horário", é possível definir uma regra com encaminhamento Incondicional, uma ou mais regras com encaminhamento Horário e uma regra com encaminhamento Fora de Horário.

    <div class="note">
    Caso a regra com encaminhamento Incondicional esteja ativa, essa regra tem prioridade sobre todas as outras regras configuradas. Ou seja, apenas a regra Incondicional será aplicada.
    </div>

## Configuração de Ações

Como mencionado anteriormente, ao configurar o serviço Menu IVR é possível configurar se queremos um Menu ou uma Ação sem Menu. A lista abaixo explica todas as ações que podem ser encontradas dentro de um Menu ou numa Ação sem Menu:

- **Encaminhar para Voicemail** - *necessário selecionar o número para o qual será encaminhada a mensagem de voicemail;*
- **Entregar a BOT** - *É necessário definir os dados do BOT nos campos "BOTSchool apikey", "Intenção inicial do BOT" e a ação de falha na entrega ao BOT. Por fim, também é necessário configurar um conjunto de anúncios associados a esta opção.*
- **Marcação por Extensão** - *necessário definir o Anúncio que solicita a inserção da extensão. Também é necessário configurar as áreas de "Inatividade" e "Opção Inválida" que são semelhantes às áreas com o mesmo nome no contexto do menu principal;*
- **Marcação por Nome** - *necessário selecionar o critério de pesquisa "Procurar por", "Número de Dígitos", "Número de Tentativas", "Timeout por Inatividade" e configurar a ação associada à marcação pelo utilizador de um destino não encontrado. Também é necessário configurar um conjunto de anúncios associados a esta opção;*
- **Serviço de registo de dados** - *É necessário configurar os pedidos de entrada de dados (máximo 3, sendo obrigatória pelo menos a primeira) com o tamanho mínimo e máximo, e os anúncios para o pedido e confirmação de dados; é necessário também configurar o número de tentativas de entrada de dados e o tipo de confirmação de entrada de dados. Por fim, também é necessário configurar um conjunto de anúncios associados a esta opção.*
- **Termina** - *a chamada é desligada após a opção;*
- **Terminar com Anúncio** - *necessário indicar qual o Anúncio com que termina a chamada após esta opção;*
- **Terminar com Texto** - *necessário indicar qual o Texto com que termina a chamada após esta opção (Funcionalidade TTS - Text To Speech);*
- **Transferir** - *necessário definir qual o número para onde é feita a transferência a chamada após esta opção;*
- **Transferir com Anúncio** - *necessário definir qual o número para onde é feita a transferência da chamada após esta opção e indicar qual o Anúncio que é ouvido antes da transferência;*
- **Transferir com Texto** - *necessário definir qual o número para onde é feita a transferência da chamada após esta opção e indicar qual o Texto que é ouvido antes da transferência (TTS);*
- **Voltar ao menu** - *permite voltar para o menu.*

No caso de o serviço "**Ouvir Anúncios do Cliente**" estar ativo é possível ouvir os anúncios clicando no botão´

As opções "**Terminar com Texto**", "**Transferir com Texto**" e "**Ditar Texto**" estão dependentes das configurações de instanciação (podem ou não estar visíveis).

Se a opção **Menu** estiver selecionada pode configurar as seguintes opções:

De notar que, é possível comutar entre uma listagem simples ou detalhada das opções configuradas.

1) A opção **Anúncio do Menu** define o anúncio que é ouvido no menu;

2) Na tabela seguinte é possível definir quais os diálogos que vão ser opções no Menu IVR:

- **Código** - *opção a marcar no telefone para escolher a ação a realizar (0 a 9);*
- **Ação** - *ação a executar quando o código respetivo é escolhido:*
  - **Encaminhar para Voicemail**
  - **Entregar a BOT**
  - **Marcação por Extensão**
  - **Marcação por Nome**
  - **Serviço de registo de dados**
  - **Termina**
  - **Terminar com Anúncio**
  - **Terminar com Texto**
  - **Transferir**
  - **Transferir com Anúncio**
  - **Transferir com Texto**
  - **Voltar ao menu**

- **Eliminar** - *permite eliminar o conjunto código/ação.*

Se a opção **Ação sem Menu** estiver selecionada o campo **Ação** será mostrado.

No campo **Ação** é possível escolher e configurar uma das seguintes ações para acontecer no sem a necessidade de interação do utilizador, substituindo o Menu:

- **Encaminhar para Voicemail**
- **Entregar a BOT**
- **Marcação por Extensão**
- **Marcação por Nome**
- **Serviço de registo de dados**
- **Terminar com Anúncio**
- **Transferir**
- **Transferir com Anúncio**

### Regras com encaminhamento horário

Na configuração de uma regra com encaminhamento horário editar os seguintes campos:

1) Nome do menu horário

2) No separador Horário configurar o horário definindo:

- **Validade da regra** - data de início e fim, ou sempre;
- **Aplicabilidade da regra** - dia da semana (segunda a domingo, feriados (incluindo os definidos pelo Gestor)) e intervalo de hora a aplicar em cada um dos dias. Se o serviço Feriados e Dias Especiais estiver ativo no Cliente, também é possível selecionar dias especiais e aplicar as respetivas regras horárias.

    Os horários definidos não se poderão sobrepor. Poderá, no entanto, haver sobreposição nos casos em que se tenha escolhido uma configuração de feriado e uma de dia da semana no mesmo intervalo do tempo (validade) e que ocorra uma situação em que esse dia da semana seja feriado - nestes casos será aplicada a configuração do dia feriado.

1) No separador Propriedades configurar um Menu ou uma Ação sem Menu, conforme descrito anteriormente.
