import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Button } from "src/components/ui/button";
import { useRegister } from "src/hooks/useRegister";

const Register = () => {
  const { register, handleSubmit, errors, onSubmit } = useRegister();

  return (
    <section className="mx-auto max-w-md px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-semibold">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            {...register("username")}
            aria-invalid={!!errors.username}
          />
          {errors.username && (
            <p className="text-xs text-destructive">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p className="text-xs text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            aria-invalid={!!errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-destructive">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full cursor-pointer">
          Register
        </Button>
      </form>
    </section>
  );
};

export default Register;
