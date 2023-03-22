# Clase 17 marzo

## 1. Estandares de calidad

**PascalCase** EstudianteCalidad
**camelCase** estudianteCalidad
**snake_case** estudiante_calidad
nombre de tablas: minuscula, plural, snake_case
Campos: minuscula, id, fk tablamencionada_id -> producto/s_id (laravel con s)
standares: created_at, update_at, deleted_at
realizar standarizacion en nuestro software

## Tarea 5

añadir a la documentacion la seleccion de las 9. metricas. en el standar
10 niveles puntuales de la metrica
parte de la evaluacion q nosotros definamos. Ej: elias franco
11. criterios de evaluacion
13 evaluacion de metricas.. nivel esperado.. nivel actual..
tarea seleccionar un standar copiar y pegar estandar.. q es eficiencia, mantenibilidad...

Para el miercoles y chequearemos lo q hicismos

estandares iso9126
los 4 estandares
definiciones del 1
metricas del 2,3,4

directo ir a la formula, guiarnos de ese ejemplo de la captura del classroom.

## 2. Estandares de calidad

Modelos de calidad interna y externa son utilizados para evaluar la calidad del software en diferentes niveles. Las métricas de calidad de uso están enfocadas en medir cómo los usuarios interactúan con el software y si el software cumple con sus necesidades.

A continuación, se presentan algunos ejemplos de modelos de calidad interna y externa, así como métricas de calidad de uso:

**Modelo de calidad interna:**

El modelo de calidad interna se enfoca en la calidad del código fuente del software. Algunas métricas que se pueden utilizar para evaluar la calidad interna son:

Complejidad ciclomática: mide la complejidad del código y su capacidad de ser comprendido y mantenido.
Cobertura de código: mide la cantidad de código que es ejecutado durante las pruebas.
Longitud de los métodos: mide la cantidad de líneas de código que hay en cada método.

**Modelo de calidad externa:**

El modelo de calidad externa se enfoca en la calidad del software en términos de su funcionalidad y usabilidad. Algunas métricas que se pueden utilizar para evaluar la calidad externa son:

Eficiencia: mide la capacidad del software para realizar tareas en un tiempo adecuado.
Fiabilidad: mide la capacidad del software para funcionar correctamente y sin errores.
Usabilidad: mide la capacidad del software para ser utilizado fácilmente por los usuarios.

**Métricas de calidad de uso:**

Las métricas de calidad de uso se enfocan en evaluar la facilidad de uso y la satisfacción de los usuarios. Algunas métricas que se pueden utilizar para evaluar la calidad de uso son:

Tiempo de aprendizaje: mide el tiempo que le toma a un usuario aprender cómo utilizar el software.
Eficiencia de uso: mide la cantidad de tiempo que le toma a un usuario realizar una tarea utilizando el software.
Satisfacción del usuario: mide el grado de satisfacción que tiene el usuario al utilizar el software.

Ejercicio resuelto:

Supongamos que se está desarrollando un sistema de gestión de tareas y se desea evaluar la calidad de uso del software. Se han definido las siguientes métricas de calidad de uso:

Tiempo de aprendizaje: se realizará un estudio para determinar cuánto tiempo le toma a un usuario aprender cómo utilizar el software. Se espera que el tiempo de aprendizaje sea de 5 minutos o menos.
Eficiencia de uso: se medirá la cantidad de tiempo que le toma a un usuario realizar una tarea específica utilizando el software. Se espera que el tiempo promedio sea de 1 minuto o menos.
Satisfacción del usuario: se utilizará una encuesta para medir la satisfacción del usuario al utilizar el software. Se espera que al menos el 80% de los usuarios califiquen el software como "bueno" o "excelente".
Para evaluar estas métricas, se pueden realizar pruebas con un grupo de usuarios representativos. Por ejemplo, se podría seleccionar un grupo de 50 personas que tengan experiencia en el uso de sistemas de gestión de tareas y pedirles que utilicen el software durante un período de tiempo determinado.

Una vez que se hayan recopilado los datos, se pueden analizar y comparar con los objetivos establecidos para determinar si el software cumple con los requisitos de calidad de uso.

## Tarea modelo de calidad

3 tablas:

      - 1 tabla de calidad iterna
      - 1 tabla de calidad externa
      - 1 tabla de calidad de uso

Cada tabla ha de tener
  
      - 2 caracteristicas
      - 3 subcaracteristicas por tipo de calidad
      - 2 metricas por cada subcaracteristica en calidad interna y externa, en calidad de usos todas

### Tabla de calidad interna
  
<!-- 
•	Calidad Interna: Características del producto de software desde una perspectiva interna:
+ Funcionalidad. - Es la capacidad del software para poder satisfacer las funciones a las necesidades declaradas.
  - Precisión. – El software debe tener los resultados correctos con la exactitud necesaria. 
  - Interoperabilidad. – El software debe ser capaz de interactuar recíprocamente con uno o más sistemas especificados.
  - Seguridad(Informática). – El software debe proteger la información y los datos, para que las personas no autorizadas no puedan modificar o leer los mismos.
+ Confiabilidad. - La capacidad del producto de software para mantener un nivel de ejecución especificado cuando se usa bajo las condiciones especificadas
  - Madurez. – Es la capacidad del software para evitar un fallo total como resultado de haberse producido un fallo del software.
  - Tolerancia a fallos. – Capacidad del software de mantener un nivel de ejecución especificado en caso de fallos o infracción en su interface.
  - Recuperabilidad. - Capacidad del producto de software de restablecer un nivel de ejecución especificado y recuperar los datos directamente afectados en caso de fallo total.

 -->
|2 Caracteristicas|3 subcaracteristicas|2 metricas|Formula|
|---|---|---|---|
|Funcionalidad|Precisión|Presicion de calculos computacionales| X=A/T  A =Número de Cálculos inexactos  T = Número de cálculos totales evaluados|
|||Presicion de calculos computacionales| X=A/T  A =Número de Cálculos inexactos  T = Número de cálculos totales evaluados|
| |Interoperabilidad|Porcentaje de fallos| X = Número de fallos / Número de pruebas realizadas|
| ||Porcentaje de fallos| X = Número de fallos / Número de pruebas realizadas|
| |Seguridad|Porcentaje de vulnerabilidades| X = Número de vulnerabilidades / Número de pruebas realizadas|
|Confiabilidad|Madurez|Complejidad ciclomática| mide la complejidad del código y su capacidad de ser comprendido y mantenido.|
|||Complejidad ciclomática| mide la complejidad del código y su capacidad de ser comprendido y mantenido.|
| |Tolerancia a fallos|Cobertura de código| mide la cantidad de código que es ejecutado durante las pruebas.|
| | |Cobertura de código| mide la cantidad de código que es ejecutado durante las pruebas.|
| |Recuperabilidad|Longitud de los métodos| mide la cantidad de líneas de código que hay en cada método.|
| ||Longitud de los métodos| mide la cantidad de líneas de código que hay en cada método.|
