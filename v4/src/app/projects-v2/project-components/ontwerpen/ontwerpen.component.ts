import { Component, OnInit } from '@angular/core';
import { PortfolioRoutingService } from 'src/app/services/portfolio-routing-service';


@Component({
  selector: 'app-ontwerpen',
  templateUrl: './ontwerpen.component.html',
  styleUrls: ['./ontwerpen.component.scss']
})
export class OntwerpenComponent implements OnInit {

  constructor(private _routingService: PortfolioRoutingService) {}

  ngOnInit() {
    this._routingService.registerRoutes();
  }

}
