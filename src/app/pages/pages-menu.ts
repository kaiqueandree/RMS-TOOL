import { NbMenuItem } from '@nebular/theme';
import { Injectable } from '@angular/core';

export interface MenuItem extends NbMenuItem {
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard/chart/',
    home: true,
  },
  {
    title: 'ADMINISTRATION',
    icon: 'nb-person',
    group: true,
  },
  {
    title: 'Customers',
    children: [
      {
        title: 'Customers',
        link: '/pages/customers/'
      },
      {
        title: 'BI Mapping',
        link: '/pages/bi-mapping/'
      },
      {
        title: 'Custom Metrics',
        link: '/pages/custom-metrics/'
      },
      {
        title: 'Owners',
        link: '/pages/owners/'
      },
    ]
  },
  {
    title: 'SLM Control',
    children: [
      {
        title: 'SLM Control',
        link: '/pages/slm-control/'
      },
      {
        title: 'Metrics',
        link: '/pages/metrics/',
        queryParams: {
          page: 1,
        }
      },
      {
        title: 'Ticket Data-Load',
        link: '/pages/ticket-data-load/',
        queryParams: {
          page: 1,
        }
      },
      {
        title: 'Attach Book',
        link: '/pages/attach-book/'
      },  
      {
        title: 'Checklist Book',
        link: '/pages/checklist-book/'
      },
      {
        title: 'SEF Input',
        link: '/pages/sef-input/'
      },
      {
        title: 'Book Report',
        link: '/pages/book-report/'
      },
      {
        title: 'Issues',
        link: '/pages/issues/'
      },
      {
        title: 'Adm Report',
        link: '/pages/adm-report/'
      },
    ]
  },
  {
    title: 'System Properties',
    link: '/system-properties/',
    children: [
    {
      title: 'Users',
      link: '/pages/users/',
      },
    ]
  },
  {
    title: 'TICKET MANAGEMENT',
    icon: 'nb-compose',
    group: true,
  },
  {
    title: 'Achievement',
    link: '/pages/achievement',
  },
  {
    title: 'Backlog',
    link: '/pages/backlog/',
    queryParams: {
      page: 1,
    }
  },
  {
    title: 'Purge Request',
    link: '/pages/purge-request/',
    queryParams: {
      page: 1,
    }
  },
  {
    title: 'Quality',
    link: '/pages/quality/',
    queryParams: {
      page: 1,
    }
  },
  {
    title: 'Reports',
    link: '/pages/reports/',
    queryParams: {
      page: 1,
    },
  },
  {
    title: 'CHANGE MANAGEMENT',
    icon: 'nb-shuffle',
    group: true,
  },
  {
    title: 'Handle RCA',
    link: '/pages/handle-rca/',
    queryParams: {
      page: 1,
    }
  },
  {
    title: 'Find Changes',
    link: '/pages/find-changes/',
    queryParams: {
      page: 1,
    }
  },
  {
    title: 'Job Status',
    link: '/pages/job-status/',
    queryParams: {
      page: 1,
    }
  },
  {
    title: 'Data Load',
    link: '/pages/data-load/',
    queryParams: {
      page: 1,
    }
  },
  {
    title: 'BI Mapping',
    link: '/pages/change-bi-mapping/',
    queryParams: {
      page: 1,
    }
  },
  {
    title: 'Reports',
    link: '/pages/change-reports/',
    queryParams: {
      page: 1,
    }
  },
  {
    title: 'NEED HELP?',
    icon: 'nb-help',
    group: true,
  },
  {
    title: 'Help',
  }
]

@Injectable()
export class PagesMenuProvider {
  private _menu: MenuItem[] = [];

  get menu(): MenuItem[] {
    return this._menu;
  }

  private filterMenu(menuItems: MenuItem[]): MenuItem[] {
    return menuItems.filter((menuItem: MenuItem) => {
      if (menuItem != null) {
        if (menuItem.children && menuItem.children.length > 0) {
          return this.filterMenu(menuItem.children).length > 0;
        } else {
          return true;
        }
      } else {
        return false;
      }
    });
  }
}