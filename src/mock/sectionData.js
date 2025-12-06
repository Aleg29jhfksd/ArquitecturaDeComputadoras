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
    title: "Sección Tres",  
    text: "Llega el momento de profundizar en el tercer tema. Usa este rincón para resaltar puntos clave con texto fluido y atractivo.",  
    imageSrc: ""  
  },  
  {  
    title: "Sección Cuatro",  
    text: "Cuarta parada: un lugar perfecto para expandir ideas o incluir consejos útiles. Manténlo interesante y fácil de leer.",  
    imageSrc: ""  
  },  
  {  
    title: "Sección Cinco",  
    text: "Y para cerrar con broche de oro, esta última sección te permite resumir todo o añadir un toque final impactante.",  
    imageSrc: ""  
  }  
];