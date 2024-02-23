# Interface Segregation Principle (OCP)
> Ningún cliente debería verse forzado a depender de métodos que no usa[^1].
> A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use[^2].

>[!NOTE]
>Definir contratos de interfaces basándonos en los clientes que las usan y no en las implementaciones que pudiéramos tener
>(Las interfaces pertenecen a los clientes)[^1].

>[!TIP]
>Evitar Header Interfaces promoviendo Role Interfaces[^1].

> [!IMPORTANT]
> Evitar depender de implementaciones específicas, haciendo uso de clases abstractas o interfaces[^1].

:+1: Alta cohesión y bajo acoplamiento estructural[^1].



>[!NOTE]
>Patrón de diseño Template Method: Plantea que en la clase abstracta definiríamos un cuerpo de método que define qué operación vamos a realizar, pero estaríamos llamando a unos métodos definidos como abstractos (delegando la implementación a los hijos).

>[!WARNING]
>¡Pero cuidado! 👀 esto implica una pérdida de la trazabilidad de nuestro código.



[^1]: [Principios SOLID aplicados - CodelyTV](https://pro.codely.com/library/principios-solid-aplicados-36875/77070/about/).
[^2]: [SOLID the first 5 priciples of object oriented design with javascript - Medium](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)


