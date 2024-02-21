# SOLID Principles

## Resoures
- CodelyTv "Principios SOLID aplicados" [course](https://pro.codely.com/library/principios-solid-aplicados-36875/77070/path/?path_id=7379060)
- S.O.L.I.D The first 5 principles of Object Oriented Design with JavaScript [Medium article](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

### What are they?

# Single Responsibility Principle (SRP)
<section>
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
        <main>
          <section>
              <p><code>Book</code> domain model class</p>
            </section>
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
         
          <section>
              <p><code>Client</code> domain model class</p>
              </code>
              final class Client
              {
                  public Client() {
                      Book book = new Book(…);
                      book.printCurrentPage();
                  }
              }
              </code>
          </section>
          </main>
        </article>
    </section>
</section>
# Open Close Principle (OCP)
# Liskov Substitution Principle (LSP)
# Interface Segregation Principle (ISP)
# Dependency Inversion Principle (DIP)
