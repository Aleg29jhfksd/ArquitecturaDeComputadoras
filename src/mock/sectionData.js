import { text } from "framer-motion/client";

export const sectionData = [  
  {  
    title: "Unidad 1: Modelos de arquitectura",  
    text: `
    Las arquitecturas clásicas son las más antiguas y funcionan con un único procesador que ejecuta instrucciones de manera secuencial, lo que las hace simples pero lentas. Más adelante están las arquitecturas segmentadas o pipeline, que dividen la ejecución de una instrucción en varias etapas, permitiendo procesar múltiples instrucciones al mismo tiempo y aumentando el rendimiento, aunque pueden presentar problemas cuando una instrucción depende de otra. Finalmente, las arquitecturas de multiprocesamiento utilizan varios procesadores o núcleos trabajando en paralelo, lo que permite resolver tareas más rápido y manejar múltiples procesos, aunque esto aumenta la complejidad de programación y sincronización.

    El CPU es el componente central de la computadora, encargado de interpretar, ejecutar instrucciones y coordinar el funcionamiento de todo el sistema. Dentro del CPU, la ALU realiza las operaciones matemáticas y lógicas fundamentales, mientras que los registros almacenan datos temporales necesarios para la ejecución rápida de instrucciones. La comunicación entre todos los componentes del sistema se realiza mediante los buses, que se dividen en bus de datos, bus de direcciones y bus de control, cada uno con funciones específicas para transmitir información y coordinar operaciones.

    Respecto a la memoria, la RAM es la memoria principal donde se almacenan temporalmente los datos y programas que la CPU utiliza mientras trabaja; es rápida pero volátil. Complementándola, existe la memoria caché, que es mucho más rápida y almacena datos usados frecuentemente para evitar que la CPU tenga que recurrir continuamente a la RAM. Esta memoria se organiza en niveles (L1, L2 y L3), siendo L1 la más rápida y pequeña y L3 la de mayor capacidad pero más lenta en comparación con las anteriores.

    En cuanto a los sistemas de entrada y salida, se explican los dispositivos que permiten comunicar al usuario con la computadora, ya sea ingresando datos (como teclado o mouse), mostrando resultados (como el monitor) o realizando ambas funciones (como pantallas táctiles). También se describen los métodos de operación de E/S: la E/S programada, donde la CPU verifica constantemente si el dispositivo está listo; la E/S mediante interrupciones, en la que el dispositivo avisa a la CPU cuando necesita atención; y el acceso directo a memoria (DMA), que permite que ciertos dispositivos transfieran datos directamente a la memoria sin intervención continua del procesador, mejorando la eficiencia.
    
    `,
    imageSrc: ""  
  },  
  {  
    title: "Mortadela",  
    text: "En esta segunda cajita, puedes agregar más detalles, historias o datos relevantes que complementen lo anterior. ¡Libera tu creatividad!",  
    imageSrc: "https://media.istockphoto.com/id/166155527/photo/cute-jack-russel-terrier-dog.jpg?s=612x612&w=0&k=20&c=qqbq7zfu1teB75wqM6cVVpZI1vMoCIy4yDfm2WYtb50="  
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