```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default function About({ session }) {
  if (!session) {
    return (
      <div>
        <p>Please log in to view this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page. You are logged in as {session.user.email}</p>
    </div>
  );
}
export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions);
    return {
        props: {
            session
        }
    }
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```