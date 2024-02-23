# Dependency Inversion Principle (DIP)
> Módulos de alto nivel no deberían depender de los de bajo nivel. Ambos deberían depender de abstracciones[^1].

> Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.[^2].

>[!NOTE]
>Inyectar dependencias (parámetros recibidos en constructor). Depender de las interfaces (contratos) de estas dependencias y no de implementaciones concretas. LSP como premisa[^1].

:+1: Facilitar la modificación y substitución de implementaciones[^1].
:+1: Mejor testabilidad de clases[^1].

[^1]: [Principios SOLID aplicados - CodelyTV](https://pro.codely.com/library/principios-solid-aplicados-36875/77070/about/).
[^2]: [SOLID the first 5 priciples of object oriented design with javascript - Medium](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)
[^3]: [How is dependency inversion related to higher-order functions?](https://softwareengineering.stackexchange.com/questions/103508/how-is-dependency-inversion-related-to-higher-order-functions)


