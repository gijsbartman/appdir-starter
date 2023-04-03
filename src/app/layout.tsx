import GlobalFooter from '@/components/GlobalFooter';
import GlobalHeader from '@/components/GlobalHeader';
import './globals.css';

export const metadata = {
  title: 'Title',
  description: 'Description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="page-wrapper">
          <GlobalHeader />
          <main id="main-content" role="main">
            {children}
          </main>
          <GlobalFooter />
        </div>
      </body>
    </html>
  );
}
