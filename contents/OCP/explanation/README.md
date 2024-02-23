# Open Close Principle (OCP)
> El Software debería estar abierto a extensión y cerrado a modificación[^1].
> Objects or entities should be open for extension, but closed for modification[^2].

>[!NOTE]
>Open for extension means that we should be able to add new features or components to the application <strong>without breaking existing code</strong>.
>Closed for modification means that we should <strong>not introduce breaking changes to existing functionality</strong>, because that would force you
>to refactor a lot of existing code — Eric Elliott

> [!IMPORTANT]
> Evitar depender de implementaciones específicas, haciendo uso de clases abstractas o interfaces[^1].

:+1: Facilidad para añadir nuevos Casos de uso en nuestra aplicación[^1].

### :point_right:Interfaces (Cuando vayamos a desacoplar entre capas)
- :point_right:No modifica el árbol de jerarquía[^1].
- :point_right:Permite implementar N Interfaces[^1].
### :point_right:Clases Abstractas (En determinados casos para Modelos de dominios)
- :point_right:Getters privados (Tell don’t ask)[^1].
- :point_right:Permite desarrollar el patrón Template Method[^1].
- :-1:Dificultad de trazar[^1].

>[!NOTE]
>Patrón de diseño Template Method: Plantea que en la clase abstracta definiríamos un cuerpo de método que define qué operación vamos a realizar, pero estaríamos llamando a unos métodos definidos como abstractos (delegando la implementación a los hijos).

>[!WARNING]
>¡Pero cuidado! 👀 esto implica una pérdida de la trazabilidad de nuestro código.



[^1]: [Principios SOLID aplicados - CodelyTV](https://pro.codely.com/library/principios-solid-aplicados-36875/77070/about/).
[^2]: [SOLID the first 5 priciples of object oriented design with javascript - Medium](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)


