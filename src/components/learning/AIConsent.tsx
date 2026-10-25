import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';

export function AIConsent({ consent, onConsent }: { consent: boolean; onConsent: (value: boolean) => void }) {
  const [error, setError] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  // Session is rechecked when invoking AI, not trusted as authorization.
  async function signIn(provider: 'google' | 'lovable') {
    setError('');
    const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: window.location.origin });
    if (result.error) setError(result.error.message);
    else if (!result.redirected) setSignedIn(true);
  }
  return <div className="ai-consent">
    <label className="flex items-start gap-2 text-xs text-text-muted"><input type="checkbox" checked={consent} onChange={e => onConsent(e.target.checked)} />
      <span>I am at least 18, or have the required parent/guardian or school authorization. I agree to the <Link to="/terms" className="text-accent-400 underline">Terms</Link> and <Link to="/privacy" className="text-accent-400 underline">Privacy notice</Link>, and consent to sending selected content to AI. No sensitive student information.</span>
    </label>
    {!signedIn && <div className="mt-2 flex flex-wrap gap-2"><Button variant="outline" size="sm" onClick={() => signIn('google')}>Continue with Google</Button><Button variant="outline" size="sm" onClick={() => signIn('lovable')}>Continue with Lovable</Button></div>}
    {error && <p role="alert" className="text-study-rose-500 text-xs">{error}</p>}
  </div>;
}
export async function requireAISession() {
  const { data } = await supabase.auth.getSession();
  if (!data.session) throw new Error('Sign in with Google or Lovable before using AI.');
  return data.session;
}