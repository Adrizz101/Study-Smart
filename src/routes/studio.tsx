import { createFileRoute } from '@tanstack/react-router';
import Studio from '@/components/study/Studio';
export const Route = createFileRoute('/studio')({
  head: () => ({ meta: [
    { title: 'StudySmart — Document & Slide Studio' },
    { name: 'description', content: 'Create, edit, present and export study slides and guides.' },
    { property: 'og:title', content: 'StudySmart — Document & Slide Studio' },
    { property: 'og:description', content: 'Create, edit, present and export study slides and guides.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Page,
});
function Page() {
  return <Studio />;
}
