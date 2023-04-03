interface NavigationItem {
  label: string;
  destination: string;
  subItems?: [{ label: string; destination: string }];
}
