"use client";
import Link from "next/link";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "../../../../lib/auth-client";
import { Eye, EyeClosed, OctagonAlertIcon } from "lucide-react";
import { useState } from "react";
import z from "zod";
import { useRouter } from "next/navigation";
// removed social icons — sign-up uses credentials only

const formSchema = z
  .object({
    fullName: z.string().min(3, {
      message: "Please enter your full name",
    }),
    email: z.string().email(),
    password: z.string().min(1, {
      message: "Password is required",
    }),
    confirmPassword: z.string().min(1, {
      message: "Please confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignInView() {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (session) {
    return (
      <div className="max-w-md mx-auto p-6 space-y-4">
        <p className="text-center">
          Logged in as <span className="font-bold">{session.user.name}</span>
        </p>
        <div className="flex justify-center">
          <Button onClick={() => authClient.signOut()}>Sign out</Button>
        </div>
      </div>
    );
  }

  const SignUp = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    setPending(true);

    const result = formSchema.safeParse({
      fullName,
      email,
      password,
      confirmPassword,
    });

    if (!result.success) {
      setError(result.error.errors[0].message);
      setPending(false);
      return;
    }

    await authClient.signUp.email(
      {
        name: data.fullName,
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          router.push("/");
          setPending(false);
        },
        //@ts-ignore
        onError: ({ error }) => {
          setPending(false);
          setError(error.message);
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">

      <div className="max-w-md w-full p-6 space-y-6 border rounded-lg shadow-sm mx-2">
        <h3 className="text-center text-2xl font-semibold">Create your account</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            SignUp({ fullName, email, password, confirmPassword });
          }}
          className="space-y-4"
        >
          <Input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full"
          />

          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pr-10"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center p-1 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeClosed size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pr-10"
            />
            <button
              type="button"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center p-1 text-muted-foreground hover:text-foreground"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeClosed size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <Alert className="bg-destructive/10 border border-destructive/20">
              <div className="flex items-start gap-2">
                <OctagonAlertIcon className="h-4 w-4 text-destructive" />
                <AlertTitle className="font-normal">{error}</AlertTitle>
              </div>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Creating account..." : "Sign up"}
          </Button>
        </form>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm">Already have an account?</span>
          <Link href={"/sign-in"} className="text-primary underline">
            Sign in
          </Link>
        </div>

        {/* social logins removed — credentials only */}

        <div className="text-muted-foreground text-center text-xs">
          By continuing you agree to our{' '}
          <a href="/policies/terms-of-service/" className="underline underline-offset-4 font-medium text-primary">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/policies/privacy-policy" className="underline underline-offset-4 font-medium text-primary">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
