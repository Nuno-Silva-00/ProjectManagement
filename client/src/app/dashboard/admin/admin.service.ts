import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private config = signal([
    {
      name: 'Board',
      path: '/dashboard/board',
      img: 'assets/kanban.svg',
      imgAlt: 'Board icon',
      active: true,
    },
    {
      name: 'Inventory',
      path: '/dashboard/inventory',
      img: 'assets/inventory.svg',
      imgAlt: 'Inventory icon',
      active: true,
    },
    {
      name: 'Settings',
      path: '/dashboard/settings',
      img: 'assets/settings.svg',
      imgAlt: 'Settings icon',
      active: true,
    },
    {
      name: 'Admin Panel',
      path: '/dashboard/admin',
      img: 'assets/admin.svg',
      imgAlt: 'Admin icon',
      active: true,
    },
  ]);

  navActiveTabs = computed(() => {
    return this.config().filter((tab) => tab.active);
  });
}
