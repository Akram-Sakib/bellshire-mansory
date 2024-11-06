export interface NavItem {
  headTitle: string;
  items: {
    title: string;
    href?: string;
    disabled?: boolean;
    icon?: any;
    endIcon?: any;
    label?: string;
    description?: string;
  }[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface IUser {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  profile: string;
  role: string;
  forgotPinCode: string;
  membership: string;
  currency: string;
  actual_balance: number;
  available_balance: number;
  changePassword: boolean;
  isActive: boolean;
  created_at: Date | string;
  updated_at: Date | string;
}

export interface ApiResponse {
  status?: boolean;
  message?: string;
  data?: any;
}
