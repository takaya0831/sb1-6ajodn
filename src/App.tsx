import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import InquiryForm from './pages/public/InquiryForm';
import ApplicationForm from './pages/public/ApplicationForm';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import CustomerList from './pages/admin/CustomerList';
import InquiryList from './pages/admin/InquiryList';
import ApplicationList from './pages/admin/ApplicationList';
import MaintenanceList from './pages/admin/MaintenanceList';
import CustomerDetails from './pages/admin/CustomerDetails';
import RequestHistory from './pages/admin/RequestHistory';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Root redirect */}
          <Route path="/" element={<Navigate to="/inquiry" replace />} />

          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/inquiry" element={<InquiryForm />} />
            <Route path="/apply" element={<ApplicationForm />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<CustomerList />} />
            <Route path="customers/:id" element={<CustomerDetails />} />
            <Route path="inquiries" element={<InquiryList />} />
            <Route path="applications" element={<ApplicationList />} />
            <Route path="maintenance" element={<MaintenanceList />} />
            <Route path="history" element={<RequestHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;