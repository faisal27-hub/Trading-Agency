import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ApproachPage } from './pages/Approach';
import { PerformancePage } from './pages/Performance';
import { CertificationsPage } from './pages/Certifications';
import { ConsultationPage } from './pages/Consultation';
import { FAQPage } from './pages/FAQ';
import { ContactPage } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="trading-approach" element={<ApproachPage />} />
          <Route path="performance" element={<PerformancePage />} />
          <Route path="certifications" element={<CertificationsPage />} />
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
