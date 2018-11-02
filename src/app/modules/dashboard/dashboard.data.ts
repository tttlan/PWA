export interface SECTION { name: string; title: string; icon: string; actions?: Array<any>; }

export const SECTIONS = [
  {
    name: 'VIN Number',
    title: 'Search for',
    icon: 'vin-number.png',
    actions: [
      { name: 'Code Scanner', router: '/' },
      { name: 'Enter Code', router: '/' }
    ]
  },
  {
    name: 'National Code (AT)',
    title: 'Search for',
    icon: 'national-code.png',
    actions: [
      { name: 'Enter National Code', router: '/' }
    ]
  },
  {
    name: 'Vehicle Description & Vintage',
    title: 'Search for',
    icon: 'vehicle-vintage.png',
    actions: [
      { name: 'Give Information', router: '/' }
    ]
  },
  {
    name: 'Shopping Cart',
    title: 'My',
    icon: 'my-shopping-cart.png',
    actions: [
      { name: 'Go to My Shopping Cart', router: '/' }
    ]
  },
  {
    name: 'Profile',
    title: 'My',
    icon: 'my-profile.png',
    actions: [
      { name: 'Go to Profile', router: '/' }
    ]
  }
];
