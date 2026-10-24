import { createFileRoute } from '@tanstack/react-router';
import Tutor from '@/components/study/Tutor';
export const Route = createFileRoute('/tutor')({
  head: () => ({ meta: [
    { title: 'StudySmart — AI Tutor' },
    { name: 'description', content: 'Study with your Socratic tutor and saved conversations.' },
    { property: 'og:title', content: 'StudySmart — AI Tutor' },
    { property: 'og:description', content: 'Study with your Socratic tutor and saved conversations.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Page,
});
function Page() {
  return <Tutor />;
}
