  # SOLID Principles

## Resoures
- CodelyTv "Principios SOLID aplicados" [course](https://pro.codely.com/library/principios-solid-aplicados-36875/77070/path/?path_id=7379060)
- S.O.L.I.D The first 5 principles of Object Oriented Design with JavaScript [Medium article](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

### What are they?

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
       

# Open Close Principle (OCP)
# Liskov Substitution Principle (LSP)
# Interface Segregation Principle (ISP)
# Dependency Inversion Principle (DIP)
