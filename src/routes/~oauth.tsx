import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '@/integrations/supabase/client';
import { useEffect } from 'react';

export const Route = createFileRoute('/~oauth/initiate')({
  component: () => {
    useEffect(() => {
      // This catches the old Lovable URL and instantly redirects to real Supabase Auth
      supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin },
      });
    }, []);

    return (
      <div className="flex h-screen items-center justify-center bg-bg text-text">
        <p>Redirecting to Google securely...</p>
      </div>
    );
  },
});
