export const menuRoutes = [
  {
    title: 'Pull to refresh',
    icon: 'refresh-outline',
    name: 'pull-to-refresh/index',
  },
  {
    title: 'Section List',
    icon: 'list-outline',
    name: 'section-list/index',
  },
  {
    title: 'Modal',
    icon: 'copy-outline',
    name: 'modal/index',
  },
  {
    title: 'InfiniteScroll',
    icon: 'download-outline',
    name: 'infinite-scroll/index',
  },
  {
    title: 'Slides',
    icon: 'flower-outline',
    name: 'slides/index',
  },
  {
    title: 'Themes',
    icon: 'flask-outline',
    name: 'themes/index',
  },
];

export const uiMenuRoutes = [
  {
    title: 'Switches',
    icon: 'toggle-outline',
    name: 'switches/index',
  },
  {
    title: 'Alerts',
    icon: 'alert-circle-outline',
    name: 'alerts/index',
  },
  {
    title: 'TextInputs',
    icon: 'document-text-outline',
    name: 'text-inputs/index',
  },
];

export const animationMenuRoutes = [
  {
    title: 'Animation 101',
    icon: 'cube-outline',
    name: 'animation-101/index',
  },
  {
    title: 'Animation 102',
    icon: 'albums-outline',
    name: 'animation-102/index',
  },
];

export const allRoutes = [
  ...menuRoutes,
  ...uiMenuRoutes,
  ...animationMenuRoutes,
];
