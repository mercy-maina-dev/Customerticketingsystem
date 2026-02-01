import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { customersAPI } from "../../features/auth/customersAPI";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";

type VerifyInputs = {
  email: string;
  code: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .max(100, "Max 100 characters")
    .required("Email is required"),
  code: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Code is required"),
});

export const Verification = () => {
  const [verifyCustomer, { isLoading }] = customersAPI.useVerifyCustomerMutation();
  const location = useLocation();
  const navigate = useNavigate();   // ✅ added

  const emailState = location.state?.email || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: emailState,
    },
  });

  const onSubmit: SubmitHandler<VerifyInputs> = async (data) => {
    try {
      const response = await verifyCustomer(data).unwrap();
      console.log("Response", response);
      toast.success(response.message);

      // ✅ redirect to login after successful verification
      navigate("/login");

    } catch (error: any) {
      console.log("Error", error);
      toast.error(error.data.message);
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 text-center">Verify your account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
        <input
          type="email"
          {...register("email")}
          placeholder="Email Address"
          className="border p-3 rounded-md"
        />
        {errors.email && (
          <span className="text-red-700 text-sm">{errors.email.message}</span>
        )}

        <input
          type="text"
          {...register("code")}
          placeholder="Verification code"
          className="border p-3 rounded-md"
        />
        {errors.code && (
          <span className="text-red-700 text-sm">{errors.code.message}</span>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading loading-spinner text-secondary" />
              Verifying....
            </>
          ) : (
            "Verify your account"
          )}
        </button>
      </form>
    </div>
  );
};
