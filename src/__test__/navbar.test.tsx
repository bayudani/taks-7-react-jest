import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navbar'; // Pastikan path benar
import '@testing-library/jest-dom';

const renderWithRouter = (ui: React.ReactElement, route: string = '/') => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  );
};

describe('Navbar Component', () => {
  test('renders all navigation links', () => {
    renderWithRouter(<Navbar />);

    const navLinks = [
      { text: /home/i, href: '/' },
      { text: /about/i, href: '/about' },
      { text: /projects/i, href: '/projects' },
      { text: /contact/i, href: '/contact' },
    ];

    navLinks.forEach(link => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('highlights current active route', () => {
    renderWithRouter(<Navbar />, '/about'); // Atur route ke '/about'

    // Periksa apakah link "About" memiliki kelas aktif
    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toHaveClass('text-primary'); // Pastikan kelas aktif ada
  });
});
