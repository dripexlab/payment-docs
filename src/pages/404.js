import React from 'react';
import Layout from '@theme/Layout';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main className="container margin-vert--xl">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you were looking for does not exist.</p>
      </main>
    </Layout>
  );
}
