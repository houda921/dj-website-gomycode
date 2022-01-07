import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProjectHttpInterceptor implements HttpInterceptor {
  private readonly apiUrl = 'https://www.dieterjordens.com/api/projects';

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    if(!environment.production){
      console.log('Intercepted request: ' + httpRequest.url);
      if (httpRequest.url === this.apiUrl) {
        return of(new HttpResponse({
          status: 200, body: JSON.parse(`[{"icon":"fa-water","client":"Aquafin","jobTitle":"Data Engineer","timeSpan":"May 2021 - Present","responsibilities":["Integration with multiple internal applications and different data sources","The development of an application \`Rosi\` that allows municipalities to manage their underground patremonium."],"technologies":["Intellij","Java 11","CSS","Azure","BitBucket","Microsoft SQL Server","Scrum/Agile","Spring","Jira","Liquibase","Jenkins","JUnit","Spring WebFlux","Eureka","OpenAPI","Python"]},{"icon":"fa-file","client":"Smals","jobTitle":"Lead Developer","timeSpan":"September 2018 - May 2021","responsibilities":["Full Stack Development of a document storage application ","Integration with other applications and data sources"],"technologies":["Intellij","Nginx","CouchDB","Node","Scrum/Agile","Angular","Java 8","TypeScript","AssertJ","ElasticSearch","Docker","Neo4j","JUnit","Jasmine","SCSS","Swagger","Keycloak","REST Assured","KeyLines","Spring","Jira","Jenkins","Git","Mockito","Cypress"]},{"icon":"fa-tree","client":"Ravago","jobTitle":"Java Developer","timeSpan":"May 2017 - August 2018","responsibilities":["Development of a custom ERP tool used within the worldwide Ravago Group","Deployment of applications for multiple teams","Leading when this was requested (squad lead, substitute scrum master)","Aid the transformation of a manual testing strategy to an automated testing strategy","Contributed to the project of maintaining an old code base and migrating it to a new high-performance environment","Performed complex queries on the production database to correct data on request"],"technologies":["Intellij","JBoss","JSP","Scrum/Agile","Perl","Java 6","Spring","Jira","SQL","Jenkins","Git","Docker","Confluence","Mockito","Selenium","Bamboo"]},{"icon":"fa-headphones","client":"Bose","jobTitle":"Java Developer","timeSpan":"October 2016 - March 2017","responsibilities":["Development of a B2B Consumer Portal"],"technologies":["Intellij","PowerMock","Html5","Scrum/Agile","AEM","Spring","Groovy","Java 8","jQuery","Mockito","SCSS","Javascript","Bamboo","Hybris"]}]`)
        }));
      }
    }
    return httpHandler.handle(httpRequest);
  }
}
