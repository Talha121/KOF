import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },  
      // {
      //   state: 'pos',
      //   short_label: 'P',
      //   name: 'POS',
      //   type: 'link',
      //   icon: 'ti-home'
      // },       
    ],
  },
  {
    label: 'Orders',
    main: [
      
      {
        state: 'allorders',
        short_label: '0',
        name: 'Orders',
        type: 'link',
        icon: 'ti-map-alt'
      }
     
    ]
  },

  {
    label: 'Categories',
    main: [
      
      {
        state: 'allCategories',
        short_label: 'B',
        name: 'Categories',
        type: 'link',
        icon: 'ti-map-alt'
      },
     
    ]
  },
  {
    label: 'Products',
    main: [
      
      {
        state: 'allproducts',
        short_label: 'P',
        name: 'Products',
        type: 'link',
        icon: 'ti-map-alt'
      },

    ]
  }, 

  {
    label: 'Inventory Management',
    main: [
      
      {
        state: 'inventory',
        short_label: 'V',
        name: 'All Inventory',
        type: 'link',
        icon: 'ti-map-alt'
      },
      {
        state: 'addinventory',
        short_label: 'V',
        name: 'Add Inventory',
        type: 'link',
        icon: 'ti-map-alt'
      },
     
  
     
    ]
  },


  {
    label: 'Suppliers',
    main: [
      
      {
        state: 'supplier',
        short_label: 'B',
        name: 'All Suppliers',
        type: 'link',
        icon: 'ti-map-alt'
      },
     
    ]
  },
  {
    label: 'Messages',
    main: [
      
      {
        state: 'messages',
        short_label: '0',
        name: 'Contact Us',
        type: 'link',
        icon: 'ti-map-alt'
      }
     
    ]
  },
 
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
