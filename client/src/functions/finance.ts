import { RESOURCE } from "@/lib/endpoints";
import type { CategorySchema } from "@/lib/zod-schema";
import toast from "react-hot-toast";

export const addCategory = async (values: CategorySchema, userId: string) => {
    // console.log("Values from payload:", values.name, "ID is:", userId);
    try {
        const res = await fetch(RESOURCE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            name: values.name,
          }),
        });
    
        if (res.ok) {
          toast.success("Category Added"); 
          return true;
        }
    
        toast.error(await res.text());
        return false;
    
      } catch (error) {
        toast.error("Something went wrong");
        return false;
      }
}