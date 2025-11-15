# CloseBy Towing Website

A modern, mobile-responsive website for CloseBy Towing services in San Diego, CA.

## Features

- **Mobile-First Design**: Fully responsive across all devices
- **Service Booking**: Interactive popup for requesting towing and roadside services
- **Square Payment Integration**: Secure payment processing via Square Payment Links
- **Google Maps Integration**: Location autocomplete and distance calculation
- **Firebase Integration**: Job creation and management
- **Real-time Quotes**: Dynamic pricing based on service type and distance

## Services Offered

- Local Towing
- Long-Distance Towing
- Battery Jump Start
- Lockout Service
- Tire Change
- Fuel Delivery
- Winch-Out / Recovery
- Collision Recovery

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Payments**: Square Payment Links
- **Database**: Firebase Firestore
- **Maps**: Google Maps API
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in `.env.local`:
   ```env
   # Google Maps API Key
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

   # Firebase Admin Credentials
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_CLIENT_EMAIL=your_firebase_client_email
   FIREBASE_PRIVATE_KEY=your_firebase_private_key

   # Square Payment Configuration
   NEXT_PUBLIC_SQUARE_APPLICATION_ID=your_square_application_id
   SQUARE_ACCESS_TOKEN=your_square_access_token
   NEXT_PUBLIC_SQUARE_LOCATION_ID=your_square_location_id
   SQUARE_ENVIRONMENT=production
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── services/          # Service pages
│   └── payment-success/   # Payment success page
├── components/            # React components
├── data/                  # Static data (vehicle options)
├── lib/                   # Utility libraries
└── utils/                 # Helper functions
```

## Environment Variables

All sensitive configuration is handled through environment variables. Make sure to:

1. Obtain a Google Maps API key with Places API enabled
2. Set up Firebase project with Firestore
3. Create Square application and get production credentials
4. Configure all environment variables before deployment

## Support

For technical support or questions, contact the development team.