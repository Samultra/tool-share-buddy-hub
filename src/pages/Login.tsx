
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white shadow rounded-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
              <p className="text-gray-600 mt-2">Sign in to your account to continue</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-brand-green hover:text-brand-green/90">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" placeholder="Your password" required />
              </div>
              
              <div className="flex items-center">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember me for 30 days
                </Label>
              </div>
              
              <Button type="submit" className="w-full bg-brand-green hover:bg-opacity-90">
                Sign In
              </Button>
            </form>
            
            <div className="my-6 relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Facebook className="mr-2 h-5 w-5" />
                Sign in with Facebook
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Sign in with Google
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-brand-green hover:text-brand-green/90 font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
