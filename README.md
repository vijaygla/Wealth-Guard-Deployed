# make sure you have created a .env file in your project with the given variable
`DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=`

# Important step to do this all

- npm uninstall @clerk/nextjs --legacy-peer-deps
- npm install @clerk/nextjs@6.9.0 --legacy-peer-deps
- paranthesisi in folde name in app dir is ignore to take as a Routes folder other wise .next will understand this as routes folder and we will have to use that same folder as routing name also 
- 

# For authentication 
- use `clerk` for `next`

# For backend data base use  also use prima 
- `supa base.com`

### prisma 
- npm i -D prisma --legacy-peer-deps
- npx prisma init
- `mongodb+srv://vijaykumarmganj1:fw5UaWDu6iyJKaOA@cluster0.mo03j.mongodb.net/`

# for security 
- use the Arcjet -- like if any user cross the limit of excesssing any things more than the decide limit he will find that to much request try after some time

- provide more secure connection and internal security from any third party, common attack

# for purpose 
- Alert 
- use for recuring transaction 
- using transaction set up 
- monthly income and bujout 


`To run the code after clone`
1. npm install next --legacy-peer-deps
2. npm install @clerk/nextjs --legacy-peer-deps
3. npm run dev


<!-- --------------------------------- -->
# Important Steps
## Uninstall and Install Clerk
Ensure you remove and install the correct version of the Clerk package.

## Folder Naming in App Directory
Avoid using parentheses in folder names within the app directory to prevent route misinterpretation.

# For Authentication
Use Clerk for authentication with Next.js.

# Backend Database
Utilize Supabase for database management.

# Using Prisma
- Set up and initialize Prisma for database ORM.
- Utilize the provided MongoDB connection string for database connectivity.

# For Security
Implement Arcjet to limit excessive access requests and ensure secure connections.

# Purpose and Usage
- **Alerts:** Set up alerts for various events.
- **Recurring Transactions:** Manage and track recurring transactions.
- **Monthly Income and Budget:** Set up and manage your monthly income and budget.

# Running the Code After Cloning
1. Install Next.js
2. Install Clerk
3. Start the Development Server

# Key Points
- **Clerk:** For handling authentication.
- **Supabase:** As a backend database solution.
- **Prisma:** For database ORM.
- **Arcjet:** For enhancing security.
- **Alerts & Transactions:** Use for setting alerts and managing transactions.
- **Income & Budget:** Manage your monthly income and budget efficiently.
