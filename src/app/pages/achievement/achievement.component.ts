import { Component } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { AchievementService } from 'src/app/@core/data/achievement.service';

@Component({
  selector: 'ngx-achievement',
  styleUrls: ['./achievement.component.scss'],
  templateUrl: './achievement.component.html',
})
export class AchievementComponent {

  min: Date;
  max: Date;

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

  incidente = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      client_name: {
        title: 'CLIENTE Y',
        type: 'string',
        filter: false,
      },
      sev1: {
        title: 'Sev1',
        type: 'string',
        filter: false,
      },
      sev2: {
        title: 'Sev2',
        type: 'string',
        filter: false,
      },
      sev3: {
        title: 'Sev3',
        type: 'string',
        filter: false,
      },
    },
  };

  data_in = [{
    client_name: "Brasil Foods",
    sev1: '90%',
    sev2: '85%',
    sev3: '99%',
    sev4: '33%',
  }]
  
  solicitacoes = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      client_name: {
        title: 'CLIENTE Y',
        type: 'string',
        filter: false,
      },
      sev1: {
        title: 'Sev1',
        type: 'string',
        filter: false,
      },
      sev2: {
        title: 'Sev2',
        type: 'string',
        filter: false,
      },
      sev3: {
        title: 'Sev3',
        type: 'string',
        filter: false,
      },
    },
  };

  data_sr = [{
    client_name: "Drogaria Sao Paulo",
    sev1: '90%',
    sev2: '85%',
    sev3: '99%',
    sev4: '33%',
  }]

  atendimento = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      client_name: {
        title: 'CLIENTE Y',
        type: 'string',
        filter: false,
      },
      SLA_RESP_TIME: {
        title: 'Sev1',
        type: 'string',
        filter: false,
      },
    },
  };

  data_at = [{
    client_name: "BR MALLS",
    SLA_RESP_TIME: '90%',
  }]
}