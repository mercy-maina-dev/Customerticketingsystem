import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginAPI } from "../../features/auth/loginAPI";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/customerSlice";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

type LoginInputs = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .max(100, "Max 100 characters")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .max(15, "Max 15 characters")
    .required("Password is required"),
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginCustomer, { isLoading }] = loginAPI.useLoginCustomerMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const response = await loginCustomer(data).unwrap();
      toast.success(response.message);
      dispatch(loginSuccess({
        token:response.token,
        customer:response.customer,
      }));
      if (response.customer.role === "admin") {
        navigate("/admin/dashboard/tickets");
      } else if (response.customer.role === "customer") {
        navigate("/customer/dashboard/my-tickets");
      }
      else if(response.customer.role==="agent"){
        navigate("/agent/dashboard/stats");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-500 p-6">
      <div className="w-full max-w-md p-10 rounded-3xl bg-white shadow-2xl transform hover:scale-[1.03] transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-2">
          Welcome Back!
        </h1>
        <p className="text-center text-purple-400 mb-8">
          Login to your account securely
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-pink-400" />
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-700 placeholder-gray-400 bg-pink-50 border border-pink-200 focus:border-pink-400 focus:ring-1 focus:ring-pink-300 transition"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="relative">
            <FaLock className="absolute top-1/2 left-4 -translate-y-1/2 text-pink-400" />
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-700 placeholder-gray-400 bg-pink-50 border border-pink-200 focus:border-pink-400 focus:ring-1 focus:ring-pink-300 transition"
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-pink-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:bg-pink-600 transition-all flex items-center justify-center gap-2 text-lg"
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner text-white" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-purple-400">
          Don't have an account?{" "}
          <span
            className="font-semibold underline cursor-pointer hover:text-pink-600"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
}
