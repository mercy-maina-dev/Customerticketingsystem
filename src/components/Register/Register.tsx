import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { customersAPI } from "../../features/auth/customersAPI";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { FaUser, FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

type RegisterInputs = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirmPassword: string;
  role: "admin" | "customer";
};

const schema = yup.object({
  first_name: yup.string().max(50).required("First name is required"),
  last_name: yup.string().max(50).required("Last name is required"),
  email: yup.string().email("Invalid email").max(100).required("Email is required"),
  phone_number: yup.string().max(20).required("Phone number is required"),
  password: yup.string().min(6, "Min 6 characters").max(255).required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Confirm password is required"),
  role: yup.string().oneOf(["admin", "customer"], "Please select a role").required("Role is required"),
});

export const Register = () => {
  const navigate = useNavigate();
  const [createCustomer, { isLoading }] = customersAPI.useCreateCustomerMutation();
  const [selectedRole, setSelectedRole] = useState<"admin" | "customer" | "undefined">("undefined");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<RegisterInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      role: undefined, 
    },
  });

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      const payload = { ...data, phone_no: data.phone_number };
      const response = await createCustomer(payload).unwrap();
      toast.success("Customer registered successfully!");
      console.log(response);
      setTimeout(() => {
        navigate("/verify", { state: { email: data.email } });
      }, 1500);
    } catch (error: any) {
      toast.error(error.data?.error || "Registration failed");
    }
  };

  const handleRoleSelect = (role: "admin" | "customer") => {
    setSelectedRole(role);
    setValue("role", role);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-lg p-8 rounded-xl shadow-2xl bg-white">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-600">
          Account Registration
        </h1>

        <div className="flex justify-center gap-6 mb-6">
          {/* Customer Role */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-transform
              ${selectedRole === "customer" ? "bg-blue-100 border-2 border-blue-400" : "bg-gray-100"}`}
            onClick={() => handleRoleSelect("customer")}
          >
            <FaUser className="text-4xl text-blue-600 mb-2" />
            <span>Customer</span>
          </motion.div>

          {/* Admin Role */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-transform
              ${selectedRole === "admin" ? "bg-purple-100 border-2 border-purple-500" : "bg-gray-100"}`}
            onClick={() => handleRoleSelect("admin")}
          >
            <FaUserShield className="text-4xl text-purple-600 mb-2" />
            <span>Admin</span>
          </motion.div>
        </div>
        {errors.role && <span className="text-red-700 text-sm mb-4 block">{errors.role.message}</span>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <motion.input
            type="text"
            {...register("first_name")}
            placeholder="First Name"
            className="input input-bordered w-full p-3 rounded-lg focus:ring-2 focus:ring-purple-300"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.first_name && <span className="text-red-700 text-sm">{errors.first_name.message}</span>}

          <motion.input
            type="text"
            {...register("last_name")}
            placeholder="Last Name"
            className="input input-bordered w-full p-3 rounded-lg focus:ring-2 focus:ring-purple-300"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.last_name && <span className="text-red-700 text-sm">{errors.last_name.message}</span>}

          <motion.input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="input input-bordered w-full p-3 rounded-lg focus:ring-2 focus:ring-purple-300"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.email && <span className="text-red-700 text-sm">{errors.email.message}</span>}

          <motion.input
            type="text"
            {...register("phone_number")}
            placeholder="Phone Number"
            className="input input-bordered w-full p-3 rounded-lg focus:ring-2 focus:ring-purple-300"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.phone_number && <span className="text-red-700 text-sm">{errors.phone_number.message}</span>}

          {/* Password Field */}
          <motion.div className="relative" whileHover={{ scale: 1.01 }}>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className="input input-bordered w-full p-3 rounded-lg focus:ring-2 focus:ring-purple-300 pr-12"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-purple-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </motion.div>
          {errors.password && <span className="text-red-700 text-sm">{errors.password.message}</span>}

          {/* Confirm Password Field */}
          <motion.div className="relative" whileHover={{ scale: 1.01 }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              className="input input-bordered w-full p-3 rounded-lg focus:ring-2 focus:ring-purple-300 pr-12"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-purple-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </motion.div>
          {errors.confirmPassword && <span className="text-red-700 text-sm">{errors.confirmPassword.message}</span>}

          <motion.button
            type="submit"
            className="btn btn-gradient w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold hover:scale-105 transition-transform"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner text-white" /> Please Wait...
              </>
            ) : (
              "Register"
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};
