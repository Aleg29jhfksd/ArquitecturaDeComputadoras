import { text } from "framer-motion/client";

export const sectionData = [  
  {  
    title: "Unidad 1: Modelos de arquitectura",  
    text: `
    Las arquitecturas clásicas son las más antiguas y funcionan con un único procesador que ejecuta instrucciones de manera secuencial, lo que las hace simples pero lentas. Más adelante están las arquitecturas segmentadas o pipeline, que dividen la ejecución de una instrucción en varias etapas, permitiendo procesar múltiples instrucciones al mismo tiempo y aumentando el rendimiento, aunque pueden presentar problemas cuando una instrucción depende de otra. Finalmente, las arquitecturas de multiprocesamiento utilizan varios procesadores o núcleos trabajando en paralelo, lo que permite resolver tareas más rápido y manejar múltiples procesos, aunque esto aumenta la complejidad de programación y sincronización.

    El CPU es el componente central de la computadora, encargado de interpretar, ejecutar instrucciones y coordinar el funcionamiento de todo el sistema. Dentro del CPU, la ALU realiza las operaciones matemáticas y lógicas fundamentales, mientras que los registros almacenan datos temporales necesarios para la ejecución rápida de instrucciones. La comunicación entre todos los componentes del sistema se realiza mediante los buses, que se dividen en bus de datos, bus de direcciones y bus de control, cada uno con funciones específicas para transmitir información y coordinar operaciones.

    Respecto a la memoria, la RAM es la memoria principal donde se almacenan temporalmente los datos y programas que la CPU utiliza mientras trabaja; es rápida pero volátil. Complementándola, existe la memoria caché, que es mucho más rápida y almacena datos usados frecuentemente para evitar que la CPU tenga que recurrir continuamente a la RAM. Esta memoria se organiza en niveles (L1, L2 y L3), siendo L1 la más rápida y pequeña y L3 la de mayor capacidad pero más lenta en comparación con las anteriores.

    En cuanto a los sistemas de entrada y salida, se explican  los dispositivos que permiten comunicar al usuario con la computadora, ya sea ingresando datos (como teclado o mouse), mostrando resultados (como el monitor) o realizando ambas funciones (como pantallas táctiles). También se describen los métodos de operación de E/S: la E/S programada, donde la CPU verifica constantemente si el dispositivo está listo; la E/S mediante interrupciones, en la que el dispositivo avisa a la CPU cuando necesita atención; y el acceso directo a memoria (DMA), que permite que ciertos dispositivos transfieran datos directamente a la memoria sin intervención continua del procesador, mejorando la eficiencia.

    `,
    imageSrc: "https://cdn.wccftech.com/wp-content/uploads/2022/09/13th-Gen-Intel-Core-2.jpg"  
  },  
  {  
    title: "Unidad 2: Estructura y funcionamiento del CPU",  
    text: `
    El CPU es el componente central de cualquier sistema de cómputo y se le considera el “cerebro” de la computadora. Su función principal es interpretar datos y ejecutar instrucciones mediante operaciones aritméticas, lógicas y de control. Para lograrlo, el procesador se organiza internamente en varias unidades: la ALU, los registros, la unidad de control y un sistema de interconexión interna compuesto por buses de datos, direcciones y control.

    La ALU (Unidad Aritmética y Lógica) es responsable de realizar operaciones matemáticas básicas como suma y resta, además de evaluar operaciones lógicas como AND, OR y NOT. También efectúa desplazamientos de bits, útiles para multiplicaciones o divisiones. Los registros del procesador, por su parte, almacenan temporalmente instrucciones, direcciones y datos necesarios para la ejecución ágil de los programas. Entre ellos se destacan el Contador de Programa (PC), que almacena la dirección de la siguiente instrucción; el Registro de Instrucción (IR), que guarda la instrucción a ejecutar; y registros auxiliares como los de datos, índices, segmentos y el stack pointer. Además, existen registros de control y estado (como FLAGS), que contienen información vital del procesador y permiten monitorear resultados de operaciones, errores, estados del sistema y funcionamiento del sistema operativo.

    La unidad de control coordina el funcionamiento del CPU. Obtiene las instrucciones desde la memoria (fase de fetch), las interpreta generando señales de control apropiadas (fase de decode) y finalmente ordena a la ALU u otros componentes ejecutar la instrucción (fase de execute). Este proceso, conocido como ciclo de instrucción, se repite continuamente mientras el procesador esté encendido. El ciclo es secuencial, automático y depende fuertemente de los registros (PC, MAR, MDR, IR) y la memoria principal. Sus funciones incluyen obtener, interpretar y ejecutar instrucciones, así como mantener el flujo del programa actualizado y eficiente.

    `,  
    imageSrc: "https://tse2.mm.bing.net/th/id/OIP.L9gaKYB-iTEJ-G-JBhTCcwHaFj?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=60&h=60&c=7&rs=1&o=7&rm=3"
  },  
  {  
    title: "Unidad 3: Seleccion de componentes para ensamblaje de equipo",  
    text:  `
     El chipset un conjunto de circuitos que actúa como el centro de comunicación de la placa base. Su función es coordinar el flujo de información entre el procesador, la memoria RAM, las tarjetas de expansión y otros puertos del sistema. Tradicionalmente se dividía en Puente Norte, encargado de componentes de alta velocidad como memoria y video, y Puente Sur, que gestionaba periféricos y dispositivos más lentos; aunque en procesadores modernos gran parte del Puente Norte ya está integrado en el CPU.

     La CPU se describe como el componente principal del sistema encargado de ejecutar instrucciones mediante operaciones aritméticas y lógicas. Con el tiempo ha evolucionado integrando múltiples núcleos e incluso otros subsistemas dentro de un solo chip (SoC). Sus principales componentes internos incluyen la ALU, la unidad de control y los registros internos, que permiten almacenar datos e instrucciones temporales durante la ejecución de programas.

     El controlador del bus es el encargado de regular la frecuencia, temporización y sincronización de las señales que viajan por los buses del sistema, que son los canales de comunicación que conectan los distintos componentes del equipo. También se estudian los dispositivos de entrada/salida, necesarios para la interacción con el usuario o para mostrar información procesada, tales como teclados, ratones, monitores, bocinas, y puertos de conectividad. Cada dispositivo debe seleccionarse considerando su función, precisión, ergonomía o calidad visual/sonora.

     El controlador de interrupciones es el encargado de manejar señales de los dispositivos cuando requieren atención del procesador. Este mecanismo permite que la CPU no desperdicie tiempo verificando constantemente el estado de cada dispositivo. También se presenta el controlador DMA, que permite a ciertos periféricos transferir datos directamente hacia o desde la RAM sin intervención constante de la CPU, aumentando la eficiencia general del sistema. Existen distintos tipos de transferencia DMA, como por ráfaga, por ciclo robado y DMA transparente, los cuales se adaptan a diferentes necesidades de rendimiento y disponibilidad del bus.

     En el apartado de almacenamiento, se diferencian la memoria RAM (temporal y rápida) y el almacenamiento permanente (HDD, SSD y unidades externas). Se explican las características de cada tipo, enfatizando que los SSD ofrecen mayor velocidad al usar memoria flash, mientras que los HDD utilizan discos magnéticos y suelen ser más económicos por mayor capacidad.
    `,
    imageSrc: "https://static.vecteezy.com/system/resources/previews/008/346/406/large_2x/chipset-icon-isolated-on-white-background-free-vector.jpg"  
  },  
  {  
    title: "Unidad 4: Computacion paralela",  
    text: `

    Se entiende por computación paralela como la técnica que permite dividir un problema grande en partes más pequeñas para resolverlas simultáneamente usando múltiples procesadores o núcleos. Su objetivo principal es reducir el tiempo de ejecución y resolver tareas que serían demasiado lentas o imposibles con un solo procesador. Conceptos clave como los hilos, los núcleos y la Ley de Amdahl explican las limitaciones y el potencial del paralelismo.

    Tipos de computación paralela. El paralelismo a nivel de bit aumenta el tamaño de palabra para procesar más datos por ciclo; el paralelismo a nivel de instrucción (ILP) permite ejecutar varias instrucciones al mismo tiempo dentro de un procesador; el paralelismo a nivel de hilo distribuye hilos entre varios núcleos; y el paralelismo a nivel de tarea permite que procesos independientes se ejecuten en paralelo, como en servidores que atienden múltiples usuarios simultáneamente.

    Los sistemas de memoria compartida es cuando varios procesadores acceden a un mismo espacio de memoria. En UMA el tiempo de acceso es igual para todos, mientras que en NUMA cada procesador tiene memoria local más rápida, aunque puede acceder a memoria remota. UMA es más fácil de programar, pero NUMA ofrece mejor escalabilidad.

    Los sistemas de memoria distribuida es donde cada nodo tiene su propia memoria privada y la comunicación se realiza mediante mensajes. Estos sistemas son altamente escalables, permiten miles de nodos y son fundamentales en clusters y supercomputadoras, aunque requieren una programación más compleja. Se destacan sus ventajas en rendimiento, escalabilidad, tolerancia a fallos y sus amplios usos en big data, machine learning y servicios en línea.

    `,  
    imageSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwoQhg_h1TsaLhtxIuyOh4zwGTEqkx4F2qVE3Cmqnn-uBlkJWQym7iDDRm640lLy6ZqibW64c0tbukp6awpmGg_qXaS6TeJfe3XJ8RUko8xQzidYraBGiH5huvckpMcxPYaNSMeCwjyGzP/s1600/computacion+paralela.jpg"  
  },  
  {  
    title: "Unidad 5: Procesadores",  
    text: `
    Procesadores de gama baja: Estan diseñados para tareas básicas como navegación web, ofimática ligera y uso estudiantil. Estos modelos priorizan el bajo consumo y el precio accesible, por lo que suelen tener pocos núcleos, frecuencias modestas y caché reducida, siendo suficientes para uso cotidiano pero insuficientes para tareas exigentes. Ejemplos incluyen procesadores como el Intel Celeron G5905, Pentium Gold G5400 y AMD Athlon 3000G, todos orientados a equipos económicos.

    Procesadores de gama media: ofrecen un equilibrio entre precio y rendimiento. Están pensados para multitarea, juegos en 1080p, edición ligera y productividad general. Suelen tener entre 6 y 8 núcleos, frecuencias altas y mayor caché. Modelos como el Intel Core i5-13400, i5-12400F, i5-12600K y los Ryzen 5 (5600, 7600, 9600X) destacan por brindar un excelente desempeño sin alcanzar el costo de la gama alta, siendo la opción más popular entre usuarios domésticos y gamers moderados.

    Procesadores de gama alta: representan el máximo rendimiento disponible. Estos procesadores integran gran cantidad de núcleos e hilos, altas frecuencias en modo turbo y una enorme cantidad de memoria caché, permitiendo ejecutar tareas muy exigentes como videojuegos de última generación, edición profesional, modelado 3D e inteligencia artificial. Ejemplos destacados son los Intel Core i9-14900K, i9-13900K, Ultra 9 285K, y los AMD Ryzen 9 y Ryzen 7 con tecnología 3D V-Cache, orientados a entusiastas y profesionales.

    `, 
    imageSrc: "https://tecnologia-informatica.com/wp-content/uploads/2018/07/tipos-de-computadoras-1.jpeg"  
  }  
];