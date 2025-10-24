# Gorakhpur Hospital - Medical Website

A modern, responsive hospital website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, professional design with responsive layout
- **Appointment Booking**: Multi-step appointment booking system with form validation
- **Department Information**: Showcase of medical departments and services
- **Testimonials**: Patient testimonials carousel
- **Theme Support**: Light/dark mode support
- **Accessibility**: Built with accessibility best practices
- **Performance**: Optimized for fast loading and SEO

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: React 19
- **TypeScript**: Full TypeScript support
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + Shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Animations**: Tailwind CSS animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd demo-hospital
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── appointment-form.tsx
│   ├── departments-section.tsx
│   ├── medical-hero.tsx
│   ├── navbar.tsx
│   └── testimonials-carousel.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Key Components

- **AppointmentForm**: Multi-step booking form with validation
- **MedicalHero**: Hero section with hospital information
- **DepartmentsSection**: Medical departments showcase
- **TestimonialsCarousel**: Patient testimonials
- **Navbar**: Responsive navigation with scroll effects

## Customization

### Colors
The project uses CSS custom properties for theming. Main colors are defined in `app/globals.css`:

- Primary: Navy Blue (#0d3b66)
- Accent: Teal (#06D6A0)
- Text: Dark Gray (#333333)

### Fonts
The project uses Poppins font family with multiple weights (400, 500, 600, 700).

## Deployment

The project is optimized for deployment on Vercel, Netlify, or any static hosting platform.

```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.
