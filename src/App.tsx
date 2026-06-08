import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { VideosPage } from './pages/VideosPage';
import { MusicPage } from './pages/MusicPage';
import { RecipesPage } from './pages/RecipesPage';
import { BusinessDirectoryPage } from './pages/BusinessDirectoryPage';
import { BusinessProfilePage } from './pages/BusinessProfilePage';
import { ArchivePage } from './pages/ArchivePage';
import { MemorialsPage } from './pages/MemorialsPage';
import { WeatherPage } from './pages/WeatherPage';
import { TourismPage } from './pages/TourismPage';
import { AdvertisingPage } from './pages/AdvertisingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/article/:articleSlug" element={<ArticlePage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/directory" element={<BusinessDirectoryPage />} />
            <Route path="/directory/:businessSlug" element={<BusinessProfilePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/memorials" element={<MemorialsPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/tourism" element={<TourismPage />} />
            <Route path="/advertise" element={<AdvertisingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
