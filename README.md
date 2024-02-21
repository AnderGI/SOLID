  # SOLID Principles

## Resoures
- CodelyTv "Principios SOLID aplicados" [course](https://pro.codely.com/library/principios-solid-aplicados-36875/77070/path/?path_id=7379060)
- S.O.L.I.D The first 5 principles of Object Oriented Design with JavaScript [Medium article](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)



# Single Responsibility Principle (SRP)

  <section>
      <article>
        > A class should only have one reason to change   
          <h2>Conceptual Introduction</h2>
          <ul>
            <li> Concept : 
              <ul>
                  <li>One Class === One concept and responsibility</li>
              </ul>
            </li>
            <li> How to achieve it : 
              <ul>
                  <li>Small classes with clear functional boundaries</li>
              </ul>
            </li>
             <li> Its purpose : 
              <ul>
                  <li>High cohesion and robustness</li>
                 <li>Allow class composition (DIP)</li>
                 <li>Reduce code duplicity</li>
              </ul>
            </li>
          </ul>
      </article>
    </section>
    <section>
      <article>
        <header>
            <h3>Example of SRP violation</h3>
        </header>
         </article>
    </section>
<code>Book</code> domain model
```
              final class Book
              {
                  public String getTitle()
                  {
                      return "A great book";
                  }
                  public String getAuthor()
                  {
                      return "John Doe";
                  }
                  public void printCurrentPage()
                  { 
                      System.out.println("current page content");
                  }
              }
  ```
         
<code>Client</code> service
```
              final class Client
              {
                  public Client() {
                      Book book = new Book(…);
                      book.printCurrentPage();
                  }
              }
```

>[!WARNING]
>Book is coupled to the standard output channel. The class knows how to model the book data and how to print it. 
          
  <section>
      <article>
        <header>
            <h3>Respecting SRP</h3>
        </header>
         </article>
    </section>
<code>Book</code> domain model
```
final class Book
{
  public String getTitle()
  {
    return "A great book";
  }
  public String getAuthor()
  {
    return "John Doe";
   }
   public String getCurrentPage()
    {
      return "current page content";
     }
  }
  ```


<code>Printer</code> class
```
final class StandardOutputPrinter
{
    public void printPage(String page)
    {
        System.out.println(page);
    }
}
``` 
      
<code>Client</code> service
```
final class Client
{
    public Client() {
        Book book = new Book(…);
        String currentPage = book.getCurrentPage();
        StandardOutputPrinter printer = new StandardOutputPrinter();
        printer.printPage(currentPage);
    }
}
```      
>[!TIP]
>We could use some kind of Printer interface as a way of establishing an abstract contract for printing functionality        

# Open Close Principle (OCP)
> Software should be opened to extensions and closed to modifications 
  <section>
      <article>
          <h2>Conceptual Introduction</h2>
          <ul>
            <li> Concept : 
              <ul>
                  <li>A class should be easily extendable without modifying the class or function itself</li>
              </ul>
            </li>
            <li> How to achieve it : 
              <ul>
                  <li>Avoiding specific implementations and using abstractions (interfaces / abstract classes)</li>
              </ul>
            </li>
             <li> Its purpose : 
              <ul>
                  <li>Addid use cases becomes easy task</li>
              </ul>
            </li>
          </ul>
      </article>
    </section>
    ###  JS example using function compositions
Imagine we have a function that calculates the sum of all areas of x number of figures 
```
sum () {
 
 const area = []
 
 for (shape of this.shapes) {
  
  if (shape.type === 'Square') {
     area.push(Math.pow(shape.length, 2)
   } else if (shape.type === 'Circle') {
     area.push(Math.PI * Math.pow(shape.length, 2)
   }
 }
 return area.reduce((v, c) => c += v, 0)
}
```
Having this structure of if/else or switch-cases can be valid but it does not respect the OCP principle. Everytime we add a new shape, that <code>shape.type</code> has to be added to the function itsselfs
which can cause, among other drawbacks, testing issues. Functions, classes... Should not depend on specific things, rather they should depend on something that all those things have in common, like another class or interface. In JS there are no interfaces. We will use functions instead.

This will be our interface :
```
const shapeInterface = (interfaceObject) => ({
  type : 'geometricalFigure',
  area : () => interfaceObject.area(interfaceObject)
})
```
Square impementation :
```
const square = (length) => {
  const proto = {
    length,
    area : (args) => Math.pow(args.length, 2)
  }
  const basics = shapeInterface(proto)
  return Object.assign(Object.create(basics), {length})
}
```
>[!NOTE]
> We have a lenght property for square and a area method which will take the whole proto object and implement a function base on its properties to calculate its area

New sum fuction
```
sum() {
  const area = []
  for (shape of this.shapes) {
    if (shape.type === 'shapeInterface') {
       area.push(shape.area())
     } else {
       throw new Error('this is not a shapeInterface object')
     }
   }
   return area.reduce((v, c) => c += v, 0)
}
```

[Resource](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

# Liskov Substitution Principle (LSP)
# Interface Segregation Principle (ISP)
# Dependency Inversion Principle (DIP)
