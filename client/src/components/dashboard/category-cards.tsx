import { ui } from "@/imports/ui";

export default function CategoryCard({
  data,
  loading,
}: {
  data: any[];
  loading: boolean;
}) {

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center p-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <p>Loading Category...</p>
          </div>
        </div>
      ) : (
        <>
          
          {/* Category Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {data.map((category) => {
              return (
                <ui.Card key={category._id}>
                  <ui.CardHeader className="pb-2">
                    {category.name}       
                  </ui.CardHeader>

                </ui.Card>
              );
            })}
          </section>

          {/* Empty State */}
          {data.length === 0 && (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <h3 className="text-lg font-semibold">No Category Found</h3>
            </div>
          )}
        </>
      )}
    </>
  );
}