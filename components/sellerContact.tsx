import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { useAtom } from "jotai";
import { ModalAtom } from "@/contexts/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { TextInput } from "./form/textInput";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" }),
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email({ message: "Insira um email válido" }),
  phone: z
    .string({ required_error: "Campo obrigatório" })
    .length(11, { message: "DDD + telefone" }),
});

type FormType = z.infer<typeof formSchema>;

export const SellerContact: React.FC<any> = () => {
  const { toast } = useToast();
  const [, setModal] = useAtom(ModalAtom);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (fields: FormType) => {
    setLoading(true);

    //logic here
    toast({
      title: "Mensagem enviada com sucesso",
      description: "Em pouco tempo entaremos em contato",
      variant: "success",
    });

    setTimeout(() => {
      setModal(null);
    }, 500);

    return setLoading(false);
  };

  return (
    <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-[32rem] p-4 flex flex-col  bg-white border shadow-md rounded-lg relative"
      >
        <X
          className="absolute right-3 top-3 cursor-pointer"
          size={30}
          color="#343434"
          onClick={() => setModal(null)}
        />
        <div className="mb-3">
          <p className="font-medium text-lg">Quero vender</p>
          <p className="font-light text-sm text-gray-700">
            Preencha o formulário e logo iremos entrar em contato
          </p>
        </div>

        <TextInput
          register={{ ...register("name") }}
          placeholder="Nome completo"
          autoCapitalize="on"
          error={errors.name}
        />

        <TextInput
          register={{ ...register("email") }}
          placeholder="Email"
          error={errors.email}
          autoCapitalize="none"
        />

        <TextInput
          register={{ ...register("phone") }}
          placeholder="DDD + Telefone"
          error={errors.phone}
        />

        <button
          type="submit"
          disabled={loading && loading}
          className="px-10 w-fit h-10 rounded-md bg-gray-900 duration-100 hover:bg-gray-700 text-white ml-auto"
        >
          Enviar
        </button>
      </form>
    </motion.div>
  );
};
