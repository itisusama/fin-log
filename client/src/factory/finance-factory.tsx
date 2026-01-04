import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { categorySchema, type CategorySchema } from "@/lib/zod-schema";
import { hooks } from "@/imports/hooks-and-store";
import { addCategory } from "@/functions/finance";

export default function FinanceFactory() {
//   const [loading, setLoading] = useState<boolean>(false);
  const userMenu = hooks.useUserMenu();
  const queryClient = useQueryClient();

  const categoryform = useForm<CategorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

//   async function onCategorySubmit(values: CategorySchema) {
//     try {
//       setLoading(true);
//       const userId: string = userMenu.userStore.user?.id || "";
//       await addCategory(values, userId);
//       categoryform.reset();
//     } finally {
//       setLoading(false);
//     }
//   }

 const { mutateAsync, isPending } = useMutation({
    mutationFn: (values: CategorySchema) => {
      const userId = userMenu.userStore.user?.id || "";
      return addCategory(values, userId);
    },

    onSuccess: (success) => {
      if (success) {
        queryClient.invalidateQueries({ queryKey: ["category"] });
        categoryform.reset();
      }
    },
  });

  async function onCategorySubmit(values: CategorySchema) {
    await mutateAsync(values);
  }

  return { loading: isPending, categoryform, onCategorySubmit };
}