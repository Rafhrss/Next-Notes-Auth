import { CreateNotebookButton } from "@/components/create-notebook-button";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";

export default async function page() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>NoteBooks</h1>

      <CreateNotebookButton/>

      {notebooks.success &&
        notebooks?.notebooks?.map((notebook) => (
          <div key={notebook.id}>{notebook.name}</div>
        ))}

      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <div>No Notebooks Found</div>
      )}

    </PageWrapper>
  );
}
