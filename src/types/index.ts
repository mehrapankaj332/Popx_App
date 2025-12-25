export type Page = 1 | 2 | 3 | 4 | 5;

export interface NavigationState {
  page: Page;
  totalPages: number;
  goNext: () => void;
  goPrev: () => void;
  goHome: () => void;
  goToPage: (page: Page) => void;
}

export interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName?: string;
  isAgency: boolean;
}


