import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-record',
  templateUrl: './no-record.component.html',
  styleUrls: ['./no-record.component.scss']
})
export class NoRecordComponent implements OnInit {

  @Input() noDataText = 'No records found';

  constructor() { }

  ngOnInit() {
  }

}
