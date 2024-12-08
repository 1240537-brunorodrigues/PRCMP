// questions.js

const questions = [
    {
        question: "Considere a representação do número negativo -2 num computador.",
        options: [
            "Pode ser representado como número inteiro sem sinal.",
            "Pode ser representado em complemento para 2, na palavra de 8 bits: 00000010.",
            "Pode ser representado na palavra de 8 bits com sinal: -00000010.",
            "Pode ser representado em vírgula flutuante pela norma IEEE 754."
        ],
        answer: "Pode ser representado em vírgula flutuante pela norma IEEE 754."
    },
    {
        question: "Admita um programa escrito numa linguagem de programação de alto-nível.",
        options: [
            "O código-fonte desse programa é diretamente executado pelo processador.",
            "Um compilador traduz e executa o programa linha por linha.",
            "O programa executará mais depressa se compilado em vez de interpretado.",
            "Um interpretador traduz o programa para código-máquina e liga-o a código disponibilizado por bibliotecas, produzindo um ficheiro executável."
        ],
        answer: "O programa executará mais depressa se compilado em vez de interpretado."
    },
    {
        question: "De acordo com a arquitetura de von Neumann...",
        options: [
            "um computador necessita de um sistema operativo para operar eficientemente os seus recursos.",
            "as instruções e os dados de um programa em execução são armazenados em memória, embora em regiões distintas.",
            "um programa em execução tem as instruções num ficheiro e os dados em memória.",
            "não é possível a execução de múltiplos programas simultaneamente."
        ],
        answer: "um programa em execução tem as instruções num ficheiro e os dados em memória."
    },
    {
        question: "Que função não faz parte das responsabilidades de um processador (CPU)?",
        options: [
            "Armazenar os dados de um programa.",
            "Realizar operações aritméticas e lógicas.",
            "Transferir dados com a memória.",
            "Descodificar os códigos de operações (opcodes)."
        ],
        answer: "Armazenar os dados de um programa."
    },
    {
        question: "Qual a função principal da memória secundária num computador?",
        options: [
            "Armazenar dados (e.g. variáveis) para a execução imediata de programas.",
            "Permitir a comunicação entre diferentes CPU no mesmo computador.",
            "Fornecer armazenamento de longo prazo para dados e programas, mesmo quando o computador está desligado.",
            "Armazenar temporariamente na CPU os dados usados durante a execução de uma instrução."
        ],
        answer: "Fornecer armazenamento de longo prazo para dados e programas, mesmo quando o computador está desligado."
    },
    {
        question: "Qual dos seguintes aspectos não é geralmente especificado pela arquitetura do conjunto de instruções (Instruction Set Architecture, ISA)?",
        options: [
            "O conjunto de instruções suportado pela CPU.",
            "O tamanho e a organização dos registos.",
            "O formato dos códigos de operações (opcodes).",
            "O número de núcleos presentes no processador."
        ],
        answer: "O número de núcleos presentes no processador."
    },
    {
        question: "É necessário colocar a zero os 16 bits mais significativos de uma palavra de 32 bits. Uma solução é aplicar à palavra...",
        options: [
            "16 deslocamentos lógicos para a direita seguidos de 16 deslocamentos lógicos para a esquerda.",
            "a operação AND com a máscara 0x0000FFFF.",
            "a operação OR com a máscara 0x0000FFFF.",
            "a operação XOR com a máscara 0x0000FFFF."
        ],
        answer: "a operação AND com a máscara 0x0000FFFF."
    },
    {
        question: "Num sistema multiprogramado, a proteção de memória...",
        options: [
            "impede que um processo modifique a sua pilha.",
            "impede a partilha de bibliotecas ligadas dinamicamente pelos vários processos.",
            "impede que um processo modifique a sua seção de texto (ou código).",
            "isola fisicamente cada processo atribuindo-o uma CPU dedicada."
        ],
        answer: "impede que um processo modifique a sua seção de texto (ou código)."
    },
    {
        question: "A técnica de swapping permite...",
        options: [
            "ter mais do que um processo activo no computador.",
            "usar mais memória do que a memória física do computador.",
            "trocar o processo em execução pelo processador.",
            "executar processos que se encontram em memória secundária."
        ],
        answer: "usar mais memória do que a memória física do computador."
    },
    {
        question: "Quais são os principais objetivos de uma interface de utilizador num sistema operativo?",
        options: [
            "Proporcionar um ambiente de utilização visualmente apelativo.",
            "Garantir a segurança total do sistema.",
            "Minimizar o consumo de recursos do sistema.",
            "Facilitar ao utilizador o acesso às funcionalidades do sistema operativo."
        ],
        answer: "Facilitar ao utilizador o acesso às funcionalidades do sistema operativo."
    },
    {
        question: "Um programa tem que realizar uma operação num dispositivo.",
        options: [
            "O programa controla diretamente o dispositivo, após obter a sua configuração do sistema operativo.",
            "O programa controla diretamente o dispositivo, após obter autorização do sistema operativo.",
            "O programa controla diretamente o dispositivo, se o computador não tiver sistema operativo.",
            "O programa controla o dispositivo colocando a operação a realizar num endereço específico da memória."
        ],
        answer: "O programa controla diretamente o dispositivo, após obter autorização do sistema operativo."
    },
    {
        question: "Os computadores que controlam sistemas físicos (e.g. automóveis, robôs) têm requisitos não-funcionais específicos.",
        options: [
            "Têm de ser bastante responsivos na interação com o utilizador.",
            "Têm de realizar o maior número de cálculos por unidade de tempo.",
            "Têm de conseguir de lidar com um aumento no número de tarefas sem comprometer o desempenho geral.",
            "Têm de determinar resultados correctos dentro de prazos temporais estritos."
        ],
        answer: "Têm de determinar resultados correctos dentro de prazos temporais estritos."
    },
    {
        question: "Em que consiste o conceito de sistemas de partilha de tempo (time-sharing)?",
        options: [
            "“Partilha de tempo” refere-se à atribuição de recursos a cada utilizador, por intervalos de tempo fixos. Este modelo permite que utilizadores prioritários tenham sempre acesso preferencial aos recursos do sistema.",
            "“Partilha de tempo” envolve a execução de programas em sequência para garantir o desempenho máximo de cada um. Um benefício significativo é a simplicidade da gestão do sistema.",
            "“Partilha de tempo” refere-se à prática de compartilhar recursos de computação (CPU, memória, etc.) simultaneamente entre vários utilizadores. Este modelo permite que vários utilizadores interajam com o sistema ao mesmo tempo, aumentando a eficiência do sistema.",
            "“Partilha de tempo” refere-se à execução simultânea de várias instâncias idênticas de um programa. A redundância assim obtida confere maior fiabilidade em caso de falhas."
        ],
        answer: "“Partilha de tempo” refere-se à prática de compartilhar recursos de computação (CPU, memória, etc.) simultaneamente entre vários utilizadores. Este modelo permite que vários utilizadores interajam com o sistema ao mesmo tempo, aumentando a eficiência do sistema."
    },
    {
        question: "Num sistema multiprogramado, o escalonamento de processos pode beneficiar do mecanismo de preempção. Em que situações uma preempção pode ocorrer?",
        options: [
            "A preempção ocorre quando um processo atinge seu tempo máximo de execução permitido e é interrompido pela CPU para permitir que outro processo execute, garantindo que nenhum processo monopolize a CPU indefinidamente.",
            "A preempção ocorre quando um processo cede voluntariamente a CPU após a conclusão da sua execução, garantindo uma transição suave entre processos.",
            "A preempção ocorre quando um processo cede voluntariamente a CPU durante uma seção de código computacionalmente intensiva, evitando o aquecimento da CPU.",
            "A preempção ocorre quando um processo voluntariamente cede a CPU após atingir o limite de tempo máximo de execução, proporcionando uma execução justa ao conjunto de processos."
        ],
        answer: "A preempção ocorre quando um processo atinge seu tempo máximo de execução permitido e é interrompido pela CPU para permitir que outro processo execute, garantindo que nenhum processo monopolize a CPU indefinidamente."
    },
    {
        question: "Em Unix, a shell é uma interface da linha de comando que permite ao utilizador carregar e executar programas de uma forma simples. O Unix traz um conjunto de programas utilitários que realizam tarefas específicas muito frequentes.",
        options: [
            "O comando mv permite alterar o nome de um ficheiro.",
            "O comando chmod é utilizado para compactar ficheiros e directórios num formato específico.",
            "O comando cp é usado para mover ficheiros ou diretórios de uma localização para outra, eliminando o original.",
            "O comando grep é utilizado para procurar ficheiros que correspondam a um critério baseado nas propriedades dos ficheiros."
        ],
        answer: "O comando mv permite alterar o nome de um ficheiro."
    },
    {
        question: "Num sistema com escalonamento preemptivo (preemptive scheduling)...",
        options: [
            "um processo no estado Waiting pode passar para o estado Running.",
            "um processo no estado Ready pode passar para o estado Waiting.",
            "um processo no estado Running pode passar para o estado Ready.",
            "um processo no estado Running pode monopolizar o uso do processador, se não o ceder voluntariamente a outros processos."
        ],
        answer: "um processo no estado Running pode passar para o estado Ready."
    },
    {
        question: "Qual é a forma direta mais precisa (ou seja, com menor erro) de representar o número −2,6 num computador?",
        options: [
            "Número inteiro sem sinal de 32 bits.",
            "Número inteiro com sinal (complemento para 2) de 32 bits.",
            "Número em vírgula flutuante (IEEE 754) de 32 bits.",
            "Número em vírgula flutuante (IEEE 754) de 64 bits."
        ],
        answer: "Número em vírgula flutuante (IEEE 754) de 64 bits."
    },
    {
        question: "Superscalar é uma técnica de otimização do desempenho de uma CPU em que...",
        options: [
            "as três fases do ciclo fetch-decode-execute são executadas simultaneamente para uma única instrução.",
            "instruções de programas distintos são executadas simultaneamente em núcleos de processamento (cores) diferentes.",
            "se pode observar uma diminuição na taxa de instruções concluídas por unidade de tempo.",
            "duas ou mais instruções do mesmo programa são executadas simultaneamente em unidades de execução distintas da CPU."
        ],
        answer: "duas ou mais instruções do mesmo programa são executadas simultaneamente em unidades de execução distintas da CPU."
    },
    {
        question: "As linguagens de programação de alto nível surgiram na década de 1960 e evoluíram desde então. Qual das seguintes opções é uma característica fundamental das linguagens de alto nível?",
        options: [
            "São diretamente executáveis pela CPU, sem necessidade de tradução.",
            "Possuem um conjunto limitado de instruções de baixo nível para otimizar o desempenho dos programas.",
            "Exigem a escrita de código em linguagem máquina para obter maior eficiência.",
            "Oferecem uma maior abstração, permitindo que os programadores se concentrem na lógica do problema."
        ],
        answer: "Oferecem uma maior abstração, permitindo que os programadores se concentrem na lógica do problema."
    },
    {
        question: "A arquitetura de von Neumann é um modelo fundamental para a construção de computadores. Qual das seguintes opções é uma característica da arquitetura de von Neumann?",
        options: [
            "Estabelece uma separação física entre a memória de instruções e a memória de dados.",
            "Os dados e as instruções partilham espaço na mesma memória física.",
            "A execução de múltiplos programas simultaneamente em núcleos distintos.",
            "A Unidade Aritmética e Lógica coordena as operações do processador."
        ],
        answer: "Os dados e as instruções partilham espaço na mesma memória física."
    },
    {
        question: "Qual é a principal função dos registos de uma CPU num computador?",
        options: [
            "Manter um registo de eventos do sistema operativo.",
            "Facilitar a comunicação entre diferentes periféricos.",
            "Gerir o armazenamento de longo prazo no disco rígido.",
            "Armazenar temporariamente dados e instruções durante a execução de programas."
        ],
        answer: "Armazenar temporariamente dados e instruções durante a execução de programas."
    },
    {
        question: "É necessário colocar a zero os 16 bits menos significativos de uma palavra de 32 bits, deixando os restantes 16 mais significativos inalterados. Uma solução é aplicar à palavra...",
        options: [
            "16 deslocamentos lógicos para a direita seguidos de 16 deslocamentos lógicos para a esquerda.",
            "a operação lógica AND com a máscara de bits 0x0000FFFF.",
            "a operação lógica OR com a máscara de bits 0xFFFF0000.",
            "a operação lógica AND com a máscara de bits 0x00000000."
        ],
        answer: "a operação lógica AND com a máscara de bits 0xFFFF0000."
    },
    {
        question: "Os dispositivos de entrada e saída (I/O devices)...",
        options: [
            "informam o processador de que terminaram uma operação através de uma interrupção.",
            "não têm a capacidade de armazenar dados temporariamente.",
            "têm velocidades de operação semelhantes às dos processadores.",
            "são controlados diretamente pelo processador durante toda a sua operação."
        ],
        answer: "informam o processador de que terminaram uma operação através de uma interrupção."
    },
    {
        question: "Quando abordamos os termos arquitetura do conjunto de instruções (ISA) e microarquitetura...",
        options: [
            "ambos os termos referem-se ao mesmo conceito.",
            "a microarquitetura é a especificação que determina o conjunto de instruções suportado por uma família de processadores.",
            "a ISA estabelece a organização física (eletrônica) do processador.",
            "a microarquitetura consiste numa implementação física que atende aos requisitos especificados pela ISA."
        ],
        answer: "a microarquitetura consiste numa implementação física que atende aos requisitos especificados pela ISA."
    },
    {
        question: "O que caracteriza um sistema operativo multiprogramado?",
        options: [
            "Um programa tem acesso exclusivo ininterrupto à CPU.",
            "Apenas um programa é carregado na memória de cada vez.",
            "Vários programas podem residir na memória ao mesmo tempo e serem executados concorrente-mente.",
            "A execução de múltiplos programas só é possível em sistemas com múltiplos processadores."
        ],
        answer: "Vários programas podem residir na memória ao mesmo tempo e serem executados concorrente-mente."
    },
    {
        question: "Numa mudança de contexto (context switch)...",
        options: [
            "o processador para de executar as instruções de um processo para passar a executar as de outro processo.",
            "um novo processo é criado quando o programa é carregado de um ficheiro para a memória.",
            "o processo em execução é parado temporariamente para que o SO possa tratar uma interrupção de hardware.",
            "um processo é transferido da memória para o disco."
        ],
        answer: "o processador para de executar as instruções de um processo para passar a executar as de outro processo."
    },
    {
        question: "Qual a característica associada ao processamento por lotes (batch processing)?",
        options: [
            "A execução de tarefas de forma interativa em tempo real.",
            "A necessidade de uma resposta imediata do utilizador para cada tarefa.",
            "O processamento de uma sequência de tarefas sem intervenção direta do utilizador.",
            "Diversos programas intercalam a sua execução no processador ao longo do tempo."
        ],
        answer: "O processamento de uma sequência de tarefas sem intervenção direta do utilizador."
    },
    {
        question: "Uma interface de linha de comando é uma aplicação...",
        options: [
            "que, embora não integrada no kernel do sistema operativo, expõe os seus serviços ao utilizador.",
            "que corre no espaço do kernel, executando comandos ordenados pelo utilizador.",
            "tornada obsoleta pelas interfaces gráficas do utilizador, nos SO contemporâneos.",
            "que funciona apenas em linguagens de programação específicas."
        ],
        answer: "que, embora não integrada no kernel do sistema operativo, expõe os seus serviços ao utilizador."
    },
    {
        question: "Um sistema operativo atual...",
        options: [
            "deve permitir o acesso direto ao hardware às aplicações do sistema.",
            "oculta os pormenores do hardware através de um conjunto de serviços que podem ser requisitados pelas aplicações.",
            "estabelece uma interface para as aplicações, que é específica à arquitetura do sistema.",
            "requer que as aplicações coordenem entre si a utilização dos recursos da máquina."
        ],
        answer: "oculta os pormenores do hardware através de um conjunto de serviços que podem ser requisitados pelas aplicações."
    },
    {
        question: "Identifique a afirmação verdadeira, relativa à shell do Unix.",
        options: [
            "A primeira palavra numa linha de comando pode não ser um comando.",
            "O operador > (símbolo “maior”) redireciona a saída de um comando (STDOUT) para a entrada do comando seguinte (STDIN).",
            "O operador | (pipe) redireciona a saída de um comando (STDOUT) para um ficheiro novo.",
            "A saída de um comando pode ser redirecionada para a entrada do comando seguinte através do operador | (pipe)."
        ],
        answer: "A saída de um comando pode ser redirecionada para a entrada do comando seguinte através do operador | (pipe)."
    },
    {
        question: "Num sistema operativo, o termo preempção refere-se a:",
        options: [
            "A capacidade de um processo ser voluntariamente suspenso.",
            "A execução simultânea de múltiplos processos.",
            "A capacidade de um processo ser retirado da CPU involuntariamente pelo sistema operativo.",
            "O escalonamento de processos em fila."
        ],
        answer: "A capacidade de um processo ser retirado da CPU involuntariamente pelo sistema operativo."
    },
    {
        question: "Os sistemas operativos mantêm um conjunto de registos, designados por Process Control Block (PCB), que lhes possibilita a gestão dos diversos processos no sistema.",
        options: [
            "O PCB de um dado processo permite obter informação de outros processos concorrentes.",
            "O PCB de um processo não inclui a lista de ficheiros abertos.",
            "O PCB mantém o registo atualizado dos blocos de memória que o processo ocupa.",
            "Um PCB permite determinar o tempo de execução restante para a conclusão do processo."
        ],
        answer: "O PCB mantém o registo atualizado dos blocos de memória que o processo ocupa."
    },
    {
        question: "Qual é a forma direta mais precisa (i.e. com menor erro) de representar o número π num computador?",
        options: [
            "Número inteiro sem sinal de 32 bits.",
            "Número inteiro com sinal (complemento para 2) de 32 bits.",
            "Número em vírgula flutuante (IEEE 754) de 32 bits.",
            "Número em vírgula flutuante (IEEE 754) de 64 bits."
        ],
        answer: "Número em vírgula flutuante (IEEE 754) de 64 bits."
    },
    {
        question: "Multi-core é um termo que designa a tecnologia que permite que...",
        options: [
            "as três fases do ciclo fetch-decode-execute sejam executadas simultaneamente para uma única instrução.",
            "instruções de programas distintos sejam executadas simultaneamente em núcleos de processamento (cores) diferentes.",
            "permite diminuir a taxa de instruções concluídas por unidade de tempo.",
            "duas ou mais instruções do mesmo programa são executadas simultaneamente em unidades de execução distintas da CPU."
        ],
        answer: "duas ou mais instruções do mesmo programa são executadas simultaneamente em unidades de execução distintas da CPU."
    },
    {
        question: "As linguagens de programação de alto nível surgiram na década de 1960 e evoluíram desde então. Qual das seguintes opções é uma característica fundamental das linguagens de alto nível?",
        options: [
            "Necessitam de um processo intermédio de tradução para poderem ser executáveis pela CPU.",
            "Possuem um conjunto limitado de instruções de baixo nível para otimizar o desempenho dos programas.",
            "Exigem a escrita de código em linguagem máquina para obter maior eficiência.",
            "Oferecem uma menor abstração, aumentando o foco na eficiência da solução."
        ],
        answer: "Necessitam de um processo intermédio de tradução para poderem ser executáveis pela CPU."
    },
    {
        question: "A arquitetura de von Neumann é um modelo fundamental para a construção de computadores. Qual das seguintes opções é uma característica da arquitetura de von Neumann?",
        options: [
            "Estabelece uma separação física entre a memória de instruções e a memória de dados.",
            "Os dados e as instruções partilham espaço na mesma memória física.",
            "A execução de múltiplos programas simultaneamente em núcleos distintos.",
            "A Unidade Aritmética e Lógica coordena as operações do processador."
        ],
        answer: "Os dados e as instruções partilham espaço na mesma memória física."
    },
    {
        question: "Qual a função principal da memória primária num computador?",
        options: [
            "Armazenar dados e instruções para a execução imediata de programas.",
            "Permitir a comunicação de eventos assíncronos para o processador.",
            "Fornecer armazenamento de longo prazo para dados e programas, mesmo quando o computador está desligado.",
            "Armazenar temporariamente na CPU os dados usados durante a execução de uma instrução."
        ],
        answer: "Armazenar dados e instruções para a execução imediata de programas."
    },
    {
        question: "É necessário colocar a UM os 16 bits mais significativos de uma palavra de 32 bits, deixando os restantes 16 menos significativos inalterados. Uma solução é aplicar à palavra...",
        options: [
            "16 deslocamentos lógicos para a direita seguidos de 16 deslocamentos lógicos para a esquerda.",
            "a operação lógica AND com a máscara de bits 0x0000FFFF.",
            "a operação lógica OR com a máscara de bits 0xFFFF0000.",
            "a operação lógica AND com a máscara de bits 0x00000000."
        ],
        answer: "a operação lógica OR com a máscara de bits 0xFFFF0000."
    },
    {
        question: "Os dispositivos de entrada e saída (I/O devices)...",
        options: [
            "informam o processador de que terminaram uma operação através de uma interrupção.",
            "não têm a capacidade de armazenar dados temporariamente.",
            "têm velocidades de operação semelhantes às dos processadores.",
            "são controlados diretamente pelo processador durante toda a sua operação."
        ],
        answer: "informam o processador de que terminaram uma operação através de uma interrupção."
    },
    {
        question: "Quando abordamos os termos arquitetura do conjunto de instruções (ISA) e microarquitetura...",
        options: [
            "ambos os termos referem-se ao mesmo conceito.",
            "a microarquitectura é a especificação que determina o conjunto de instruções suportado por uma família de processadores.",
            "a ISA estabelece a organização física (eletrônica) do processador.",
            "a microarquitetura consiste numa implementação física que atende aos requisitos especificados pela ISA."
        ],
        answer: "a microarquitetura consiste numa implementação física que atende aos requisitos especificados pela ISA."
    },
    {
        question: "O que caracteriza um sistema operativo multiprogramado?",
        options: [
            "Executa sequencialmente um conjunto de programas, sem intervenção do utilizador.",
            "Os programas têm de responder imediatamente ao utilizador.",
            "Permite carregar e executar concorrentemente um conjunto programas.",
            "É um sistema operativo que opera exclusivamente em sistemas com múltiplos processadores."
        ],
        answer: "Permite carregar e executar concorrentemente um conjunto programas."
    },
    {
        question: "Numa mudança de contexto (context switch)...",
        options: [
            "o processador para de executar as instruções de um processo para passar a executar as de outro processo.",
            "um novo processo é criado quando o programa é carregado de um ficheiro para a memória.",
            "o processo em execução é parado temporariamente para que o SO possa tratar uma interrupção de hardware.",
            "o processo em execução é transferido da memória para o disco."
        ],
        answer: "o processador para de executar as instruções de um processo para passar a executar as de outro processo."
    },
    {
        question: "Qual a característica associada ao processamento por lotes (batch processing)?",
        options: [
            "A execução de tarefas de forma interativa em tempo real.",
            "A necessidade de uma resposta imediata do utilizador para cada tarefa.",
            "O processamento de uma sequência de tarefas sem intervenção direta do utilizador.",
            "Vários programas alternam a sua execução no processador de forma concorrente ao longo do tempo."
        ],
        answer: "O processamento de uma sequência de tarefas sem intervenção direta do utilizador."
    },
    {
        question: "Quais são os principais objetivos de uma interface de utilizador num sistema operativo?",
        options: [
            "Proporcionar um ambiente de utilização visualmente apelativo.",
            "Garantir a segurança total do sistema.",
            "Minimizar o consumo de recursos do sistema.",
            "Facilitar ao utilizador o acesso às funcionalidades do sistema operativo."
        ],
        answer: "Facilitar ao utilizador o acesso às funcionalidades do sistema operativo."
    },
    {
        question: "Um sistema operativo atual...",
        options: [
            "deve permitir o acesso direto ao hardware às aplicações do sistema.",
            "oculta os pormenores do hardware através de um conjunto de serviços que podem ser requisitados pelas aplicações.",
            "estabelece uma interface para as aplicações, que é específica à arquitetura do sistema.",
            "requer que as aplicações coordenem entre si a utilização dos recursos da máquina."
        ],
        answer: "oculta os pormenores do hardware através de um conjunto de serviços que podem ser requisitados pelas aplicações."
    },
    {
        question: "Identifique a afirmação verdadeira, relativa à shell do Unix.",
        options: [
            "A primeira palavra numa linha de comando é necessariamente um comando.",
            "O operador > (símbolo “maior”) redireciona a saída de um comando (STDOUT) para a entrada do comando seguinte (STDIN).",
            "O operador | (pipe) redireciona a saída de um comando (STDOUT) para um ficheiro novo.",
            "A comunicação entre processos realiza-se exclusivamente através de ficheiros na memória secundária."
        ],
        answer: "A primeira palavra numa linha de comando é necessariamente um comando."
    },
    {
        question: "Num sistema operativo, o termo preempção refere-se a:",
        options: [
            "Um processo em execução cede voluntariamente a CPU.",
            "Um processo é interrompido para que o sistema operativo possa lidar com um evento assíncrono.",
            "A suspensão automática de um processo em execução pelo sistema operativo, permitindo a atribuição da CPU a outro processo.",
            "O processo em execução é transferido da RAM para a memória secundária."
        ],
        answer: "A suspensão automática de um processo em execução pelo sistema operativo, permitindo a atribuição da CPU a outro processo."
    },
    {
        question: "Os computadores que controlam sistemas físicos (e.g. automóveis, robôs) têm requisitos não-funcionais específicos.",
        options: [
            "Têm de ser bastante responsivos na interação com o utilizador.",
            "Têm de realizar o maior número de cálculos por unidade de tempo.",
            "Têm de conseguir de lidar com um aumento no número de tarefas sem comprometer o desempenho geral.",
            "Têm de determinar resultados correctos dentro de prazos temporais estritos."
        ],
        answer: "Têm de determinar resultados correctos dentro de prazos temporais estritos."
    },
    {
        question: "Admita que tem um ficheiro de texto com um programa escrito numa determinada linguagem de programação de alto-nível.",
        options: [
            "As instruções nesse ficheiro podem ser imediatamente executadas pelo processador.",
            "Se a linguagem de programação for interpretada, será sempre necessário ter um interpretador específico à linguagem de programação para executar o programa.",
            "Um compilador específico para essa linguagem de programação irá executar as instruções em código-máquina, necessárias para levar a cabo cada instrução do programa.",
            "Um interpretador específico à linguagem de programação irá traduzir o código-fonte, produzindo um ficheiro executável em código-máquina."
        ],
        answer: "Se a linguagem de programação for interpretada, será sempre necessário ter um interpretador específico à linguagem de programação para executar o programa."
    },
    {
        question: "Os constituintes básicos de um processador são a Unidade de Controlo, a Unidade Aritmética e Lógica, e os registos.",
        options: [
            "A Unidade Aritmética e Lógica é responsável pelas operações de acesso à memória.",
            "Os registos são de uso exclusivo da Unidade de Controlo.",
            "Os registos são de uso exclusivo da Unidade Aritmética e Lógica.",
            "A Unidade de Controlo é responsável pela descodificação do código da instrução (opcode) a executar de seguida."
        ],
        answer: "A Unidade de Controlo é responsável pela descodificação do código da instrução (opcode) a executar de seguida."
    },
    {
        question: "Observe a seguinte representação de um valor inteiro em 8 bits: 10001100.",
        options: [
            "Se for uma representação com sinal em complemento para 2, este número é negativo.",
            "Se for uma representação sem sinal, este número é negativo.",
            "Se for uma representação com sinal em complemento para 2, este número é positivo.",
            "Se for uma representação sem sinal, é impossível determinar se o número é positivo ou negativo."
        ],
        answer: "Se for uma representação com sinal em complemento para 2, este número é negativo."
    },
    {
        question: "Na arquitetura de Von Neumann...",
        options: [
            "o subsistema de memória é composto por memória principal (e.g., ROM, RAM) e memória secundária (e.g., discos, fitas magnéticas, memória flash).",
            "o processador executa instruções diretamente obtidas do disco.",
            "o processador é fabricado com o programa já implementado na sua construção.",
            "as instruções e os dados de um programa em execução coabitam em memória."
        ],
        answer: "as instruções e os dados de um programa em execução coabitam em memória."
    },
    {
        question: "Qual a função principal da memória primária num computador?",
        options: [
            "Armazenar dados e instruções para a execução imediata de programas.",
            "Permitir a comunicação de eventos assíncronos para o processador.",
            "Fornecer armazenamento de longo prazo para dados e programas, mesmo quando o computador está desligado.",
            "Armazenar temporariamente na CPU os dados usados durante a execução de uma instrução."
        ],
        answer: "Armazenar dados e instruções para a execução imediata de programas."
    },
    {
        question: "É necessário colocar a UM os 16 bits mais significativos de uma palavra de 32 bits, deixando os restantes 16 menos significativos inalterados. Uma solução é aplicar à palavra...",
        options: [
            "16 deslocamentos lógicos para a direita seguidos de 16 deslocamentos lógicos para a esquerda.",
            "a operação lógica AND com a máscara de bits 0x0000FFFF.",
            "a operação lógica OR com a máscara de bits 0xFFFF0000.",
            "a operação lógica AND com a máscara de bits 0x00000000."
        ],
        answer: "a operação lógica OR com a máscara de bits 0xFFFF0000."
    },
    {
        question: "Os dispositivos de entrada e saída (I/O devices)...",
        options: [
            "informam o processador de que terminaram uma operação através de uma interrupção.",
            "não têm a capacidade de armazenar dados temporariamente.",
            "têm velocidades de operação semelhantes às dos processadores.",
            "são controlados diretamente pelo processador durante toda a sua operação."
        ],
        answer: "informam o processador de que terminaram uma operação através de uma interrupção."
    },
    {
        question: "Quando abordamos os termos arquitetura do conjunto de instruções (ISA) e microarquitetura...",
        options: [
            "ambos os termos referem-se ao mesmo conceito.",
            "a microarquitectura é a especificação que determina o conjunto de instruções suportado por uma família de processadores.",
            "a ISA estabelece a organização física (eletrônica) do processador.",
            "a microarquitetura consiste numa implementação física que atende aos requisitos especificados pela ISA."
        ],
        answer: "a microarquitetura consiste numa implementação física que atende aos requisitos especificados pela ISA."
    },
    {
        question: "O que caracteriza um sistema operativo multiprogramado?",
        options: [
            "Executa sequencialmente um conjunto de programas, sem intervenção do utilizador.",
            "Os programas têm de responder imediatamente ao utilizador.",
            "Permite carregar e executar concorrentemente um conjunto programas.",
            "É um sistema operativo que opera exclusivamente em sistemas com múltiplos processadores."
        ],
        answer: "Permite carregar e executar concorrentemente um conjunto programas."
    },
    {
        question: "Numa mudança de contexto (context switch)...",
        options: [
            "o processador para de executar as instruções de um processo para passar a executar as de outro processo.",
            "um novo processo é criado quando o programa é carregado de um ficheiro para a memória.",
            "o processo em execução é parado temporariamente para que o SO possa tratar uma interrupção de hardware.",
            "o processo em execução é transferido da memória para o disco."
        ],
        answer: "o processador para de executar as instruções de um processo para passar a executar as de outro processo."
    },
    {
        question: "Qual a característica associada ao processamento por lotes (batch processing)?",
        options: [
            "A execução de tarefas de forma interativa em tempo real.",
            "A necessidade de uma resposta imediata do utilizador para cada tarefa.",
            "O processamento de uma sequência de tarefas sem intervenção direta do utilizador.",
            "Vários programas alternam a sua execução no processador de forma concorrente ao longo do tempo."
        ],
        answer: "O processamento de uma sequência de tarefas sem intervenção direta do utilizador."
    },
    {
        question: "Quais são os principais objetivos de uma interface de utilizador num sistema operativo?",
        options: [
            "Proporcionar um ambiente de utilização visualmente apelativo.",
            "Garantir a segurança total do sistema.",
            "Minimizar o consumo de recursos do sistema.",
            "Facilitar ao utilizador o acesso às funcionalidades do sistema operativo."
        ],
        answer: "Facilitar ao utilizador o acesso às funcionalidades do sistema operativo."
    },
    {
        question: "Um sistema operativo atual...",
        options: [
            "deve permitir o acesso direto ao hardware às aplicações do sistema.",
            "oculta os pormenores do hardware através de um conjunto de serviços que podem ser requisitados pelas aplicações.",
            "estabelece uma interface para as aplicações, que é específica à arquitetura do sistema.",
            "requer que as aplicações coordenem entre si a utilização dos recursos da máquina."
        ],
        answer: "oculta os pormenores do hardware através de um conjunto de serviços que podem ser requisitados pelas aplicações."
    },
    {
        question: "Identifique a afirmação verdadeira, relativa à shell do Unix.",
        options: [
            "A primeira palavra numa linha de comando é necessariamente um comando.",
            "O operador > (símbolo “maior”) redireciona a saída de um comando (STDOUT) para a entrada do comando seguinte (STDIN).",
            "O operador | (pipe) redireciona a saída de um comando (STDOUT) para um ficheiro novo.",
            "A comunicação entre processos realiza-se exclusivamente através de ficheiros na memória secundária."
        ],
        answer: "A primeira palavra numa linha de comando é necessariamente um comando."
    },
    {
        question: "Num sistema operativo, o termo preempção refere-se a:",
        options: [
            "Um processo em execução cede voluntariamente a CPU.",
            "Um processo é interrompido para que o sistema operativo possa lidar com um evento assíncrono.",
            "A suspensão automática de um processo em execução pelo sistema operativo, permitindo a atribuição da CPU a outro processo.",
            "O processo em execução é transferido da RAM para a memória secundária."
        ],
        answer: "A suspensão automática de um processo em execução pelo sistema operativo, permitindo a atribuição da CPU a outro processo."
    },
    {
        question: "Os computadores que controlam sistemas físicos (e.g. automóveis, robôs) têm requisitos não-funcionais específicos.",
        options: [
            "Têm de ser bastante responsivos na interação com o utilizador.",
            "Têm de realizar o maior número de cálculos por unidade de tempo.",
            "Têm de conseguir de lidar com um aumento no número de tarefas sem comprometer o desempenho geral.",
            "Têm de determinar resultados correctos dentro de prazos temporais estritos."
        ],
        answer: "Têm de determinar resultados correctos dentro de prazos temporais estritos."
    },
    {
        question: "A norma IEEE 754 permite...",
        options: [
            "representar conjuntos de caracteres que permitem formar texto.",
            "representar número inteiro com sinal, com uma única representação do valor zero.",
            "representar número inteiro com sinal, havendo duas representações para o valor zero.",
            "representar números reais com sinal em vírgula flutuante."
        ],
        answer: "representar números reais com sinal em vírgula flutuante."
    },
    {
        question: "Relativamente a uma sistema computacional de 64 bits, qual das seguintes afirmações é falsa?",
        options: [
            "Os registos de uso genérico da CPU têm largura de 64 bits.",
            "A Unidade Aritmética-Lógica está construída para operar palavras de 64 bits.",
            "A maior representação possível de um valor inteiro tem 64 bits.",
            "Permite endereços de memória com largura de 64 bits."
        ],
        answer: "Permite endereços de memória com largura de 64 bits."
    },
    {
        question: "Observe a seguinte representação de um valor inteiro de 8 bits: 10001100.",
        options: [
            "Se for uma representação em complemento para 2, este número é positivo.",
            "Se for uma representação em sinal e grandeza, este número é positivo.",
            "Se for uma representação sem sinal, este número é negativo.",
            "Se for uma representação sem sinal, este número é positivo."
        ],
        answer: "Se for uma representação sem sinal, este número é positivo."
    },
    {
        question: "Uma CPU com tecnologia (otimização) superescalar permite executar...",
        options: [
            "instruções de programas distintos, em paralelo, em unidades de execução distintas.",
            "múltiplas instruções do mesmo programa, em paralelo, em unidades de execução distintas.",
            "as três fases do ciclo fetch-decode-execute em paralelo, para uma única instrução.",
            "múltiplas instruções do mesmo programa, em paralelo, na mesma unidade de execução."
        ],
        answer: "múltiplas instruções do mesmo programa, em paralelo, em unidades de execução distintas."
    },
    {
        question: "Nas operações lógicas binárias com cadeias de bits (bitwise operations)...",
        options: [
            "o operador AND é seleccionado para forçar o bit UM (1) em determinadas posições da cadeia.",
            "o operador OR é seleccionado para forçar o bit UM (1) em determinadas posições da cadeia.",
            "o operador NOT é seleccionado para negar os bits em determinadas posições da cadeia.",
            "o operador XOR é seleccionado para forçar o bit ZERO (0) em determinadas posições da cadeia."
        ],
        answer: "o operador OR é seleccionado para forçar o bit UM (1) em determinadas posições da cadeia."
    },
    {
        question: "Há dois tipos de operações na memória principal: leitura e escrita.",
        options: [
            "A memória ROM não permite operações de escrita.",
            "Uma operação de escrita na RAM conserva o conteúdo nos endereços acedidos.",
            "Uma operação de leitura na RAM destrói o conteúdo nos endereços acedidos.",
            "Uma operação de acesso à memória, quer seja de leitura ou de escrita, destrói o conteúdo nos endereços acedidos."
        ],
        answer: "A memória ROM não permite operações de escrita."
    },
    {
        question: "Suponha dois processadores de fabricantes diferentes.",
        options: [
            "Os dois processadores só podem suportar a mesma arquitetura do conjunto de instruções (ISA) se forem exatamente iguais.",
            "Os dois processadores podem suportar a mesma arquitetura do conjunto de instruções (ISA) mesmo tendo microarquiteturas diferentes.",
            "Para suportarem a mesma arquitetura do conjunto de instruções (ISA), é necessário que ambos os processadores apresentem a mesma configuração de caches.",
            "Os dois processadores podem implementar a mesma arquitetura do conjunto de instruções (ISA), e apresentar conjuntos de registos diferentes."
        ],
        answer: "Os dois processadores podem suportar a mesma arquitetura do conjunto de instruções (ISA) mesmo tendo microarquiteturas diferentes."
    },
    {
        question: "Identifique a afirmação falsa.",
        options: [
            "Uma interface da linha de comandos (a shell, por exemplo) é uma aplicação que permite ao utilizador invocar serviços do sistema operativo de forma simples.",
            "O núcleo (ou kernel) do sistema operativo estabelece uma camada de abstração do hardware que impede as aplicações de acederem directamente os dispositivos do sistema.",
            "O kernel gere todos os recursos do sistema, seguindo estratégias para uma utilização eficaz do sistema.",
            "O sistema operativo expõe o hardware às aplicações, que podem aceder directamente aos controladores dos dispositivos."
        ],
        answer: "O sistema operativo expõe o hardware às aplicações, que podem aceder directamente aos controladores dos dispositivos."
    },
    {
        question: "Numa mudança de contexto...",
        options: [
            "um novo processo é criado, e o código do programa é carregado de um ficheiro para a memória.",
            "o processador suspende temporariamente a execução de um processo para executar código do kernel para atender uma interrupção de hardware.",
            "o processador para de executar as instruções de um processo para passar a executar as instruções de outro processo.",
            "um processo é transferido do disco para a memória."
        ],
        answer: "o processador para de executar as instruções de um processo para passar a executar as instruções de outro processo."
    },
    {
        question: "Identifique a afirmação falsa, relativa à shell do Unix.",
        options: [
            "Numa linha de comando, a primeira palavra é o nome do comando.",
            "O operador > (símbolo “maior”) redireciona a saída de um comando (STDOUT) para a entrada do comando seguinte (STDIN).",
            "O comando ls permite visualizar os conteúdos de um diretório, sendo possível filtrar os resultados pelo nome.",
            "O comando rm permite apagar ficheiros do sistema de ficheiros."
        ],
        answer: "O operador > (símbolo “maior”) redireciona a saída de um comando (STDOUT) para a entrada do comando seguinte (STDIN)."
    },
    {
        question: "Um sistema operativo multiprogramado/multitarefa...",
        options: [
            "executa os programas em sequência, do primeiro até ao último.",
            "não tem o seu desempenho limitado pela capacidade de memória RAM.",
            "caracteriza-se por intercalar no tempo a execução de vários programas pelo processador.",
            "não é indicado para conjuntos de aplicações com muitas operações de I/O."
        ],
        answer: "caracteriza-se por intercalar no tempo a execução de vários programas pelo processador."
    },
    {
        question: "O Process Control Block (PCB) é a estrutura de dados em que um sistema operativo guarda toda a informação relevante de um processo. Qual a afirmação falsa?",
        options: [
            "O PCB permite determinar quais os ficheiros que o processo tem abertos.",
            "O PCB permite obter informação de outros processos concorrentes.",
            "O PCB mantém o registo atual dos blocos de memória que o processo ocupa.",
            "O PCB regista o tempo de execução do processador já utilizado pelo processo."
        ],
        answer: "O PCB permite obter informação de outros processos concorrentes."
    },
    {
        question: "A gestão de memória é um conjunto de técnicas fundamentais para manter a integridade e eficácia de um sistema multiprogramado.",
        options: [
            "A proteção de memória impede que o sistema operativo remova um processo da RAM para o disco.",
            "A técnica de swapping permite que um processo possa alterar as suas instruções durante a execução.",
            "O espaço de memória de cada processo é dividido em páginas do mesmo tamanho. O kernel mantém um registo da localização de cada página, que pode estar na memória principal ou na memória secundária.",
            "A técnica de swapping impede que um processo possa alterar as suas instruções durante a execução."
        ],
        answer: "A técnica de swapping permite que um processo possa alterar as suas instruções durante a execução."
    },
    {
        question: "Num sistema com escalonamento sem preempção um processo termina a sua execução.",
        options: [
            "O processo passa do estado Running para o estado Waiting.",
            "O escalonador selecciona um processo no estado Waiting para executar a seguir.",
            "O escalonador selecciona um processo no estado Running para executar a seguir.",
            "O processo encontrava-se no estado Running antes de terminar."
        ],
        answer: "O processo passa do estado Running para o estado Waiting."
    },
    {
        question: "Num sistema com escalonamento preventivo (preemptive scheduling )...",
        options: [
            "um processo no estado Ready pode passar para o estado Waiting.",
            "um processo no estado Waiting pode passar para o estado Running.",
            "um processo no estado Running pode passar para o estado Ready.",
            "um processo no estado Running pode monopolizar o uso do processador, se não o ceder voluntariamente a outros processos."
        ],
        answer: "um processo no estado Running pode passar para o estado Ready."
    },
    {
        question: "Num sistema com escalonamento não preventivo (non preemptive), quando termina uma operação I/O solicitada por um processo, o estado do processo...",
        options: [
            "passa para Terminated.",
            "passa para Ready.",
            "passa para Running.",
            "mantém-se em Waiting."
        ],
        answer: "passa para Ready."
    },
    {
        question: "Um sistema tem 8 CPU exatamente iguais (simétricos) num chip (multicore). Qual a afirmação falsa?",
        options: [
            "Este sistema pode executar, no máximo, 8 processos em paralelo.",
            "Um CPU pode aceder e alterar os registos de outro CPU.",
            "Este sistema pode ter muitos (mais de 8) processos concorrentes em simultâneo, sendo as suas execuções intercaladas no tempo, nos núcleos disponíveis.",
            "Todos os CPU concorrem no acesso aos restantes recursos do sistema."
        ],
        answer: "Um CPU pode aceder e alterar os registos de outro CPU."
    },
    {
        question: "Qual é a operação que não é necessariamente realizada durante uma mudança de contexto (context switch)?",
        options: [
            "Copiar os valores dos registos do processador para o bloco de controlo (Process Control Block, PCB) do processo que estava a ser executado (Running ).",
            "Admitir um processo novo (New ) para o conjunto de processos prontos (Ready ).",
            "Seleccionar o próximo processo a executar, do conjunto de processos prontos (Ready ).",
            "Restaurar os valores nos registos do processador a partir do bloco de controlo (Process Control Block, PCB) do processo que foi escalonado para execução."
        ],
        answer: "Admitir um processo novo (New ) para o conjunto de processos prontos (Ready )."
    },
    {
        question: "Assuma dois processadores de fabricantes diferentes.",
        options: [
            "Os dois processadores só podem suportar a mesma arquitetura do conjunto de instruções (ISA) se forem exatamente iguais.",
            "Os dois processadores podem suportar a mesma arquitetura do conjunto de instruções (ISA) mesmo tendo microarquiteturas diferentes.",
            "Para suportarem a mesma arquitetura do conjunto de instruções (ISA), é necessário que ambos os processadores apresentem a mesma configuração de caches.",
            "Os dois processadores podem implementar a mesma arquitetura do conjunto de instruções (ISA), e apresentar conjuntos de registos diferentes."
        ],
        answer: "Os dois processadores podem suportar a mesma arquitetura do conjunto de instruções (ISA) mesmo tendo microarquiteturas diferentes."
    },
    {
        question: "Admita que tem um ficheiro de texto com um programa escrito numa determinada linguagem de programação de alto-nível.",
        options: [
            "As instruções nesse ficheiro podem ser imediatamente executadas pelo processador.",
            "Se a linguagem de programação for interpretada, será sempre necessário ter um compilador específico a linguagem de programação para executar o programa linha-a-linha.",
            "Um compilador específico para essa linguagem de programação irá executar as instruções em código-máquina, necessárias para levar a cabo cada instrução do programa.",
            "Um compilador específico a linguagem de programação irá traduzir o código-fonte, produzindo um ficheiro executável em código-máquina."
        ],
        answer: "Um compilador específico a linguagem de programação irá traduzir o código-fonte, produzindo um ficheiro executável em código-máquina."
    },
    {
        question: "Os constituintes básicos de um processador são a Unidade de Controlo, a Unidade Aritmética e Lógica, e os registos.",
        options: [
            "A Unidade de Controlo realiza as operações lógicas.",
            "Os registos são de uso exclusivo da Unidade de Controlo.",
            "Os registos são de uso exclusivo da Unidade Aritmética e Lógica.",
            "Os registos de uso geral são partilhados pela Unidade de Controlo e pela Unidade Aritmética e Lógica."
        ],
        answer: "Os registos de uso geral são partilhados pela Unidade de Controlo e pela Unidade Aritmética e Lógica."
    },
    {
        question: "Observe a seguinte representação de um valor inteiro em 8 bits: 10001100.",
        options: [
            "Se for uma representação com sinal em complemento para 2, este número é negativo.",
            "Se for uma representação sem sinal, este número é negativo.",
            "Se for uma representação com sinal em complemento para 2, este número é positivo.",
            "Se for uma representação sem sinal, é impossível determinar se o número é positivo ou negativo."
        ],
        answer: "Se for uma representação com sinal em complemento para 2, este número é negativo."
    },
    {
        question: "Na arquitetura de Von Neumann...",
        options: [
            "a memória ROM faz parte do subsistema de I/O.",
            "o processador executa instruções directamente obtidas do disco.",
            "o processador é fabricado com o programa já implementado na sua construção.",
            "as instruções e os dados de um programa em execução coabitam em memória."
        ],
        answer: "as instruções e os dados de um programa em execução coabitam em memória."
    },
    {
        question: "A proteção de memória é muito importante em sistemas multiprogramados, porque...",
        options: [
            "impede que um processo aceda as instruções e dados de outro processo.",
            "impede que o sistema operativo remova um processo da RAM para o disco.",
            "evita que os processos possam partilhar bibliotecas ligadas dinamicamente.",
            "previne que um processo altere as suas instruções e dados."
        ],
        answer: "impede que um processo aceda as instruções e dados de outro processo."
    },
    {
        question: "Num computador, dois processos concorrem para operar o mesmo dispositivo (e.g., um disco) praticamente ao mesmo tempo.",
        options: [
            "O sistema operativo disponibiliza a configuração do dispositivo, e os processos coordenam entre si as operações do dispositivo.",
            "Todos os pedidos de operação são aceites pelo sistema operativo, que os organiza e executa (em nome dos processos) de acordo pela ordem que definir.",
            "Os processos acessam diretamente ao dispositivo. O dispositivo organiza autonomamente as operações concorrentes solicitadas pelos processos.",
            "Todos os pedidos de operação são aceites pelo sistema operativo, que os organiza. Após estabelecida uma ordem, cada processo opera diretamente o dispositivo."
        ],
        answer: "Todos os pedidos de operação são aceites pelo sistema operativo, que os organiza e executa (em nome dos processos) de acordo pela ordem que definir."
    },
    {
        question: "O processamento por lotes (batch processing )...",
        options: [
            "é ideal para trabalhos interativos.",
            "é utilizado, por exemplo, em supercomputadores para correr longos trabalhos não-interativos.",
            "já caiu em desuso, não sendo atualmente utilizado.",
            "é o modelo utilizado nos sistemas computacionais que controlam automaticamente outros sistemas físicos (processos industriais, sistemas automotivos, sistemas médicos, etc.)."
        ],
        answer: "é utilizado, por exemplo, em supercomputadores para correr longos trabalhos não-interativos."
    },
    {
        question: "Quando um computador é iniciado, o processador vai sempre buscar a primeira instrução para executar...",
        options: [
            "a um sector específico no primeiro disco do sistema.",
            "ao endereço da última instrução executada, antes de ter sido desligado/reiniciado.",
            "a um endereço específico, em memória ROM.",
            "a um endereço específico, em memória RAM."
        ],
        answer: "a um endereço específico, em memória ROM."
    },
    {
        question: "A técnica de swapping permite...",
        options: [
            "parar a execução de um processo, cedendo a CPU a um outro processo Ready com maior prioridade.",
            "parar a execução de um processo que pediu uma operação de I/O, cedendo a CPU a um outro processo Ready.",
            "libertar memória RAM transferindo (parcial ou totalmente) um processo da RAM principal para a memória secundária.",
            "libertar memória RAM transferindo (parcial ou totalmente) da RAM para a memória secundária, o processo que está a ser executado pela CPU."
        ],
        answer: "libertar memória RAM transferindo (parcial ou totalmente) um processo da RAM principal para a memória secundária."
    },
    {
        question: "Qual é a operação que não é necessariamente realizada durante uma mudança de contexto (context switch)?",
        options: [
            "Copiar os valores dos registos do processador para o bloco de controlo (Process Control Block, PCB) do processo que estava a ser executado (Running ).",
            "Admitir um processo novo (New ) para o conjunto de processos prontos (Ready ).",
            "Seleccionar o próximo processo a executar, do conjunto de processos prontos (Ready ).",
            "Restaurar os valores nos registos do processador a partir do bloco de controlo (Process Control Block, PCB) do processo que foi escalonado para execução."
        ],
        answer: "Admitir um processo novo (New ) para o conjunto de processos prontos (Ready )."
    },
    {
        question: "Assuma dois processadores P1 e P2 substancialmente diferentes um do outro, nomeadamente no número de componentes eletrônicos que cada um indica ter. Ambos implementam a mesma arquitetura do conjunto de instruções (Instruction Set Architecture, ISA). Qual das seguintes afirmações é falsa?",
        options: [
            "Ambos os processadores são capazes de executar o mesmo código-máquina, produzindo os mesmos resultados.",
            "Os diferentes números de componentes refletem diferenças nas decisões de projeto, devidas a vários tipos de otimizações como, por exemplo, desempenho, caches, uso de energia ou preço.",
            "O conjunto de registos do processador P1 é exatamente igual ao conjunto de registos do processador P2.",
            "O menor número de componentes de um dos processadores significa que nem todas as instruções da arquitetura estão implementadas em hardware, tendo que ser emuladas por software."
        ],
        answer: "O conjunto de registos do processador P1 é exatamente igual ao conjunto de registos do processador P2."
    },
    {
        question: "Em Unix, a shell é uma interface da linha de comando que permite ao utilizador carregar e executar programas de uma forma simples. O Unix traz um conjunto de programas utilitários que realizam tarefas específicas muito frequentes. Qual das seguintes afirmações é falsa?",
        options: [
            "O comando chmod é utilizado para redefinir as permissões de acesso a um ficheiro para os vários tipos de utilizador.",
            "O comando find localiza e apresenta uma expressão regular no interior de ficheiros de texto.",
            "O comando fg traz para primeiro plano (foreground) um processo que está a correr em segundo plano (background).",
            "O comando mv permite alterar o nome de um ficheiro."
        ],
        answer: "O comando find localiza e apresenta uma expressão regular no interior de ficheiros de texto."
    },
    {
        question: "Um shell script é um programa interpretado pela interface da linha de comando...",
        options: [
            "escrito em assembly, para resolver problemas de caráter genérico.",
            "desenvolvido numa linguagem de alto nível, muito prático para automatizar tarefas de manutenção do sistema.",
            "desenvolvido numa linguagem de alto nível, sobretudo para resolver problemas de computação numérica.",
            "que é utilizado para carregar o sistema operativo no arranque do computador."
        ],
        answer: "desenvolvido numa linguagem de alto nível, muito prático para automatizar tarefas de manutenção do sistema."
    },
    {
        question: "Os computadores digitais contemporâneos operam exclusivamente símbolos binários.",
        options: [
            "A conversão de um inteiro decimal para binário pode resultar numa representação inexacta (i.e. com erro).",
            "Um número racional com representação finita em decimal é sempre convertido num número racional também com representação finita em binário. Desta forma, não há introdução de erro desde que haja um número de bits suficientes.",
            "Um número racional com representação finita em decimal pode ser convertido num número racional com representação infinita periódica em binário. Neste caso, há introdução de erro porque não há um número de bits suficientes para representar o valor de forma exacta.",
            "Um número racional tem de ser convertido em número inteiro, pois não é existe representação para a vírgula decimal num computador."
        ],
        answer: "Um número racional com representação finita em decimal pode ser convertido num número racional com representação infinita periódica em binário. Neste caso, há introdução de erro porque não há um número de bits suficientes para representar o valor de forma exacta."
    },
    {
        question: "Num sistema com escalonamento preventivo (preemptive scheduling )...",
        options: [
            "um processo no estado Running pode passar para o estado Waiting.",
            "um processo no estado Waiting pode passar para o estado Running.",
            "um processo no estado Ready pode passar para o estado Terminated.",
            "um processo no estado Running pode monopolizar o uso do processador, se não o ceder voluntariamente a outros processos."
        ],
        answer: "um processo no estado Running pode passar para o estado Waiting."
    },
    {
        question: "Considere um sistema com escalonamento não-preventivo (non preemptive). Quando um processo solicita uma operação I/O...",
        options: [
            "o seu estado passa para Terminated.",
            "o seu estado continua em Running, ficando o processador parado (idle) durante todo o tempo da operação I/O.",
            "o seu estado passa para Ready e o processador fica parado (idle) se não houver outros processos prontos para executar.",
            "o seu estado passa para Waiting e o processador é cedido a outro processo que se encontre pronto para executar."
        ],
        answer: "o seu estado passa para Waiting e o processador é cedido a outro processo que se encontre pronto para executar."
    },
    {
        question: "O assembler é uma ferramenta que...",
        options: [
            "traduz um programa numa linguagem de alto-nível para linguagem-máquina.",
            "traduz um programa numa linguagem de alto-nível para assembly.",
            "traduz um programa em assembly para linguagem-máquina.",
            "interpreta e executa linha-a-linha um programa numa linguagem de alto-nível."
        ],
        answer: "traduz um programa em assembly para linguagem-máquina."
    },
    {
        question: "A instruction pipelining é uma técnica de otimização do desempenho de uma CPU em que se...",
        options: [
            "executam as três fases do ciclo fetch-decode-execute em paralelo, para uma única instrução.",
            "executam duas ou mais instruções em paralelo, em unidades de execução distintas.",
            "executam duas ou mais instruções em paralelo, em núcleos de processamento (cores) distintos.",
            "executam as três fases do ciclo fetch-decode-execute em paralelo, para três instruções consecutivas."
        ],
        answer: "executam as três fases do ciclo fetch-decode-execute em paralelo, para uma única instrução."
    },
    {
        question: "Utiliza-se a representação em complemento para 2...",
        options: [
            "para representar números com sinal em vírgula flutuante.",
            "para representar números inteiros com sinal, com uma única representação do valor zero.",
            "para representar números inteiros com sinal, havendo duas representações para o valor zero.",
            "para representar os valores lógicos verdadeiro e falso."
        ],
        answer: "para representar números inteiros com sinal, com uma única representação do valor zero."
    },
    {
        question: "Na arquitetura de Von Neumann...",
        options: [
            "os discos fazem parte do subsistema de memória.",
            "o processador pode comunicar com todos os outros subsistemas através de um barramento.",
            "não existe ligação direta entre o subsistema de I/O e o subsistema de memória.",
            "o programa é implementado através de ligações elétricas, estabelecendo a sequência de circuitos aritméticos pretendida."
        ],
        answer: "o processador pode comunicar com todos os outros subsistemas através de um barramento."
    },
    {
        question: "Um sistema operativo atual...",
        options: [
            "permite que o hardware possa ser diretamente acedido pelas aplicações.",
            "oculta os pormenores do hardware através de um conjunto de serviços que são oferecidos às aplicações.",
            "estabelece uma interface para as aplicações, que é específica à arquitetura do sistema.",
            "requer que as aplicações coordenem entre si a utilização dos recursos da máquina."
        ],
        answer: "oculta os pormenores do hardware através de um conjunto de serviços que são oferecidos às aplicações."
    },
    {
        question: "No processamento por lotes (batch processing)...",
        options: [
            "o operador carrega manualmente cada programa, após o programa anterior terminar.",
            "existe uma boa utilização da capacidade de processamento.",
            "o programa e os dados são fornecidos pelo utilizador, previamente à execução do programa.",
            "vários programas intercalam no tempo a sua execução no processador."
        ],
        answer: "existe uma boa utilização da capacidade de processamento."
    },
    {
        question: "Um sistema operativo multitarefa...",
        options: [
            "caracteriza-se por intercalar no tempo a execução de vários programas pelo processador.",
            "executa os programas em sequência, do primeiro até ao último.",
            "não tem o seu desempenho limitado pela capacidade de memória RAM.",
            "não é indicado para sistemas que executem aplicações com muitas operações de I/O."
        ],
        answer: "caracteriza-se por intercalar no tempo a execução de vários programas pelo processador."
    },
    {
        question: "Uma interface de linha de comando é uma aplicação...",
        options: [
            "que corre no espaço do kernel, executando comandos ordenados pelo utilizador.",
            "que não faz parte do kernel do SO, mas que expõe os serviços do SO ao utilizador.",
            "tornada obsoleta pelas interfaces gráficas do utilizador, nos SO contemporâneos.",
            "que não permite a interação do computador com o utilizador."
        ],
        answer: "que não faz parte do kernel do SO, mas que expõe os serviços do SO ao utilizador."
    },
    {
        question: "A memória ROM (nas suas várias tecnologias)...",
        options: [
            "é utilizada pelo SO para carregar o código e os dados dos programas solicitados pelos utilizadores.",
            "existe exclusivamente em sistemas dedicados que executam sempre a mesma função.",
            "deixou de ser utilizada por apresentar tempos de acesso maiores do que a memória RAM.",
            "tem habitualmente o código que arranca o sistema."
        ],
        answer: "tem habitualmente o código que arranca o sistema."
    },
    {
        question: "Um sistema distribuído é composto...",
        options: [
            "por vários processadores que partilham recursos através de um barramento comum.",
            "por vários computadores geridos de uma forma centralizada, que executam cada um parte de uma aplicação e comunicam através de uma rede de comunicações.",
            "por um computador que se conecta aos seus periféricos através de uma rede sem-fios.",
            "por vários computadores que cooperam entre si, executando cada um parte de uma aplicação e comunicando através de uma rede de comunicações."
        ],
        answer: "por vários computadores que cooperam entre si, executando cada um parte de uma aplicação e comunicando através de uma rede de comunicações."
    },
    {
        question: "A técnica de swaping permite...",
        options: [
            "libertar memória às custas de um processo que é enviado parcial ou totalmente da memória principal para o disco.",
            "libertar memória enviando parcial ou totalmente da memória principal para o disco, o processo que está no estado Running.",
            "retirar da CPU um processo para executar outro processo Ready com maior prioridade.",
            "retirar da CPU um processo que pediu uma operação de I/O, para executar outro processo Ready."
        ],
        answer: "libertar memória às custas de um processo que é enviado parcial ou totalmente da memória principal para o disco."
    },
    {
        question: "Os SO mantêm um conjunto de registos que lhes permite gerir os vários processos presentes no sistema. O registo de um dado processo, conhecido por Process Control Block (PCB)...",
        options: [
            "permite obter informação de outros processos concorrentes.",
            "não permite determinar quais os ficheiros que o processo tem abertos.",
            "mantém o registo atual dos blocos de memória que o processo ocupa.",
            "permite saber quanto tempo de execução falta para o processo terminar."
        ],
        answer: "mantém o registo atual dos blocos de memória que o processo ocupa."
    },
    {
        question: "Os dispositivos de entrada e saída (I/O devices)...",
        options: [
            "nunca podem comunicar diretamente com a memória.",
            "são habitualmente tão rápidos quanto os processadores.",
            "têm um controlador incorporado que opera o dispositivo autonomamente do processador.",
            "são controlados diretamente pelo processador durante toda a sua operação."
        ],
        answer: "têm um controlador incorporado que opera o dispositivo autonomamente do processador."
    },
    {
        question: "Quando falamos em arquitetura do conjunto de instruções (ISA) e em microarquitetura...",
        options: [
            "ambos os termos referem-se ao mesmo conceito.",
            "a microarquitetura é a especificação que define o conjunto de instruções que o processador suporta.",
            "a ISA define o esquema eletrônico do processador.",
            "a microarquitetura é a implementação eletrônica (física) que realiza o conjunto de instruções suportado pelo processador."
        ],
        answer: "a microarquitetura é a implementação eletrônica (física) que realiza o conjunto de instruções suportado pelo processador."
    },
    {
        question: "Os sistemas multi-utilizador caracterizam-se por permitir múltiplos programas carregados em memória prontos para ser executados de forma concorrente.",
        options: [
            "Estes sistemas apresentam a vantagem de conseguir diminuir o uso de memória.",
            "Estes sistemas apresentam menor utilização do processador, pois conseguem executar mais instruções por unidade de tempo.",
            "Estes sistemas requerem proteção de memória, para evitar que um processo aceda à memória de outros processos e corromper instruções e/ou dados.",
            "Estes sistemas só podem ser implementados em computadores com múltiplos processadores."
        ],
        answer: "Estes sistemas requerem proteção de memória, para evitar que um processo aceda à memória de outros processos e corromper instruções e/ou dados."
    },
    {
        question: "Um shell script é um programa interpretado pela interface da linha de comando...",
        options: [
            "desenvolvido numa linguagem de alto nível, sobretudo para resolver problemas de computação numérica.",
            "escrito em assembly, para resolver problemas de caráter genérico.",
            "que é utilizado para carregar o SO no arranque do computador.",
            "desenvolvido numa linguagem de alto nível, sobretudo para automatizar tarefas de gestão e manutenção do sistema."
        ],
        answer: "desenvolvido numa linguagem de alto nível, sobretudo para automatizar tarefas de gestão e manutenção do sistema."
    },
    {
        question: "Os computadores digitais contemporâneos utilizam exclusivamente a representação em base binária.",
        options: [
            "A representação de um valor inteiro em binário pode não ser exata (i.e. apresenta erro), mesmo que sejam utilizados bits suficientes.",
            "A representação de um qualquer valor em binário requer tantos algarismos quantos a representação do mesmo valor em hexadecimal.",
            "A conversão de um número fracionário exato em decimal para binário resulta sempre num número fracionário também exato (i.e. sem erro).",
            "A conversão de um número fracionário exato em decimal para binário pode resultar num número binário com erro de representação."
        ],
        answer: "A conversão de um número fracionário exato em decimal para binário pode resultar num número binário com erro de representação."
    },
    {
        question: "Num sistema com escalonamento sem preempção...",
        options: [
            "um processo no estado Ready pode passar para o estado Waiting.",
            "um processo no estado Running pode passar para o estado Ready.",
            "o SO pode interromper a execução do processo no estado Running para tratar uma interrupção de hardware.",
            "o SO pode parar o processo no estado Running para executar outro processo de maior prioridade."
        ],
        answer: "um processo no estado Running pode passar para o estado Ready."
    },
    {
        question: "Num sistema com escalonamento com preempção, um processo que invoque uma operação I/O passa ao estado...",
        options: [
            "Terminated",
            "Waiting",
            "Ready",
            "Running"
        ],
        answer: "Waiting"
    },
    {
        question: "O termo paralelismo significa...",
        options: [
            "que o computador permite processar múltiplas instruções em simultâneo.",
            "que se intercala no tempo a execução de múltiplos processos no mesmo processador.",
            "que um processo está impedido de acessar à memória ocupada por outros processos.",
            "que um processo pode acessar simultaneamente a dois dispositivos de I/O."
        ],
        answer: "que o computador permite processar múltiplas instruções em simultâneo."
    },
    {
        question: "Numa mudança de contexto...",
        options: [
            "um novo processo é criado, quando o programa é carregado de um ficheiro para a memória.",
            "o processo em execução é parado temporariamente para o SO poder tratar uma interrupção de hardware.",
            "o processador para de executar as instruções de um processo para passar a executar as de outro processo.",
            "um processo é transferido da memória para o disco."
        ],
        answer: "o processador para de executar as instruções de um processo para passar a executar as de outro processo."
    },
    {
        question: "Numa arquitetura superescalar...",
        options: [
            "são executadas as três fases do ciclo fetch-decode-execute em paralelo, para uma única instrução.",
            "são executadas duas ou mais instruções do mesmo programa, em paralelo, em núcleos de processamento (cores) distintos.",
            "são executadas duas ou mais instruções de programas distintos, em paralelo, em unidades de execução distintas (dentro da mesma CPU).",
            "são executadas duas ou mais instruções do mesmo programa, em paralelo, em unidades de execução distintas (dentro da mesma CPU)."
        ],
        answer: "são executadas duas ou mais instruções do mesmo programa, em paralelo, em unidades de execução distintas (dentro da mesma CPU)."
    },
    {
        question: "A norma IEEE 754 permite...",
        options: [
            "representar os valores lógicos verdadeiro e falso.",
            "representar números com sinal em vírgula flutuante.",
            "representar números inteiros com sinal, com uma única representação do valor zero.",
            "representar números inteiros com sinal, havendo duas representações para o valor zero."
        ],
        answer: "representar números com sinal em vírgula flutuante."
    },
    {
        question: "Na arquitetura de Von Neumann...",
        options: [
            "o programa é executado a partir da leitura sequencial das instruções em fita magnética ou disco.",
            "a memória ROM pertence ao subsistema de I/O, enquanto a memória RAM pertence ao subsistema de memória.",
            "o programa é armazenado na memória como uma sequência de números, que representam os códigos das instruções a executar.",
            "o programa é implementado através de ligações elétricas, estabelecendo a sequência de circuitos aritméticos pretendida."
        ],
        answer: "o programa é armazenado na memória como uma sequência de números, que representam os códigos das instruções a executar."
    },
    {
        question: "Suponha dois processadores distintos.",
        options: [
            "Os dois processadores só podem suportar a mesma arquitetura do conjunto de instruções (ISA) se forem exatamente iguais.",
            "Os dois processadores podem suportar a mesma arquitetura do conjunto de instruções (ISA) mesmo tendo microarquiteturas diferentes.",
            "Estes dois processadores podem suportar conjuntos de instruções (ISA) diferentes, mesmo tendo a mesma microarquitetura.",
            "Os dois processadores podem implementar a mesma arquitetura do conjunto de instruções (ISA), e apresentar conjuntos de registos diferentes."
        ],
        answer: "Os dois processadores podem suportar a mesma arquitetura do conjunto de instruções (ISA) mesmo tendo microarquiteturas diferentes."
    },
    {
        question: "Num sistema operativo...",
        options: [
            "o hardware é exposto às aplicações, que podem aceder diretamente aos controladores dos dispositivos.",
            "a interface da linha de comandos (a shell) é o código que estabelece uma camada de abstração do hardware, disponibilizando às aplicações um conjunto de chamadas ao sistema para acesso aos recursos do sistema.",
            "o núcleo (ou kernel) é o código que estabelece uma camada de abstração do hardware, disponibilizando às aplicações um conjunto de chamadas ao sistema para acesso aos recursos do sistema.",
            "o núcleo (ou kernel) é o componente encarregado de interagir com o utilizador."
        ],
        answer: "o núcleo (ou kernel) é o código que estabelece uma camada de abstração do hardware, disponibilizando às aplicações um conjunto de chamadas ao sistema para acesso aos recursos do sistema."
    },
    {
        question: "Um sistema operativo multitarefa...",
        options: [
            "tem que suportar vários utilizadores em simultâneo.",
            "executa os programas em sequência, do primeiro até ao último.",
            "apresenta melhor desempenho com conjuntos de aplicações computacionalmente intensivas (i.e., com poucas operações I/O).",
            "caracteriza-se por ter vários programas carregados na memória em simultâneo, executados concorrentemente."
        ],
        answer: "caracteriza-se por ter vários programas carregados na memória em simultâneo, executados concorrentemente."
    },
    {
        question: "Os serviços de um sistema operativo são facilmente invocados por um utilizador através...",
        options: [
            "da interface de linha de comandos (CLI) ou da interface gráfica do utilizador (GUI).",
            "da interface de chamadas ao sistema do kernel.",
            "das aplicações de utilizador.",
            "da aplicação de manual/ajuda do SO."
        ],
        answer: "da interface de linha de comandos (CLI) ou da interface gráfica do utilizador (GUI)."
    },
    {
        question: "A memória RAM permite dois tipos de operações: leitura e escrita.",
        options: [
            "Uma operação de escrita destrói o conteúdo nos endereços acedidos.",
            "Uma operação de leitura destrói o conteúdo nos endereços acedidos.",
            "Uma operação de acesso à memória, quer seja de leitura ou de escrita, destrói o conteúdo nos endereços acedidos.",
            "As operações de leitura e escrita são também possíveis em memória ROM."
        ],
        answer: "As operações de leitura e escrita são também possíveis em memória ROM."
    },
    {
        question: "Um cluster é composto...",
        options: [
            "por vários processadores que partilham recursos através de um barramento comum.",
            "por vários processadores num único chip.",
            "por vários computadores que cooperam entre si, executando cada um parte de uma aplicação e comunicando através de uma rede de comunicações.",
            "por vários computadores situados na mesma instalação, geridos de uma forma centralizada para executar a mesma aplicação, comunicando através de uma rede de comunicações."
        ],
        answer: "por vários computadores que cooperam entre si, executando cada um parte de uma aplicação e comunicando através de uma rede de comunicações."
    },
    {
        question: "Um processo...",
        options: [
            "é uma estrutura lógica que contém os dados de controlo de um programa necessários para o sistema operativo gerir os programas em execução.",
            "é um espaço de endereçamento que contém exclusivamente as instruções de um programa.",
            "é um espaço de endereçamento que contém exclusivamente os dados de um programa.",
            "é uma instância de um programa (ou parte de um programa) em execução."
        ],
        answer: "é uma instância de um programa (ou parte de um programa) em execução."
    },
    {
        question: "No ciclo fetch-decode-execute...",
        options: [
            "a unidade de controlo lê da memória o código da próxima operação na fase execute.",
            "os valores dos dados a operar são copiados da memória para os registos internos na fase fetch.",
            "é na fase decode que a CPU determina qual a operação a realizar, a partir do código de operação atual.",
            "a unidade de controlo incrementa o stack pointer na fase fetch."
        ],
        answer: "é na fase decode que a CPU determina qual a operação a realizar, a partir do código de operação atual."
    },
    {
        question: "Os dispositivos de entrada e saída (I/O devices)...",
        options: [
            "podem comunicar diretamente com a memória, se o sistema dispor da técnica de acesso direto à memória (DMA).",
            "são habitualmente tão rápidos quanto os processadores.",
            "não informam o processador de que terminaram uma operação, para não sobrecarregar o sistema.",
            "são controlados diretamente pelo processador durante toda a sua operação."
        ],
        answer: "podem comunicar diretamente com a memória, se o sistema dispor da técnica de acesso direto à memória (DMA)."
    },
    {
        question: "Nas operações lógicas binárias com cadeias de bits (bitwise operations)...",
        options: [
            "o operador AND é selecionado para forçar o bit UM (1) em determinadas posições da cadeia.",
            "o operador OR é selecionado para forçar o bit ZERO (0) em determinadas posições da cadeia.",
            "a máscara é uma cadeia de bits especificamente definida para transformar determinados bits, em associação com o operador selecionado.",
            "o operador XOR é selecionado para forçar o bit UM (1) em determinadas posições da cadeia."
        ],
        answer: "a máscara é uma cadeia de bits especificamente definida para transformar determinados bits, em associação com o operador selecionado."
    },
    {
        question: "Na shell de um sistema UNIX/Linux...",
        options: [
            "pode-se dispor os elementos de uma linha de comando em qualquer ordem.",
            "é possível direcionar a saída de um comando (STDOUT) para a entrada do comando seguinte (STDIN).",
            "só é permitido executar aplicações do sistema operativo.",
            "não é possível compilar programas."
        ],
        answer: "é possível direcionar a saída de um comando (STDOUT) para a entrada do comando seguinte (STDIN)."
    },
    {
        question: "Um shell script...",
        options: [
            "é um programa compilado, utilizado como comando do sistema operativo.",
            "é um programa escrito em assembly, para resolver problemas de caráter genérico.",
            "é o programa que carrega o sistema operativo, durante o arranque do computador.",
            "é um programa escrito em linguagem de alto-nível, interpretado pela interface da linha de comando."
        ],
        answer: "é um programa escrito em linguagem de alto-nível, interpretado pela interface da linha de comando."
    },
    {
        question: "Os computadores digitais contemporâneos utilizam exclusivamente a representação em base binária.",
        options: [
            "A conversão de um número fracionário exato em decimal para binário resulta sempre num número fracionário também exato (i.e. sem erro).",
            "A conversão de um número fracionário exato em decimal para binário pode resultar num número binário com erro de representação.",
            "A representação de um valor inteiro em binário pode não ser exata (i.e. apresenta erro), mesmo que sejam utilizados bits suficientes.",
            "A representação de um qualquer valor em binário requer tantos algarismos quantos a representação do mesmo valor em hexadecimal."
        ],
        answer: "A conversão de um número fracionário exato em decimal para binário pode resultar num número binário com erro de representação."
    },
    {
        question: "Num sistema com escalonamento sem preempção...",
        options: [
            "um processo no estado Running pode passar para o estado Terminated.",
            "um processo no estado Running pode passar para o estado Ready.",
            "um processo no estado Waiting pode passar para o estado Running.",
            "o SO pode parar o processo no estado Running para executar outro processo de maior prioridade."
        ],
        answer: "um processo no estado Running pode passar para o estado Ready."
    },
    {
        question: "Num sistema com escalonamento com preempção, um processo no estado New pode passar ao estado...",
        options: [
            "Ready",
            "Running",
            "Waiting",
            "Terminated"
        ],
        answer: "Ready"
    },
    {
        question: "Atualmente, a maior fatia de processadores existentes no mundo estão aplicados em sistemas computacionais de tempo-real.",
        options: [
            "Estes sistemas caracterizam-se por terem que reagir imediatamente às interações com o utilizador.",
            "Estes sistemas são compostos de milhares de processadores, e implementam os serviços de nuvem.",
            "Para além de terem que ser funcionalmente corretos, estes sistemas têm que disponibilizar os resultados ou atuar dentro de janelas de tempo bem definidas.",
            "Nestes sistemas, o maior interesse é que as aplicações apresentem os resultados o mais depressa possível."
        ],
        answer: "Para além de terem que ser funcionalmente corretos, estes sistemas têm que disponibilizar os resultados ou atuar dentro de janelas de tempo bem definidas."
    },
    {
        question: "O assembler tem como função…",
        options: [
            "traduzir um programa em assembly para linguagem-máquina.",
            "traduzir um programa em linguagem de alto-nível para linguagem-máquina.",
            "traduzir um programa em linguagem de alto-nível para assembly.",
            "interpretar e executar as instruções em assembly de um programa."
        ],
        answer: "traduzir um programa em assembly para linguagem-máquina."
    },
    {
        question: "O linker é um utilitário que…",
        options: [
            "resolve todas as referências a símbolos, substituindo-as pelos seus endereços.",
            "transforma as instruções em assembly para linguagem-máquina.",
            "liga as instruções aos dados de um programa, em tempo de execução.",
            "carrega um ficheiro executável para memória."
        ],
        answer: "resolve todas as referências a símbolos, substituindo-as pelos seus endereços."
    },
    {
        question: "De acordo com a arquitetura de Von Neumann…",
        options: [
            "o subsistema de entrada-saída (I/O) inclui todos os periféricos de entrada, periféricos de saída e o armazenamento em massa.",
            "o subsistema de memória inclui a memória principal e o armazenamento em massa.",
            "o subsistema de entrada-saída (I/O) inclui a memória principal.",
            "o subsistema de memória é utilizado para guardar somente os dados dos programas."
        ],
        answer: "o subsistema de entrada-saída (I/O) inclui todos os periféricos de entrada, periféricos de saída e o armazenamento em massa."
    },
    {
        question: "Relativamente à memória principal de um computador…",
        options: [
            "uma operação de escrita elimina o valor anteriormente armazenado no endereço acedido.",
            "uma operação de leitura elimina o valor lido do endereço acedido.",
            "as operações de leitura e de escrita não são destrutivas.",
            "as operações de leitura e de escrita são destrutivas."
        ],
        answer: "as operações de leitura e de escrita não são destrutivas."
    },
    {
        question: "Um dos principais objetivos de um sistema operativo é…",
        options: [
            "permitir às aplicações o acesso ao hardware exclusivamente através dos seus serviços.",
            "permitir às aplicações coordenarem entre si a utilização dos recursos partilhados.",
            "disponibilizar às aplicações uma interface que é específica à arquitetura do sistema.",
            "permitir às aplicações o acesso direto ao hardware."
        ],
        answer: "permitir às aplicações o acesso ao hardware exclusivamente através dos seus serviços."
    },
    {
        question: "O processamento por lotes (batch processing) …",
        options: [
            "é caracterizado pelo tempo necessário para completar o lote de programas ser predominantemente determinado pelo tempo necessário para realizar as operações de I/O.",
            "é apropriado para programas interativos.",
            "necessita que o operador carregue manualmente cada programa, após o programa anterior terminar.",
            "é caracterizado por uma boa utilização da capacidade de processamento."
        ],
        answer: "é caracterizado por uma boa utilização da capacidade de processamento."
    },
    {
        question: "Um processo…",
        options: [
            "é uma instância de um programa (ou parte de um programa) em execução.",
            "é um espaço de endereçamento que contém exclusivamente as instruções de um programa.",
            "é um espaço de endereçamento que contém exclusivamente os dados de um programa.",
            "é uma estrutura lógica que contém os dados de controlo de um programa necessários para o sistema operativo gerir os programas em execução."
        ],
        answer: "é uma instância de um programa (ou parte de um programa) em execução."
    },
    {
        question: "Um sistema operativo multitarefa visa gerir a execução de processos de modo a…",
        options: [
            "maximizar a utilização do processador.",
            "maximizar a utilização dos dispositivos de I/O.",
            "maximizar a utilização de memória.",
            "minimizar o tempo utilizado nas operações de I/O."
        ],
        answer: "maximizar a utilização do processador."
    },
    {
        question: "Num sistema distribuído…",
        options: [
            "múltiplos processadores partilham dispositivos através de um barramento comum e comunicam entre si, mas cada processador tem a sua memória privada.",
            "múltiplos processadores partilham recursos através de um barramento comum.",
            "diversos computadores comunicam entre si e partilham recursos através de uma rede de comunicação, cooperando para executar um programa.",
            "vários computadores são ligados entre si através de uma rede local de alto débito, sendo a computação gerida de forma centralizada."
        ],
        answer: "diversos computadores comunicam entre si e partilham recursos através de uma rede de comunicação, cooperando para executar um programa."
    },
    {
        question: "O Process Control Block (PCB) de um processo mantém o registo sobre…",
        options: [
            "a identificação do processo, o estado do processador (aquando da última comutação do processo) e informação de controlo do processo.",
            "o estado do processador e informação de controlo do processo.",
            "o estado do processo e identificação do sistema operativo em que o processo está a correr.",
            "identificação do processador e identificação do processo."
        ],
        answer: "a identificação do processo, o estado do processador (aquando da última comutação do processo) e informação de controlo do processo."
    },
    {
        question: "No ciclo fetch-decode-execute…",
        options: [
            "decode é a fase em que a unidade de controlo determina a operação realizar, a partir do opcode atual.",
            "decode é a fase em que a unidade de controlo determina o endereço físico da RAM para executar uma operação de leitura.",
            "fetch é a fase em que a unidade de controlo lê dados do programa a partir da memória.",
            "execute é a fase em que a unidade de controlo incrementa o program counter."
        ],
        answer: "decode é a fase em que a unidade de controlo determina a operação realizar, a partir do opcode atual."
    },
    {
        question: "A técnica de swaping…",
        options: [
            "permite transferir da memória principal para o armazenamento em massa um processo (ou parte dele) que se encontre em estado Waiting.",
            "permite retirar da CPU um processo para executar outro processo Ready com maior prioridade.",
            "permite retirar da CPU um processo que pediu uma operação de I/O, para executar outro processo Ready.",
            "permite transferir da memória principal para o armazenamento em massa um processo (ou parte dele) que se encontre em estado Ready."
        ],
        answer: "permite transferir da memória principal para o armazenamento em massa um processo (ou parte dele) que se encontre em estado Ready."
    },
    {
        question: "Quando ocorre uma mudança de contexto…",
        options: [
            "o SO salvaguarda o estado do processo em execução e o estado do processador.",
            "o SO salvaguarda somente o estado do processo em execução.",
            "o SO salvaguarda somente o estado do processador.",
            "o SO recupera o processo do armazenamento em massa para a memória principal."
        ],
        answer: "o SO salvaguarda o estado do processo em execução e o estado do processador."
    },
    {
        question: "Num sistema com escalonamento sem preempção…",
        options: [
            "o SO pode pausar a execução do processo na CPU para tratar uma interrupção de hardware.",
            "um processo no estado Running pode passar para o estado Ready.",
            "um processo no estado Ready pode passar para o estado Waiting.",
            "o SO pode interromper o processo em execução para executar outro processo de maior prioridade."
        ],
        answer: "um processo no estado Running pode passar para o estado Ready."
    },
    {
        question: "Os sistemas de tempo-real…",
        options: [
            "requerem que os resultados calculados sejam funcionalmente corretos e disponibilizados dentro de prazos definidos.",
            "caracterizam-se pela elevada interatividade com o utilizador.",
            "implementam-se sobretudo em computadores de alto-desempenho.",
            "são utilizados predominantemente em simulações (meteorologia, farmacêutica, etc.)."
        ],
        answer: "requerem que os resultados calculados sejam funcionalmente corretos e disponibilizados dentro de prazos definidos."
    },
    {
        question: "Uma das contribuições principais para o surgimento de sistemas interativos foi…",
        options: [
            "o terminal remoto com ecrã e teclado.",
            "a utilização de unidades de fita magnética como meio de armazenamento em massa.",
            "a adoção da arquitetura de Von Neumann.",
            "o monitor residente, capaz de carregar-e-executar automaticamente diversos programas em sequência."
        ],
        answer: "o terminal remoto com ecrã e teclado."
    },
    {
        question: "Quando termina uma operação de I/O, o estado do processo que a invocou passa a…",
        options: [
            "Ready.",
            "Waiting.",
            "Running.",
            "Terminated."
        ],
        answer: "Ready."
    },
    {
        question: "Sobre termos “multiprogramação” e “paralelismo”…",
        options: [
            "é possível ter multiprogramação num computador com uma única CPU.",
            "têm o mesmo significado.",
            "é possível ter paralelismo num computador com uma única CPU.",
            "é possível ter multiprogramação e paralelismo num computador com uma única CPU."
        ],
        answer: "é possível ter multiprogramação num computador com uma única CPU."
    },
    {
        question: "Num Sistema multiprogramado, o Sistema Operativo é responsável pelo escalonamento do conjunto de processos ativos.",
        options: [
            "O escalonador de curto prazo determina qual o próximo processo a ser executado pelo processador.",
            "O escalonador de longo prazo determina qual o próximo processo a ser executado pelo processador.",
            "O escalonador de curto prazo determina quando um processo deve entrar para o conjunto de processos ativos.",
            "O escalonador de longo prazo é executado muito frequentemente."
        ],
        answer: "O escalonador de curto prazo determina qual o próximo processo a ser executado pelo processador."
    },
    {
        question: "Os periféricos de entrada e saída (I/O devices)...",
        options: [
            "têm um controlador incorporado que opera o dispositivo autonomamente do processador.",
            "são habitualmente tão rápidos quanto os processadores.",
            "são habitualmente tão rápidos quanto a memória.",
            "nunca podem comunicar diretamente com a memória."
        ],
        answer: "têm um controlador incorporado que opera o dispositivo autonomamente do processador."
    },
    {
        question: "O termo 'mudança de contexto' refere-se a...",
        options: [
            "esperar que a execução de um processo complete para executar o processo seguinte na fila de trabalhos.",
            "interromper a execução de um processo para executar outro processo.",
            "abortar a execução de um processo para executar outro processo.",
            "interromper a execução de um processo para o sistema operativo tratar uma interrupção de hardware, e depois retomar a execução do mesmo processo."
        ],
        answer: "interromper a execução de um processo para executar outro processo."
    },
    {
        question: "A técnica de swapping é utilizada para disponibilizar mais memória física aos processos que precisem.",
        options: [
            "O swap out é realizado quando não é possível disponibilizar memória ao processo em execução, sendo este processo transferido da memória principal para o disco.",
            "Esta técnica consiste em adiar a entrada de um novo processo para o conjunto de processos ativos, até haver memória suficiente para o executar.",
            "O swapping era uma técnica essencial nos sistemas de processamento por lotes.",
            "O swap in é realizado quando um processo é transferido do disco para a memória principal quando precisa de ser executado."
        ],
        answer: "O swap out é realizado quando não é possível disponibilizar memória ao processo em execução, sendo este processo transferido da memória principal para o disco."
    },
    {
        question: "O processamento por lotes (batch processing) é caracterizado pelo carregamento e execução automática de uma sequência de programas, definida pelo operador do computador.",
        options: [
            "O processamento por lotes permite que múltiplos programas intercalem a sua execução no processador.",
            "O processamento por lotes é aplicável a conjuntos de programas não-interativos.",
            "Consegue-se uma boa utilização da capacidade de processamento com processos que realizem várias operações de I/O.",
            "Nos sistemas não-interativos, este tipo de processamento permite que o programador supervisione a execução do programa e corrija erros imediatamente."
        ],
        answer: "O processamento por lotes é aplicável a conjuntos de programas não-interativos."
    },
    {
        question: "A memória principal de um computador permite dois tipos de operações: leitura e escrita.",
        options: [
            "As operações de leitura e de escrita eliminam os valores armazenados nos endereços acedidos.",
            "As operações de leitura e de escrita preservam os valores armazenados nos endereços acedidos.",
            "Só as operações de leitura eliminam os valores armazenados dos endereços acedidos.",
            "Só as operações de leitura preservam os valores armazenados nos endereços acedidos."
        ],
        answer: "As operações de leitura e de escrita preservam os valores armazenados nos endereços acedidos."
    },
    {
        question: "Os sistemas interativos multi-utilizador com partilha de tempo apresentam várias vantagens em relação aos anteriores sistemas não-interativos. Qual das seguintes afirmações não é verdadeira?",
        options: [
            "Permitem programas que solicitam dados ao utilizador em tempo de execução.",
            "A partilha simultânea do computador por vários utilizadores permite uma maior utilização do processador.",
            "Os programas podem ser executados em sequência, sem intervenção do operador.",
            "Um utilizador pode acompanhar a execução do seu programa e corrigi-lo imediatamente para o voltar a executar."
        ],
        answer: "Os programas podem ser executados em sequência, sem intervenção do operador."
    },
    {
        question: "Um cluster é constituído por...",
        options: [
            "diversos computadores ligados através de uma rede local de alto débito, que realizam a computação de forma muito coesa, como se fosse um sistema multiprocessador.",
            "múltiplos processadores que partilham recursos através de um barramento comum.",
            "múltiplos processadores que comunicam entre si, partilham dispositivos e memória principal através de um barramento comum, mas cada processador tem a sua memória privada.",
            "diversos computadores autónomos que comunicam entre si através de uma rede de comunicações, cooperando para executar um programa."
        ],
        answer: "diversos computadores autónomos que comunicam entre si através de uma rede de comunicações, cooperando para executar um programa."
    },
    {
        question: "Um processador com uma arquitetura de 64 bits...",
        options: [
            "realiza operações aritméticas de 32 bits duas vezes mais rápido do que operações aritméticas de 64 bits.",
            "está limitado a operar valores inteiros com tamanho máximo de 64 bits.",
            "não pode representar inteiros de 8 bits.",
            "tem registos de uso genérico de 64 bits."
        ],
        answer: "tem registos de uso genérico de 64 bits."
    },
    {
        question: "O Process Control Block (PCB) de um processo mantém o registo sobre...",
        options: [
            "o identificador do processo e a informação de controlo do processador.",
            "o identificador e a informação de controlo do processo e o identificador do processador.",
            "o identificador e a informação de controlo do processo e o estado do processador aquando da última comutação do processo.",
            "o identificador do processador e o estado do processo."
        ],
        answer: "o identificador e a informação de controlo do processo e o estado do processador aquando da última comutação do processo."
    },
    {
        question: "No ciclo fetch-decode-execute...",
        options: [
            "fetch é a fase em que a unidade de controlo lê dados do programa a partir da memória.",
            "execute é a fase em que a CPU realiza a operação identificada pelo opcode atual.",
            "decode é a fase em que a CPU realiza a operação identificada pelo opcode atual.",
            "execute é a fase em que a unidade de controlo incrementa o program counter."
        ],
        answer: "fetch é a fase em que a unidade de controlo lê dados do programa a partir da memória."
    },
    {
        question: "Um sistema operativo multitarefa...",
        options: [
            "minimiza o número de operações de I/O realizadas.",
            "permite ter vários processos carregados simultaneamente em memória e intercalar a sua execução no processador.",
            "permite ter vários processos carregados simultaneamente em memória e executá-los sequencialmente no processador.",
            "requer menos memória porque apenas permite ter um programa carregado na memória."
        ],
        answer: "permite ter vários processos carregados simultaneamente em memória e intercalar a sua execução no processador."
    },
    {
        question: "Um dos principais objetivos de um sistema operativo é...",
        options: [
            "disponibilizar às aplicações acesso direto ao hardware.",
            "gerir os recursos de um computador de uma forma eficiente e eficaz.",
            "permitir às aplicações coordenarem entre si a utilização dos recursos partilhados.",
            "permitir que os processos realizem o tratamento das interrupções."
        ],
        answer: "gerir os recursos de um computador de uma forma eficiente e eficaz."
    },
    {
        question: "Num sistema com escalonamento preemptivo, o sistema operativo suspende o processo P1 em execução para executar outro processo P2 de maior prioridade. O processo P1 sofre uma transição...",
        options: [
            "Running para Ready.",
            "Running para Waiting.",
            "Waiting para Ready.",
            "Ready para Running."
        ],
        answer: "Running para Ready."
    },
    {
        question: "Num sistema com escalonamento com preempção, qual é a transição de estados que não é possível...",
        options: [
            "Waiting para Running.",
            "Waiting para Ready.",
            "Running para Waiting.",
            "Running para Ready."
        ],
        answer: "Waiting para Running."
    },
    {
        question: "Um programa interpretado...",
        options: [
            "é escrito numa linguagem de alto-nível e traduzido por um interpretador em tempo de execução.",
            "é escrito numa linguagem de alto-nível e traduzido para um ficheiro executável por um interpretador.",
            "é escrito em assembly e traduzido pelo assembler em tempo de execução.",
            "é escrito numa linguagem de alto-nível e compilado para um ficheiro executável."
        ],
        answer: "é escrito numa linguagem de alto-nível e traduzido por um interpretador em tempo de execução."
    },
    {
        question: "O linker é um utilitário que...",
        options: [
            "liga as palavras-chave de um programa interpretado ao código objeto a ser executado.",
            "permite depurar um programa, permitindo pausar o programa em pontos-chave e inspecionar a memória.",
            "liga as instruções de um programa aos seus respectivos dados em tempo de execução.",
            "liga o código objeto do programa com o código objeto fornecido por bibliotecas."
        ],
        answer: "liga o código objeto do programa com o código objeto fornecido por bibliotecas."
    },
    {
        question: "Os sistemas de tempo-real...",
        options: [
            "são sistemas computacionais que precisam de interagir instantaneamente com o utilizador.",
            "são sistemas computacionais que têm que entregar os resultados da computação instantaneamente.",
            "são sistemas utilizados predominantemente em simulações científicas.",
            "são sistemas computacionais que têm que entregar os resultados da computação dentro de janelas temporais para operar corretamente."
        ],
        answer: "são sistemas computacionais que têm que entregar os resultados da computação dentro de janelas temporais para operar corretamente."
    },
    {
        question: "Quando termina uma operação de I/O lançada por um processo P1...",
        options: [
            "é enviada uma interrupção ao processo P1 que atualiza o seu estado para Ready.",
            "é enviada uma interrupção ao sistema operativo, que atualiza o estado do processo P1 para Ready.",
            "é enviada uma interrupção ao processo P1 que atualiza o seu estado para Running.",
            "é enviada uma interrupção ao sistema operativo, que atualiza o estado do processo P1 para Terminated."
        ],
        answer: "é enviada uma interrupção ao sistema operativo, que atualiza o estado do processo P1 para Ready."
    },
    {
        question: "Um processador multi-core com quatro núcleos de processamento...",
        options: [
            "permite a execução paralela de processos, mas não permite multiprogramação.",
            "permite executar, no máximo, 4 processos em paralelo.",
            "permite executar mais do que 4 processos em paralelo.",
            "permite multiprogramação mas não permite paralelismo."
        ],
        answer: "permite executar, no máximo, 4 processos em paralelo."
    },
    {
        question: "Num sistema multiprogramado, o sistema operativo é responsável pelo escalonamento do conjunto de processos ativos.",
        options: [
            "O escalonador de longo prazo é responsável por gerir os processos que são transferidos entre memória primária e memória secundária.",
            "O escalonador de curto prazo determina quando um processo novo deve entrar para o conjunto de processos ativos.",
            "O escalonador de médio prazo determina quando um processo novo deve entrar para o conjunto de processos ativos.",
            "O escalonador de médio prazo é responsável por gerir os processos que são transferidos entre memória primária e memória secundária."
        ],
        answer: "O escalonador de médio prazo é responsável por gerir os processos que são transferidos entre memória primária e memória secundária."
    },
    {
        question: "Um processador implementa uma arquitetura do conjunto de instruções (Instruction Set Architecture, ISA).",
        options: [
            "Cada processador especifica a sua própria ISA, que lhe é exclusiva.",
            "A ISA é a especificação de como os diversos elementos constitutivos de um processador se dispõem, interligam e como interoperam.",
            "A ISA é um modelo abstrato que define, por exemplo, o conjunto de instruções e o conjunto de registos que um processador tem que suportar.",
            "Um processador tem que suportar todo o conjunto de instruções que estão definidas na ISA, mas tem liberdade para especificar o seu endereçamento (i.e., o número de bits de um endereço)."
        ],
        answer: "A ISA é um modelo abstrato que define, por exemplo, o conjunto de instruções e o conjunto de registos que um processador tem que suportar."
    },
    {
        question: "Um compilador serve para...",
        options: [
            "interpretar um programa em tempo de execução.",
            "resolver as referências a símbolos e ligar ao código disponível em bibliotecas.",
            "traduzir código numa linguagem de alto-nível para uma de mais baixo nível.",
            "traduzir código em linguagem assembly para código máquina."
        ],
        answer: "traduzir código numa linguagem de alto-nível para uma de mais baixo nível."
    },
    {
        question: "O depurador (debugger) é um utilitário que...",
        options: [
            "permite analisar a execução de um programa, permitindo pausar o programa em pontos-chave e inspecionar a memória.",
            "liga as palavras-chave de um programa interpretado ao código objecto a ser executado.",
            "liga as instruções de um programa aos seus respectivos dados em tempo de execução.",
            "liga o código objecto do programa com o código objecto fornecido por bibliotecas."
        ],
        answer: "permite analisar a execução de um programa, permitindo pausar o programa em pontos-chave e inspecionar a memória."
    },
    {
        question: "A microarquitectura é...",
        options: [
            "a implementação física num processador de uma arquitectura de um conjunto de instruções (ISA).",
            "um modelo abstracto que define, por exemplo, o conjunto de instruções e o conjunto de registos que um processador tem que suportar.",
            "igual para dois processadores diferentes que implementem a mesma arquitectura de conjunto de instruções (ISA).",
            "a interface (conjunto de instruções) que um processador fornece, independentemente da forma como fisicamente organiza os seus componentes."
        ],
        answer: "a implementação física num processador de uma arquitectura de um conjunto de instruções (ISA)."
    },
    {
        question: "A memória principal de um computador permite dois tipos de operações: leitura e escrita.",
        options: [
            "Só as operações de leitura modificam os valores armazenados dos endereços acedidos.",
            "As operações de leitura e de escrita preservam os valores armazenados nos endereços acedidos.",
            "Só as operações de escrita modificam os valores armazenados nos endereços acedidos.",
            "As operações de leitura e de escrita modificam os valores armazenados nos endereços acedidos."
        ],
        answer: "As operações de leitura e de escrita preservam os valores armazenados nos endereços acedidos."
    },
    {
        question: "Um dos principais objetivos de um sistema operativo é...",
        options: [
            "facilitar às aplicações o acesso direto ao hardware.",
            "permitir às aplicações coordenarem entre si a utilização dos recursos partilhados.",
            "permitir às aplicações uma opção de acesso ao hardware através dos seus serviços, mantendo a possibilidade de acesso directo às aplicações que requerem desempenho optimizado.",
            "disponibilizar às aplicações uma interface que uniformiza a operação dos recursos do sistema, ocultando os detalhes específicos do hardware de cada computador em particular."
        ],
        answer: "disponibilizar às aplicações uma interface que uniformiza a operação dos recursos do sistema, ocultando os detalhes específicos do hardware de cada computador em particular."
    },
    {
        question: "O processamento por lotes (batch processing) é caracterizado pelo carregamento e execução automática de uma sequência de programas, definida pelo operador do computador.",
        options: [
            "Nos sistemas não-interactivos, este tipo de processamento permite que o programador supervisione a execução do programa e corrija erros imediatamente.",
            "O processamento por lotes é aplicável a conjuntos de programas não-interactivos.",
            "Consegue-se uma boa utilização da capacidade de processamento com processos que realizem várias operações de I/O.",
            "O processamento por lotes permite que múltiplos programas intercalem a sua execução no processador."
        ],
        answer: "O processamento por lotes é aplicável a conjuntos de programas não-interactivos."
    },
    {
        question: "Um processo…",
        options: [
            "é um espaço de endereçamento que contém exclusivamente as instruções de um programa.",
            "é uma estrutura lógica que contém os dados de controlo de um programa necessários para o sistema operativo gerir os programas em execução.",
            "é um espaço de endereçamento que contém exclusivamente os dados de um programa.",
            "é uma instância de um programa (ou parte de um programa) em execução."
        ],
        answer: "é uma instância de um programa (ou parte de um programa) em execução."
    },
    {
        question: "Os sistemas operativos multitarefa permitem...",
        options: [
            "intercalar a execução de vários processos carregados simultaneamente em memória, maximizando a utilização do processador.",
            "executar em menos tempo lotes de processos que praticamente não realizam operações de I/O (i.e. processos processador-intensivos).",
            "maximizar a utilização de memória, carregando simultaneamente vários processos.",
            "intercalar a execução de vários processos carregados simultaneamente em memória, minimizando a utilização dos dispositivos de I/O."
        ],
        answer: "intercalar a execução de vários processos carregados simultaneamente em memória, maximizando a utilização do processador."
    },
    {
        question: "Num sistema distribuído...",
        options: [
            "vários computadores são ligados entre si através de uma rede local de alto débito, sendo a computação gerida de forma centralizada.",
            "múltiplos processadores partilham recursos através de um barramento comum.",
            "múltiplos processadores partilham dispositivos I/O através de um barramento comum e comunicam entre si, mas cada processador tem a sua memória privada.",
            "diversos computadores comunicam entre si e partilham recursos através de uma rede de comunicação, cooperando para executar um programa."
        ],
        answer: "diversos computadores comunicam entre si e partilham recursos através de uma rede de comunicação, cooperando para executar um programa."
    },
    {
        question: "O Process Control Block (PCB) de um processo mantém o registo sobre...",
        options: [
            "o identificador e a informação de controlo do processo e o estado do processador aquando da última comutação do processo.",
            "o identificador e a informação de controlo do processo e o identificador do processador.",
            "o identificador do processador e o estado do processo.",
            "o identificador do processo e a informação de controlo do processador."
        ],
        answer: "o identificador e a informação de controlo do processo e o estado do processador aquando da última comutação do processo."
    },
    {
        question: "No ciclo fetch-decode-execute...",
        options: [
            "a unidade de controlo lê da memória o código da próxima operação na fase fetch.",
            "a unidade de controlo incrementa o program counter na fase decode.",
            "os dados a operar são lidos da memória na fase fetch.",
            "decode é a fase em que a CPU realiza a operação identificada pelo código de operação actual."
        ],
        answer: "a unidade de controlo lê da memória o código da próxima operação na fase fetch."
    },
    {
        question: "A técnica de swapping é utilizada para disponibilizar mais memória física aos processos que precisem.",
        options: [
            "O swap in é realizado quando um processo é transferido do disco para a memória principal, quando ainda aguarda pela conclusão de uma operação I/O.",
            "O swap out é realizado quando um processo que não se encontra pronto para executar é transferido da memória principal para o disco.",
            "O swap out é realizado quando não é possível disponibilizar memória ao processo em execução, sendo este processo transferido da memória principal para o disco.",
            "Esta técnica consiste em adiar a entrada de um novo processo para o conjunto de processos activos, até haver memória suficiente para o executar."
        ],
        answer: "O swap out é realizado quando não é possível disponibilizar memória ao processo em execução, sendo este processo transferido da memória principal para o disco."
    },
    {
        question: "O termo 'mudança de contexto' refere-se a...",
        options: [
            "abortar a execução de um processo para executar outro processo.",
            "interromper a execução de um processo para o sistema operativo tratar uma interrupção de hardware, e depois retomar a execução do mesmo processo.",
            "esperar que a execução de um processo complete para executar o processo seguinte na fila de trabalhos.",
            "interromper a execução de um processo para executar outro processo."
        ],
        answer: "interromper a execução de um processo para executar outro processo."
    },
    {
        question: "Num sistema com escalonamento com preempção, qual é a transição de estados que não é possível...",
        options: [
            "Ready para Waiting.",
            "Running para Waiting.",
            "Running para Ready.",
            "Running para Terminated."
        ],
        answer: "Ready para Waiting."
    },
    {
        question: "Os sistemas de tempo-real...",
        options: [
            "são sistemas computacionais que têm que operar o mais depressa possível.",
            "são os sistemas que continuam correctos, mesmo que disponibilizem um resultado errado desde que dentro do prazo especificado.",
            "são sistemas computacionais que falham quando um resultado correcto é disponibilizado depois de um prazo especificado.",
            "são sistemas computacionais que precisam de interagir instantaneamente com utilizador."
        ],
        answer: "são sistemas computacionais que falham quando um resultado correcto é disponibilizado depois de um prazo especificado."
    },
    {
        question: "Os sistemas interactivos multi-utilizador com partilha de tempo apresentam várias vantagens em relação aos anteriores sistemas não-interactivos. Qual das seguintes afirmações não é verdadeira?",
        options: [
            "Os sistemas multi-utilizador interactivos exploram o facto de estatisticamente uma sessão interactiva utilizar pouco processador enquanto o computador aguarda pelas acções do utilizador, para suportar várias sessões simultâneas.",
            "Os sistemas multi-utilizador não necessitam de protecção de memória.",
            "Num sistema interactivo, um utilizador pode acompanhar a execução do seu programa e corrigi-lo imediatamente para o voltar a executar.",
            "Permitem programas que solicitam dados ao utilizador em tempo de execução."
        ],
        answer: "Os sistemas multi-utilizador não necessitam de protecção de memória."
    },
    {
        question: "Quando uma operação de I/O lançada por um processo P1 é concluída...",
        options: [
            "o sistema operativo recebe uma interrupção, modificando o estado do processo P1 de Waiting para Ready.",
            "é enviada uma interrupção ao sistema operativo, que actualiza o estado do processo P1 de Ready para Running.",
            "é enviada uma interrupção ao processo P1 que modifica o seu estado de Waiting para Ready.",
            "o processo P1 recebe uma interrupção e actualiza o seu estado de Ready para Running."
        ],
        answer: "o sistema operativo recebe uma interrupção, modificando o estado do processo P1 de Waiting para Ready."
    },
    {
        question: "Num sistema com escalonamento preemptivo, o sistema operativo suspende o processo P1 em execução para executar outro processo P2 de maior prioridade. O processo P2 sofre uma transição...",
        options: [
            "Ready para Running.",
            "Running para Ready.",
            "Running para Waiting.",
            "Waiting para Ready."
        ],
        answer: "Ready para Running."
    },
    {
        question: "Num sistema multiprogramado, o sistema operativo é responsável pelo escalonamento do conjunto de processos ativos.",
        options: [
            "O escalonador de longo prazo determina quando um processo novo deve entrar para o conjunto de processos ativos.",
            "O escalonador de longo prazo é responsável por gerir os processos que são transferidos entre memória primária e memória secundária.",
            "O escalonador de curto prazo determina quando um processo novo deve entrar para o conjunto de processos ativos.",
            "O escalonador de curto prazo é responsável por gerir os processos que são transferidos entre memória primária e memória secundária."
        ],
        answer: "O escalonador de longo prazo determina quando um processo novo deve entrar para o conjunto de processos ativos."
    },
    {
        question: "Um processador com apenas um núcleo de processamento...",
        options: [
            "permite a execução paralela de processos, mas não permite multiprogramação.",
            "permite multiprogramação mas não permite paralelismo.",
            "permite executar, no máximo, 4 processos em paralelo.",
            "permite executar vários processos em paralelo."
        ],
        answer: "permite multiprogramação mas não permite paralelismo."
    },
    {
        question: "Qual o estado de um processo após a execução de uma operação de I/O?",
        options: [
            "Running.",
            "Ready.",
            "Waiting.",
            "Nenhuma das anteriores."
        ],
        answer: "Waiting."
    },
    {
        question: "Um processo é um fluxo de atividade:",
        options: [
            "Automática que executa ações determinadas por um programa.",
            "Autónoma que executa ações determinadas por um programa.",
            "Aleatória que executa ações determinadas por um programa.",
            "Manual que executa ações determinadas por um programa."
        ],
        answer: "Autónoma que executa ações determinadas por um programa."
    },
    {
        question: "Um sistema operativo multitarefa visa gerir a execução de processos de modo a:",
        options: [
            "Maximizar a utilização de memória.",
            "Maximizar a utilização do processador.",
            "Maximizar a utilização dos dispositivos de I/O.",
            "Minimizar a utilização dos dispositivos de I/O."
        ],
        answer: "Maximizar a utilização do processador."
    },
    {
        question: "Um sistema operativo moderno permite a criação de processos:",
        options: [
            "Através de ações de utilizadores.",
            "Através de ações de outros processos.",
            "Que podem comunicar com outros processos.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Todas as anteriores são verdadeiras."
    },
    {
        question: "Quais das seguintes são razões para se interromper um processo em execução?",
        options: [
            "Ter excedido o tempo de execução atribuído.",
            "Ter ocorrido uma falta de memória.",
            "Ter executado uma instrução inválida.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Todas as anteriores são verdadeiras."
    },
    {
        question: "Em termos de transições de estados de um processo:",
        options: [
            "A sequência Ready => Waiting => Running é válida.",
            "A sequência Ready => Running => Waiting é válida.",
            "A sequência Running => Ready => Waiting é válida.",
            "Nenhuma das anteriores."
        ],
        answer: "A sequência Ready => Running => Waiting é válida."
    },
    {
        question: "Um processo a correr na CPU necessita de uma operação de I/O, tendo este sido escalonado de forma não preemptiva e por prioridades:",
        options: [
            "O processo é removido da UCP e passa para o estado de Waiting.",
            "O processo continua na UCP e passa para o estado de Waiting.",
            "O processo é removido da UCP e passa para o estado de New.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "O processo é removido da UCP e passa para o estado de Waiting."
    },
    {
        question: "Num sistema operativo moderno:",
        options: [
            "Só pode haver uma fila para os processos prontos a executar.",
            "Pode haver várias filas para os processos que esperam por recursos de memória.",
            "Pode haver várias filas onde estão processos à espera de operações I/O terminadas.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Todas as anteriores são verdadeiras."
    },
    {
        question: "O escalonamento preemptivo por prioridades fixas não é eficaz no escalonamento de processos em sistemas desktop, dado que:",
        options: [
            "Este tipo de escalonamento apenas é adequado para processos que não efetuem operações de I/O.",
            "Favorece os processos limitados por I/O em prejuízo dos processos limitados pela UCP.",
            "Este tipo de escalonamento é mais adaptado a sistemas monoprocesso.",
            "Favorece os processos computacionalmente pesados em detrimento dos processos limitados por I/O de igual prioridade."
        ],
        answer: "Favorece os processos computacionalmente pesados em detrimento dos processos limitados por I/O de igual prioridade."
    },
    {
        question: "Na comutação entre processos faz-se, entre outras operações:",
        options: [
            "A salvaguarda do processo que vai ter acesso à UCP.",
            "A salvaguarda do processo que vai perder o acesso à UCP.",
            "A salvaguarda do processo que vai perder acesso à UCP, apesar da informação do PCB estar danificada.",
            "Nenhuma das anteriores."
        ],
        answer: "A salvaguarda do processo que vai perder o acesso à UCP."
    },
    {
        question: "Em termos de estados dos processos (PCBs), as filas de escalonamento do SO:",
        options: [
            "Não permitem conhecer o estado de todos os processos.",
            "Permitem conhecer o estado de todos os processos em execução.",
            "Permitem conhecer o estado de todos os processos anteriormente terminados.",
            "Permitem conhecer o estado de todos os processos existentes."
        ],
        answer: "Permitem conhecer o estado de todos os processos existentes."
    },
    {
        question: "Relativamente aos equipamentos que recorriam ao processamento em série:",
        options: [
            "As operações de I/O tinham que ser definidas pelos programas.",
            "A primeira versão já possuía um sistema operativo residente em memória.",
            "Possibilitavam que vários programas corressem concorrentemente.",
            "A primeira versão já possuía o utilitário Monitor."
        ],
        answer: "As operações de I/O tinham que ser definidas pelos programas."
    },
    {
        question: "Em termos de escalonador de longo prazo:",
        options: [
            "Pode ser invocado apenas quando vários processos terminam.",
            "Tende a ser lento.",
            "É executado com alta frequência.",
            "Nenhuma das anteriores é verdadeira."
        ],
        answer: "Tende a ser lento."
    },
    {
        question: "O escalonador de médio-prazo:",
        options: [
            "Pode remover processos da memória.",
            "Pode retomar mais tarde a execução de processos.",
            "Recorre a Swapping para lidar com falta de memória.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Todas as anteriores são verdadeiras."
    },
    {
        question: "Um supercomputador atual é essencialmente composto por:",
        options: [
            "Imensas UCPs e pouca memória RAM.",
            "Algumas UCPs e imensa memória RAM.",
            "Imensas UCPs e dispositivos de I/O.",
            "Imensas UCPs, imensa memória RAM e dispositivos de I/O."
        ],
        answer: "Imensas UCPs, imensa memória RAM e dispositivos de I/O."
    },
    {
        question: "Num sistema operativo atual:",
        options: [
            "Processos e subprocessos alternam a execução de instruções e operações de I/O.",
            "Só subprocessos alternam a execução de instruções e operações de I/O.",
            "Só processos alternam a execução de instruções e operações de I/O.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Processos e subprocessos alternam a execução de instruções e operações de I/O."
    },
    {
        question: "Na elaboração de um programa é normal que a ordem de utilização das ferramentas auxiliares envolvidas seja a seguinte:",
        options: [
            "Editor, compilador e linker.",
            "Editor, linker e compilador.",
            "Linker, editor e compilador.",
            "Linker, compilador e editor."
        ],
        answer: "Editor, compilador e linker."
    },
    {
        question: "Num sistema computacional com uma palavra de 64 bits:",
        options: [
            "O maior valor inteiro possível de ser representado é sempre superior ao de um sistema computacional com uma palavra de 32 bits.",
            "Os registos de uso genérico são de 16 bits.",
            "Sempre que se armazena um byte em memória são desperdiçados 7 bytes de memória.",
            "Pode ser utilizado um esquema de endereçamento de memória de 64 bits."
        ],
        answer: "Pode ser utilizado um esquema de endereçamento de memória de 64 bits."
    },
    {
        question: "Em termos de critérios de desempenho computacional orientado para o utilizador, o mais adequado a sistemas interativos é:",
        options: [
            "Turnaround time.",
            "Tempo de resposta.",
            "Deadline.",
            "Predictabilidade."
        ],
        answer: "Tempo de resposta."
    },
    {
        question: "Uma das vantagens do escalonamento com preempção é:",
        options: [
            "Favorecer os processos do tipo l/0-Bound.",
            "Executar mais processos num determinado período de tempo.",
            "Favorecer os processos do tipo CPU-Bound.",
            "Nenhuma das anteriores são verdadeiras."
        ],
        answer: "Executar mais processos num determinado período de tempo."
    },
    {
        question: "O que acontece quando um processo requisita uma operação de I/0 num escalonamento Shortest-Job-First (SJF):",
        options: [
            "O processo é removido da UCP e passa para o estado de Waiting.",
            "O processo continua na UCP e passa para o estado de Waiting.",
            "O processo é removido da UCP e passa para o estado de Ready.",
            "Nenhuma das anteriores são verdadeiras."
        ],
        answer: "O processo é removido da UCP e passa para o estado de Waiting."
    },
    {
        question: "Sistemas multiprogramados:",
        options: [
            "São mais fáceis de desenvolver do que sistemas monoprogramados.",
            "Todos os processos são executados de forma mais célere.",
            "Permitem dividir a capacidade de processamento pelos processos ativos.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Permitem dividir a capacidade de processamento pelos processos ativos."
    },
    {
        question: "Qual o estado de um processo após a execução de uma operação de l/0:",
        options: [
            "Running.",
            "Ready.",
            "Waiting.",
            "New."
        ],
        answer: "Ready."
    },
    {
        question: "Relativamente ao método de escalonamento Multinível por Filas, de prioridades fixas, podemos afirmar que:",
        options: [
            "A sua performance está relacionada com o método de escalonamento de curto-prazo utilizado em cada uma das filas.",
            "A sua performance está relacionada com o método para atribuir os processos às várias filas.",
            "Cada fila tem prioridade absoluta sobre a outra fila.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Todas as anteriores são verdadeiras."
    },
    {
        question: "Relativamente aos sistemas interativos podemos afirmar que:",
        options: [
            "O requisito essencial é ter um bom tempo de resposta e dividir os recursos de forma equitativa.",
            "O requisito essencial é permitir a interação entre os vários processos existentes na fila de ready.",
            "O requisito essencial é permitir a interação em 'tempo real' entre os vários processos existentes na fila de ready.",
            "Nenhuma das anteriores é verdadeira."
        ],
        answer: "O requisito essencial é ter um bom tempo de resposta e dividir os recursos de forma equitativa."
    },
    {
        question: "O método de escalonamento Round-Robin (RR):",
        options: [
            "Favorece os processos do tipo CPU-Bound.",
            "É denominado de 'processor sharing' se o time quantum for 'pequeno'.",
            "Se o time quantum for 'grande' aproxima-se do escalonamento First-Come First-Served (FCFS).",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Todas as anteriores são verdadeiras."
    },
    {
        question: "Sobre multiprogramação e paralelismo pode-se dizer que:",
        options: [
            "Paralelismo real só é possível em computadores com processador multicore e/ou múltiplos processadores.",
            "O uso de multiprogramação só tem interesse quando o sistema operativo suporta múltiplos utilizadores.",
            "O uso de multiprogramação só tem interesse quando o sistema operativo utiliza um escalonamento do tipo preemptivo.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Paralelismo real só é possível em computadores com processador multicore e/ou múltiplos processadores."
    },
    {
        question: "A comutação de processos:",
        options: [
            "Substitui sempre o processo que se encontra em execução pelo processo que se encontra em primeiro lugar na fila de ready.",
            "Permite que seja substituído um processo em execução por outro processo existente na fila de ready de acordo com a regra de escalonamento vigente.",
            "Não permite a execução de nenhuma operação de I/O do processo que é retirado de execução.",
            "É feita sem qualquer intervenção do Sistema Operativo."
        ],
        answer: "Permite que seja substituído um processo em execução por outro processo existente na fila de ready de acordo com a regra de escalonamento vigente."
    },
    {
        question: "Num sistema operativo a utilizar um algoritmo de escalonamento, por prioridades fixas, não preemptivo, podemos dizer que:",
        options: [
            "Os processos de mais baixa prioridade podem nunca ser selecionados para executar.",
            "Os processos de igual prioridade podem nunca ser selecionados para executar.",
            "Os processos ficam sempre no estado de running até terminarem a sua execução.",
            "Um sistema deste tipo não permite a execução de outros processos quando um processo executa operações de I/O."
        ],
        answer: "Os processos de mais baixa prioridade podem nunca ser selecionados para executar."
    },
    {
        question: "Um processo é:",
        options: [
            "Um programa com vários fluxos de execução.",
            "Um programa em execução.",
            "Um programa apenas com um fluxo de execução.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Um programa em execução."
    },
    {
        question: "Um dos objetivos de um Sistema Operativo ser organizado em camadas é:",
        options: [
            "Permitir o acesso direto ao hardware por parte das aplicações.",
            "Obrigar as aplicações a utilizar os serviços fornecidos pelo Sistema Operativo para aceder ao hardware.",
            "Obrigar a que cada camada tenha as suas próprias funções para aceder diretamente ao hardware.",
            "Nenhuma das anteriores é verdadeira."
        ],
        answer: "Obrigar as aplicações a utilizar os serviços fornecidos pelo Sistema Operativo para aceder ao hardware."
    },
    {
        question: "Num Sistema Operativo de tempo-real:",
        options: [
            "A execução de um processo depende da obtenção de um resultado correto.",
            "A perda de um deadline, associada ao processo, leva sempre à falha do sistema.",
            "A execução de um processo depende da obtenção de um resultado antes de um determinado tempo (deadline).",
            "Apenas pode ser executado um processo quando o anterior tiver terminado."
        ],
        answer: "A execução de um processo depende da obtenção de um resultado antes de um determinado tempo (deadline)."
    },
    {
        question: "O Programa utilitário Monitor de Controlo:",
        options: [
            "Permite ao utilizador carregar os seus programas em memória, editá-los e verificar a sua execução.",
            "Permite a execução das operações necessárias através de comandos do monitor.",
            "Possui rotinas de I/O reutilizáveis.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Todas as anteriores são verdadeiras."
    },
    {
        question: "Qual dos seguintes escalonadores permite controlar o número máximo de processos no estado de ready:",
        options: [
            "Os escalonadores de longo e médio prazo.",
            "Apenas o escalonador de médio prazo.",
            "Apenas o escalonador de curto prazo.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Os escalonadores de longo e médio prazo."
    },
    {
        question: "Os sistemas multiprocessador com n processadores:",
        options: [
            "Assimétricos não partilham o barramento, o relógio e a memória.",
            "Simétricos não partilham o barramento, o relógio e a memória.",
            "Simétricos podem correr em paralelo até n processos.",
            "Simétricos podem correr em paralelo, no máximo, n-1 processos."
        ],
        answer: "Simétricos podem correr em paralelo até n processos."
    },
    {
        question: "Um sistema composto por várias unidades de processamento interligadas por uma rede de comunicação permite:",
        options: [
            "Que um programa seja executado transparentemente num sistema multiprocessador simétrico.",
            "Que várias partes do mesmo programa possam ser executadas em diferentes máquinas.",
            "Que um programa seja executado transparentemente num sistema multiprocessador assimétrico.",
            "Que várias partes do mesmo programa possam ser executadas num sistema multiprocessador simétrico."
        ],
        answer: "Que várias partes do mesmo programa possam ser executadas em diferentes máquinas."
    },
    {
        question: "Ordene temporalmente (do mais antigo para o mais recente) o aparecimento dos seguintes tipos de Sistemas Operativos:",
        options: [
            "Batch, Serial Processing, Time Sharing e Multiprogramming.",
            "Serial Processing, Batch, Multiprogramming e Time Sharing.",
            "Batch, Serial Processing, Multiprogramming e Time Sharing.",
            "Serial Processing, Batch, Time Sharing e Multiprogramming."
        ],
        answer: "Serial Processing, Batch, Multiprogramming e Time Sharing."
    },
    {
        question: "Swapping é um mecanismo que:",
        options: [
            "Permite retirar um processo da memória principal que se encontre no estado de running.",
            "Apenas pode ser utilizado em conjunto com o critério de escalonamento Round-Robin para retirar processos da memória principal para a memória secundária.",
            "Apenas pode ser utilizado em conjunto com o critério de escalonamento First-Come First Served para retirar processos da memória principal para a memória secundária.",
            "Permite retirar um processo da memória principal que se encontre no estado de ready."
        ],
        answer: "Permite retirar um processo da memória principal que se encontre no estado de ready."
    },
    {
        question: "Relativamente ao método de escalonamento Multinível com realimentação por Filas, podemos afirmar que:",
        options: [
            "O método de escalonamento de curto prazo utilizado em cada uma das filas afeta a sua performance.",
            "A sua performance está, apenas relacionada, com o método para atribuir os processos às filas.",
            "A sua performance está relacionada, apenas, com o método de escalonamento de curto prazo utilizado em cada uma das filas.",
            "Favorece os processos de I/O-Bound."
        ],
        answer: "O método de escalonamento de curto prazo utilizado em cada uma das filas afeta a sua performance."
    },
    {
        question: "Durante a execução de um processo o que pode acontecer?",
        options: [
            "O processo emitir um pedido I/O, e consequentemente ser colocado numa fila de um I/O device, passando para o estado de ready.",
            "O tempo que o escalonador tinha atribuído ao processo (time slice) terminar e consequentemente ser colocado no estado de ready.",
            "O processo pode criar um novo processo, ficando à espera que ele termine e consequentemente ser colocado na fila dos ready.",
            "O processo pode ser removido da UCP em consequência duma interrupção passando sempre para o estado de waiting."
        ],
        answer: "O tempo que o escalonador tinha atribuído ao processo (time slice) terminar e consequentemente ser colocado no estado de ready."
    },
    {
        question: "O sistema de interrupções:",
        options: [
            "Não permite assinalar o acontecimento de um evento.",
            "Desencadeia a transferência do controlo para um serviço do kernell do Sistema Operativo.",
            "Não obriga ao armazenamento do endereço da instrução interrompida.",
            "Não é transparente para o processo que é interrompido."
        ],
        answer: "Desencadeia a transferência do controlo para um serviço do kernell do Sistema Operativo."
    },
    {
        question: "Relativamente aos métodos de escalonamento First-Come First-Served (FCFS) e Round-Robin pode-se dizer que:",
        options: [
            "O FCFS favorece a multiprogramação.",
            "Ambos favorecem os processos I/O-Bound.",
            "O FCFS tem uma implementação mais complexa.",
            "Ambos favorecem os processos CPU-Bound."
        ],
        answer: "Ambos favorecem os processos CPU-Bound."
    },
    {
        question: "O escalonamento preemptivo por prioridades fixas, não é eficaz no escalonamento de processos em sistemas desktop, dado que:",
        options: [
            "Este tipo de escalonamento apenas é adequado para processos que não efectuem operações de I/O.",
            "Aumenta o tempo de resposta de processos interactivos quando estão a concorrer com processos CPU-Bound de prioridade inferior.",
            "Este tipo de escalonamento é mais adaptado a sistemas mono-processo.",
            "Favorece os processos CPU-Bound em detrimento dos processos I/O Bound de igual prioridade."
        ],
        answer: "Favorece os processos CPU-Bound em detrimento dos processos I/O Bound de igual prioridade."
    },
    {
        question: "Uma das vantagens do escalonamento com preempção é:",
        options: [
            "Favorecer os processos do tipo l/0-Bound.",
            "Executar mais processos num determinado período de tempo.",
            "Favorecer os processos do tipo CPU-Bound.",
            "Nenhuma das anteriores são verdadeiras."
        ],
        answer: "Executar mais processos num determinado período de tempo."
    },
    {
        question: "Num Sistema Operativo multitarefa, um programa:",
        options: [
            "É sempre constituído por um único processo.",
            "É sempre constituído por vários processos.",
            "Pode ser constituído por um ou por vários processos.",
            "Nunca pode ser constituído por vários processos."
        ],
        answer: "Pode ser constituído por um ou por vários processos."
    },
    {
        question: "O módulo de Gestão de Processos de um Sistema Operativo fornece serviços para:",
        options: [
            "O tratamento de interrupções.",
            "A sincronização de processos.",
            "A comunicação de processos.",
            "Todas as anteriores."
        ],
        answer: "Todas as anteriores."
    },
    {
        question: "Relativamente ao método de escalonamento Multi-nível com Realimentação por Filas:",
        options: [
            "O seu desempenho está relacionado, em parte, com o método de escalonamento de curto-prazo utilizado em cada uma das filas.",
            "O seu desempenho está apenas relacionado com o método para atribuir os processos às filas.",
            "O seu desempenho está relacionado exclusivamente com o método de escalonamento de curto-prazo utilizado em cada uma das filas.",
            "Favorece os processos CPU-Bound."
        ],
        answer: "O seu desempenho está relacionado, em parte, com o método de escalonamento de curto-prazo utilizado em cada uma das filas."
    },
    {
        question: "Os sistemas multi-processador, com n processadores:",
        options: [
            "Assimétricos não partilham o barramento, o relógio e a memória.",
            "Simétricos não partilham o barramento, o relógio e a memória.",
            "Simétricos podem correr em paralelo, até n processos, sem existir degradação no desempenho.",
            "Simétricos podem correr em paralelo, no máximo n-1 processos, sem existir degradação no desempenho."
        ],
        answer: "Simétricos podem correr em paralelo, até n processos, sem existir degradação no desempenho."
    },
    {
        question: "Swapping é um mecanismo que:",
        options: [
            "Permite retirar um processo da memória principal que se encontre no estado de running.",
            "Apenas pode ser utilizado em conjunto com o critério de escalonamento Round-Robin para retirar processos da memória principal para a memória secundária.",
            "Apenas pode ser utilizado em conjunto com o critério de escalonamento First-Come First-Served para retirar processos da memória principal para a memória secundária.",
            "Permite retirar processos da memória principal que se encontrem no estado de ready."
        ],
        answer: "Permite retirar processos da memória principal que se encontrem no estado de ready."
    },
    {
        question: "O escalonador de médio-prazo:",
        options: [
            "Pode remover processos da memória.",
            "Pode retomar mais tarde a execução de processos.",
            "Recorre a Swapping para lidar com falta de memória.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Todas as anteriores são verdadeiras."
    },
    {
        question: "Relativamente aos sistemas interativos podemos afirmar que:",
        options: [
            "O requisito essencial é ter um bom tempo de resposta e dividir os recursos de forma equitativa.",
            "O requisito essencial é permitir a interação entre os vários processos existentes na fila de ready.",
            "O requisito essencial é permitir a interação em 'tempo real' entre os vários processos existentes na fila de ready.",
            "Nenhuma das anteriores é verdadeira."
        ],
        answer: "O requisito essencial é ter um bom tempo de resposta e dividir os recursos de forma equitativa."
    },
    {
        question: "Se tivesse que escalonar um sistema multiutilizador e multitarefa qual das políticas de escalonamento lhe parece que seria a mais adequada, assumindo que desconhece os perfis de execução dos processos:",
        options: [
            "First-in First-out.",
            "Escalonamento por prioridades.",
            "Escalonamento multinível com realimentação por filas.",
            "Round-Robin."
        ],
        answer: "Escalonamento multinível com realimentação por filas."
    },
    {
        question: "Um processo é um fluxo de atividade:",
        options: [
            "Automática que executa ações determinadas por um programa.",
            "Autónoma que executa ações determinadas por um programa.",
            "Aleatória que executa ações determinadas por um programa.",
            "Manual que executa ações determinadas por um programa."
        ],
        answer: "Autónoma que executa ações determinadas por um programa."
    },
    {
        question: "Um sistema operativo multitarefa visa gerir a execução de processos de modo a:",
        options: [
            "Maximizar a utilização de memória.",
            "Maximizar a utilização do processador.",
            "Maximizar a utilização dos dispositivos de I/O.",
            "Minimizar a utilização dos dispositivos de I/O."
        ],
        answer: "Maximizar a utilização do processador."
    },
    {
        question: "Um dos objetivos da utilização de Máquinas Virtuais é:",
        options: [
            "Encapsular o hardware e o Sistema Operativo como se fossem hardware.",
            "Permitir o acesso transparente a máquinas remotas que corram um Sistema Operativo diferente.",
            "É suportar diferentes tipos de processadores na mesma máquina.",
            "Nenhuma das anteriores."
        ],
        answer: "Encapsular o hardware e o Sistema Operativo como se fossem hardware."
    },
    {
        question: "Na comutação entre processos faz-se, entre outras operações:",
        options: [
            "A salvaguarda do processo que vai ter acesso à UCP.",
            "A salvaguarda do processo que vai perder o acesso à UCP.",
            "A salvaguarda do processo que vai perder acesso à UCP, apesar da informação do PCB estar danificada.",
            "Nenhuma das anteriores."
        ],
        answer: "A salvaguarda do processo que vai perder o acesso à UCP."
    },
    {
        question: "Num sistema operativo multitarefa, um programa:",
        options: [
            "É sempre constituído por um único processo.",
            "É sempre constituído por vários processos.",
            "Pode ser constituído por um ou por vários processos.",
            "Nunca pode ser constituído por vários processos."
        ],
        answer: "Pode ser constituído por um ou por vários processos."
    },
    {
        question: "Qual o estado de um processo após a execução de uma operação de I/O:",
        options: [
            "Running.",
            "New.",
            "Waiting.",
            "Nenhuma das anteriores."
        ],
        answer: "Waiting."
    },
    {
        question: "Relativamente ao método de escalonamento Multinível por Filas, de prioridades fixas, podemos afirmar que:",
        options: [
            "A sua performance está relacionada com o método de escalonamento de curto-prazo utilizado em cada uma das filas.",
            "A sua performance está relacionada com o método para atribuir os processos às várias filas.",
            "Cada fila tem prioridade absoluta sobre a outra fila.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Todas as anteriores são verdadeiras."
    },
    {
        question: "Sistemas multiprogramados:",
        options: [
            "São mais fáceis de desenvolver do que sistemas monoprogramados.",
            "Todos os processos são executados de forma mais célere.",
            "Permitem dividir a capacidade de processamento pelos processos ativos.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Permitem dividir a capacidade de processamento pelos processos ativos."
    },
    {
        question: "Relativamente ao tratamento por lotes podemos afirmar que:",
        options: [
            "Pretende automatizar a sequência de operações que envolvem a execução de um programa.",
            "Pretende evitar a perda de tempo no acesso aos periféricos.",
            "Pretende dar a cada processo uma fatia equitativa de tempo de processador.",
            "Nenhuma das anteriores é verdadeira."
        ],
        answer: "Pretende automatizar a sequência de operações que envolvem a execução de um programa."
    },
    {
        question: "Qual dos seguintes escalonadores determina qual o próximo processo a ser executado:",
        options: [
            "O escalonador de curto prazo.",
            "O escalonador de médio prazo.",
            "O escalonador de longo prazo.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "O escalonador de curto prazo."
    },
    {
        question: "A comutação de processos:",
        options: [
            "Substitui sempre o processo que se encontra em execução por um processo que se encontra na fila de ready.",
            "Obriga à paragem de qualquer operação de I/O do processo que é retirado de execução.",
            "É feita sem qualquer intervenção do Sistema Operativo.",
            "Nenhuma das anteriores."
        ],
        answer: "Substitui sempre o processo que se encontra em execução por um processo que se encontra na fila de ready."
    },
    {
        question: "O que acontece quando um processo a correr na UCP requisita uma operação de I/O, tendo este sido escalonado de forma não preemptiva e por prioridades:",
        options: [
            "O processo é removido da UCP e passa para o estado de Waiting.",
            "O processo continua na UCP e passa para o estado de Waiting.",
            "O processo é removido da UCP e passa para o estado de Ready.",
            "Nenhuma das anteriores são verdadeiras."
        ],
        answer: "O processo é removido da UCP e passa para o estado de Waiting."
    },
    {
        question: "Os sistemas multiprocessador com n processadores:",
        options: [
            "Assimétricos não partilham o barramento, o relógio e a memória.",
            "Simétricos não partilham o barramento, o relógio e a memória.",
            "Simétricos podem correr em paralelo até n processos.",
            "Simétricos podem correr em paralelo, no máximo, n-1 processos."
        ],
        answer: "Simétricos podem correr em paralelo até n processos."
    },
    {
        question: "O escalonamento preemptivo por prioridades fixas não é eficaz no escalonamento de processos em sistemas desktop, dado que:",
        options: [
            "Este tipo de escalonamento apenas é adequado para processos que não efetuem operações de I/O.",
            "Favorece os processos I/O-Bound em detrimento dos processos CPU-Bound.",
            "Este tipo de escalonamento é mais adaptado a sistemas monoprocesso.",
            "Favorece os processos CPU-Bound em detrimento dos processos I/O-Bound de igual prioridade."
        ],
        answer: "Favorece os processos CPU-Bound em detrimento dos processos I/O-Bound de igual prioridade."
    },
    {
        question: "O Process Control Block (PCB) possui informação sobre:",
        options: [
            "Identificação do processo, informação do estado do processador e informação de controlo do processo.",
            "Identificação do processador, informação relativa à zona de memória ocupada pelo processo e informação de controlo do processo.",
            "Identificação do processador, estado do processador e informação de controlo do processo.",
            "Informação do estado do processo e identificação do sistema operativo, em que o processo está a correr."
        ],
        answer: "Identificação do processo, informação do estado do processador e informação de controlo do processo."
    },
    {
        question: "Num Sistema Operativo de tempo-real:",
        options: [
            "A execução de um processo depende não apenas da obtenção de um resultado correto, mas também da sua disponibilização de acordo com uma determinada deadline.",
            "Se um processo concluir a sua computação com sucesso, mas antes da deadline associada ao processo, conduz à falha do sistema.",
            "A perda de uma deadline, associada ao processo, leva sempre à falha do sistema.",
            "Apenas pode ser executado um processo quando o anterior tiver terminado."
        ],
        answer: "A execução de um processo depende não apenas da obtenção de um resultado correto, mas também da sua disponibilização de acordo com uma determinada deadline."
    },
    {
        question: "Relativamente aos equipamentos que recorriam ao processamento em série:",
        options: [
            "As operações de I/O tinham que ser definidas pelos programas.",
            "A primeira versão já possuía um sistema operativo residente em memória.",
            "Possibilitavam que vários programas corressem concorrentemente.",
            "A primeira versão já possuía o utilitário Monitor."
        ],
        answer: "As operações de I/O tinham que ser definidas pelos programas."
    },
    {
        question: "Um sistema composto por várias unidades de processamento interligadas por uma rede de comunicação permite:",
        options: [
            "Que um programa seja executado transparentemente num sistema multiprocessador simétrico.",
            "Que várias partes do mesmo programa possam ser executadas em diferentes máquinas.",
            "Que um programa seja executado transparentemente num sistema multiprocessador assimétrico.",
            "Nenhuma das anteriores é verdadeira."
        ],
        answer: "Que várias partes do mesmo programa possam ser executadas em diferentes máquinas."
    },
    {
        question: "Que escalonadores permitem controlar o número máximo de processos no estado de ready:",
        options: [
            "Os Escalonadores de longo e médio prazo.",
            "Apenas o escalonador de médio prazo.",
            "Os escalonadores de médio e curto prazo.",
            "Nenhuma das anteriores."
        ],
        answer: "Os Escalonadores de longo e médio prazo."
    },
    {
        question: "Ordene temporalmente (do mais antigo para o mais recente) o aparecimento dos seguintes tipos de Sistemas Operativos:",
        options: [
            "Batch, Serial Processing, Time Sharing e Multiprogramming.",
            "Serial Processing, Batch, Multiprogramming e Time Sharing.",
            "Batch, Serial Processing, Multiprogramming e Time Sharing.",
            "Batch, Multiprogramming, Serial Processing e Time Sharing."
        ],
        answer: "Serial Processing, Batch, Multiprogramming e Time Sharing."
    },
    {
        question: "Um processo é:",
        options: [
            "Um programa com vários fluxos de execução.",
            "Um Programa em execução.",
            "Um programa apenas com um fluxo de execução.",
            "Todas as anteriores são verdadeiras."
        ],
        answer: "Um Programa em execução."
    },
    {
        question: "Na elaboração de um programa é normal que a ordem de utilização das ferramentas auxiliares envolvidas seja a seguinte:",
        options: [
            "Editor, compilador e linker.",
            "Editor, linker e compilador.",
            "Linker, editor e compilador.",
            "Linker, compilador e editor."
        ],
        answer: "Editor, compilador e linker."
    },
    {
        question: "Num sistema computacional com uma palavra de 64 bits:",
        options: [
            "O maior valor inteiro possível de ser representado é sempre superior ao de um sistema computacional com uma palavra de 32 bits.",
            "Os registos de uso genérico são de 16 bits.",
            "Sempre que se armazena um byte em memória são desperdiçados 7 bytes de memória.",
            "Pode ser utilizado um esquema de endereçamento de memória de 64 bits."
        ],
        answer: "O maior valor inteiro possível de ser representado é sempre superior ao de um sistema computacional com uma palavra de 32 bits."
    }
];