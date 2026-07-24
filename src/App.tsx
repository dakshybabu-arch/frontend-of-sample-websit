import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Packages } from '@/pages/Packages';
import { Gallery } from '@/pages/Gallery';
import { Testimonials } from '@/pages/Testimonials';
import { FAQs } from '@/pages/FAQs';
import { Contact } from '@/pages/Contact';
import { Book } from '@/pages/Book';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { Privacy } from '@/pages/Privacy';
import { Terms } from '@/pages/Terms';
import { NotFound } from '@/pages/NotFound';
import { AdminDashboard } from '@/pages/AdminDashboard';
import { ForgotPassword } from '@/pages/ForgotPassword';
import { useAuth } from '@/context/AuthContext';

function App() {
  const { isLoading, isAdmin } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface text-text">Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="packages" element={<Packages />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book" element={<Book />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route
          path="admin"
          element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
