import { RESOURCE } from "@/lib/endpoints";
import { useQuery } from "@tanstack/react-query";
import { ui } from "@/imports/ui";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
};

export default function FetchContainer({ mode }: { mode: string }) {
  const { data: categoryData, isLoading: categoryLoading} = useQuery({
    queryKey: ["category"],
    queryFn: () => fetchData(RESOURCE),
    enabled: mode === "category",
  });

  return (
    <>
      {mode === "category" && (<ui.CategoryCard data={categoryData} loading={categoryLoading} />)}
    </>
  );
}