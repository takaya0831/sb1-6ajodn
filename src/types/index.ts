export interface Customer {
  id: string;
  name: string;
  email: string;
  website: string;
  accountId: string;
  accountPassword: string;
  maintenanceStatus: 'active' | 'inactive' | 'pending';
  createdAt: string;
}

export interface Inquiry {
  id: string;
  customerId: string;
  subject: string;
  message: string;
  status: 'new' | 'inProgress' | 'resolved';
  createdAt: string;
}

export interface Application {
  id: string;
  customerId: string;
  plan: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  amount: number;
  createdAt: string;
}

export interface MaintenanceRecord {
  id: string;
  customerId: string;
  status: 'active' | 'inactive';
  startDate: string;
  endDate: string;
  plan: string;
}