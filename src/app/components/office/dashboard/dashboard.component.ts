import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from '../shared/services/answer.service';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(private answer: AnswerService,
    private _api : ApiService,
    private _auth: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }
  displayedColumns = [
' Stoim20201ToStoim20191', 'Stoim20202ToStoim20192',
       'Stoim20203ToStoim20193', 'Stoim20204ToStoim20194',
       'Stoim20205ToStoim20195', 'Stoim20206ToStoim20196',
       'Stoim20207ToStoim20197', 'Stoim20208ToStoim20198',
       'Stoim20209ToStoim20199', 'Stoim202010ToStoim201910',
       'Stoim202011ToStoim201911', 'Stoim202012ToStoim201912',
       'Stoim20211ToStoim20201', 'Stoim20212ToStoim20202',
       'Stoim20213ToStoim20203', 'Stoim20214ToStoim20204',
       'Stoim20215ToStoim20205', 'Stoim20216ToStoim20206',
       'Stoim20217ToStoim20207', 'Stoim20218ToStoim20208',
       'Stoim20219ToStoim20209', 'Stoim202110ToStoim202010',
       'Stoim202111ToStoim202011', 'Stoim202112ToStoim202012',
       'Netto20201ToNetto20191', 'Netto20202ToNetto20192',
       'Netto20203ToNetto20193', 'Netto20204ToNetto20194',
       'Netto20205ToNetto20195', 'Netto20206ToNetto20196',
       'Netto20207ToNetto20197', 'Netto20208ToNetto20198',
       'Netto20209ToNetto20199', 'Netto202010ToNetto201910',
       'Netto202011ToNetto201911', 'Netto202012ToNetto201912',
       'Netto20211ToNetto20201', 'Netto20212ToNetto20202',
       'Netto20213ToNetto20203', 'Netto20214ToNetto20204',
       'Netto20215ToNetto20205', 'Netto20216ToNetto20206',
       'Netto20217ToNetto20207', 'Netto20218ToNetto20208',
       'Netto20219ToNetto20209', 'Netto202110ToNetto202010',
       'Netto202111ToNetto202011', 'Netto202112ToNetto202012',
       'Kol20201ToKol20191', 'Kol20202ToKol20192', 'Kol20203ToKol20193',
       'Kol20204ToKol20194', 'Kol20205ToKol20195', 'Kol20206ToKol20196',
       'Kol20207ToKol20197', 'Kol20208ToKol20198', 'Kol20209ToKol20199',
       'Kol202010ToKol201910', 'Kol202011ToKol201911',
       'Kol202012ToKol201912', 'Kol20211ToKol20201',
       'Kol20212ToKol20202', 'Kol20213ToKol20203', 'Kol20214ToKol20204',
       'Kol20215ToKol20205', 'Kol20216ToKol20206', 'Kol20217ToKol20207',
       'Kol20218ToKol20208', 'Kol20219ToKol20209',
       'Kol202110ToKol202010', 'Kol202111ToKol202011',
       'Kol202112ToKol202012'
  ];
  dataSource = this.answer.answerRes

  back() {
    this.router.navigate(['/office', 'analytics'])
  }
}
