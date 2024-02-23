# Liskov Substitution Principle (LSP)
> Si S es un subtipo de T, instancias de T deberían poderse sustituir por instancias de S sin alterar las propiedades del programa[^1].

> [!IMPORTANT]
> El comportamiento de de las subclases debe respetar el contrato establecido en la superclase. Mantener correctitud funcional para poder aplicar OCP. Es decir las subclases o implementaciones de interfaces, deben mantener no solo las cabeceras de los métodos que heredan sino su función; lo que ese caso de uso representa[^1].

1. El Principio de Sustitución de Liskov nos lleva a que las clases que heredan de una clase padre puedan tengan que cumplir si o si con el contrato establecido en la clase padre, respetando el caso de uso que especifíca ese método[^1].
2. SRP + LSP = OCP [^1]


> In other words, as simple as that, a subclass should override the parent class methods in a way that does not break functionality from a <strong>client’s point of view</strong>[^2].




[^1]: [Principios SOLID aplicados - CodelyTV](https://pro.codely.com/library/principios-solid-aplicados-36875/77070/about/).
[^2]: [SOLID the first 5 priciples of object oriented design with javascript - Medium](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

