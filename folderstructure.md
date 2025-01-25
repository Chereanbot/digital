digital-aksumite/
├── app/
│   ├── (public)/                # Public-facing pages
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   └── ...
│   ├── (admin)/                 # Admin dashboard (protected)
│   │   ├── dashboard/page.tsx
│   │   ├── system/users/page.tsx
│   │   └── ...
│   └── api/                     # Next.js API routes
│       ├── careers/route.ts
│       ├── contact/route.ts
│       └── ...
│
├── server/                      # Backend logic (shared with API routes)
│   ├── modules/                 # Business logic
│   │   ├── auth/                # Auth strategies (JWT/OAuth2)
│   │   ├── careers/             # Job posting logic
│   │   └── system/              # Audit logs/data encryption
│   ├── models/                  # Database models
│   │   ├── User.ts              # Admin/user schemas
│   │   └── Service.ts           # System development services
│   └── middleware/              # Security/validation
│       ├── auth.ts              # Ethiopian data compliance checks
│       └── audit.ts             # Activity logging
│
├── components/                  # Shared UI components
│   ├── admin/DataGrid.tsx       # Admin dashboard tables
│   ├── common/Footer.tsx        # Public website footer
│   └── ...
│
├── lib/                         # Shared utilities
│   ├── database.ts              # PostgreSQL/MongoDB connection
│   ├── encryption.ts            # AES-256 for citizen data
│   └── constants/               # Ethiopia-specific configs
│       ├── regions.ts           # Ethiopian states/cities
│       └── amharic.ts           # Amharic translations
│
├── public/                      # Static assets
│   ├── assets/
│   │   ├── flags/               # Ethiopian regional flags
│   │   └── cbe-birr/            # Payment gateway logos
│   └── legal/                   # Ethiopian compliance docs
│
├── types/                       # Shared TypeScript types
│   ├── careers.d.ts             # Job postings interface
│   └── system.d.ts              # Surveillance/data models
│
├── tests/                       # Combined tests
│   ├── e2e/                     # End-to-end tests
│   └── unit/                    # Unit tests for components/modules
│
└── config/                      # Unified configurations
    ├── next.config.js           # Next.js settings
    ├── nest-config.ts           # Backend module config
    └── i18n.ts                  # Amharic/English localization