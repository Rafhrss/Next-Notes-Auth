import { CreateNotebookButton } from "@/components/create-notebook-button";
import NotebookCard from "@/components/notebook-card";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";
import { Suspense } from "react";

export default async function Page() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Notebooks</h1>

      {/* Bungkus tombol yang kemungkinan besar menggunakan nuqs untuk modal/state */}
      <Suspense fallback={<div className="h-10 w-32 animate-pulse bg-muted rounded-md" />}>
        <CreateNotebookButton />
      </Suspense>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notebooks.success &&
          notebooks?.notebooks?.map((notebook) => (
            <Suspense key={notebook.id} fallback={<div className="h-48 w-full animate-pulse bg-muted rounded-xl" />}>
              <NotebookCard key={notebook.id} notebook={notebook} />
            </Suspense>
          ))}
      </div>

      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <div>No notebooks found</div>
      )}
    </PageWrapper>
  );
}