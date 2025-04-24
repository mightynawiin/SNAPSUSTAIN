
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthForms } from "@/components/auth/AuthForms";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-green-800 mb-2 text-center">Welcome to CleanUp Heroes</h1>
            <p className="text-green-700 mb-8 text-center">
              Join our community of heroes making a difference.
            </p>
            
            <AuthForms />
            
            <div className="mt-8 text-center text-sm text-green-600">
              By signing up, you agree to our{" "}
              <a href="#" className="underline hover:text-green-500">Terms of Service</a> and{" "}
              <a href="#" className="underline hover:text-green-500">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
