import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-router1',
  templateUrl: './router1.component.html',
  styleUrls: ['./router1.component.css']
})
export class Router1Component implements OnInit {
  public rates: any[]=[];
  public loading = true;
  public error: any;

  constructor(private apollo: Apollo,private readonly route:RouteService) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          user(id: "4dc70521-22bb-4396-b37a-4a927c66d43b")  {
              id
              email
              name
          }
      }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.rates = result?.data?.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
  
  goTo(){
    let response:{variable:string}={
      variable:'router3'
    }
    this.route.getRoute(response.variable); 
  }
}
