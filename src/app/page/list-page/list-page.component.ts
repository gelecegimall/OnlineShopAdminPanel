import { Component, OnInit } from '@angular/core';
import { TaxResponseDTO } from 'src/app/model/tax-response-dto';
import { TaxService } from 'src/app/service/tax.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  taxList: TaxResponseDTO[] = []

  constructor(private taxService: TaxService) {

  }

  ngOnInit(): void {
    //TEST GET ALL
    this.taxService.getAll().subscribe(data => {
      this.taxList = data
      console.log(this.taxList)
    })
  }

}
