export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
export interface RoutesType {
  title: string;
  route: string;
  id: number;
}

export interface CounterBarType {
  count: number;
  title: string;
}

export interface ReceiptType {
  title: string;
  paragraph: string;
  icon: HTMLElement | JSX.Element;
}
