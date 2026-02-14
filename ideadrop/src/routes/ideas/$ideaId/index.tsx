import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ideas/$ideaId/')({
	component: IdeasDetailPage,
});

function IdeasDetailPage() {
	return <div>Hello "/ideas/$ideaId/"!</div>;
}
