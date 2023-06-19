import { Metadata } from 'next';

export const dynamic = 'force-static'; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: 'Users',
  description: 'About NextSpace',
};

export default function Users() {
  return (
    <div>
      <h1>Users</h1>
      <p>Coming soon</p>
    </div>
  );
}