import FinanceFactory from "@/factory/finance-factory";
import { ui } from "@/imports/ui";

export default function AddCategory() {
  const financeFactory = FinanceFactory()
  return (
    <>
      <ui.Form {...financeFactory.categoryform}>
        <form
          onSubmit={financeFactory.categoryform.handleSubmit(financeFactory.onCategorySubmit)}
          className="space-y-4"
          noValidate>
          <ui.FormField
            control={financeFactory.categoryform.control}
            name="name"
            render={({ field }) => (
              <ui.FormItem>
                <ui.FormLabel>Name</ui.FormLabel>
                <ui.FormControl>
                  <ui.Input placeholder="Add Category" {...field} />
                </ui.FormControl>
                <ui.FormMessage />
              </ui.FormItem>
            )}
          />
          <ui.Button type="submit" className="w-full" disabled={financeFactory.loading}>
            {financeFactory.loading ? "Adding..." : "Add Category"}
          </ui.Button>
        </form>
      </ui.Form>
    </>
  );
}
