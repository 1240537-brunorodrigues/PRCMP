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
        answer: "múltiplas instruções do mesmo programa, em paralelo, em unidades de execução distintas da CPU."
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

];

//const questions = [
//     // Questões anteriores...
//     {
//         question: "Nova pergunta...",
//         options: [
//         "Opção A",
//         "Opção B",
//         "Opção C",
//         "Opção D"
//         ],
//         answer: "Opção correta"
//     },
//     // Mais questões...
// ];