import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { getApiBaseUrl } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DeleteAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

 
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      const authenticated = !!token;
      setIsAuthenticated(authenticated);
      
      if (!authenticated) {
        setShowLoginModal(true);
      }
    };

    checkAuth();
    
    window.addEventListener('storage', checkAuth);
    
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLoginClick = () => {
    setShowLoginModal(false);
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    setShowLoginModal(true); 
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };

  const handleDeleteAccount = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Error",
        description: "Please login first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const userId = localStorage.getItem('userId');
      const authToken = localStorage.getItem('authToken');
      const userEmail = localStorage.getItem('userEmail');
      
      if (!userEmail) {
        toast({
          title: "Error",
          description: "No user email found. Please login again.",
          variant: "destructive",
        });
        return;
      }
      
      const requestBody = { 
        email: userEmail, 
        dbtype: "delAllUserData", 
        confirmation: "DELETE_MY_ACCOUNT"
      };
      
      console.log('Delete request body:', requestBody);
      
      const response = await fetch(`${getApiBaseUrl()}/api_update/index.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'AuthToken': authToken,
        },
        body: JSON.stringify(requestBody),
      });

      let responseData;
      try {
        responseData = await response.json();
        console.log('Delete API Response:', responseData);
        console.log('Response status code:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      } catch (parseError) {
        responseData = { message: `Server error: ${response.status} ${response.statusText}` };
      }

      if (response.ok && responseData.success === true) {
        toast({
          title: "Success",
          description: responseData.message || "Customer account has been removed successfully",
        });
        
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        setIsAuthenticated(false);
        
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        let errorMessage = "Failed to remove account";
        if (responseData.message) {
          errorMessage = responseData.message;
        } else if (responseData.status === 401) {
          errorMessage = "Unauthorized - Please login again";
        } else if (responseData.status === 400) {
          errorMessage = "Bad request - Invalid email or parameters";
        }
        
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-md mx-auto pt-4">
            {/* Delete Account Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Remove Account
                  </CardTitle>
                  {isAuthenticated && (
                    <Button
                      onClick={handleLogout}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-800 hover:bg-red-50 p-2"
                    >
                      <LogOut className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                {isAuthenticated && (
                  <p className="text-sm text-green-600">
                    Authenticated
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Account to Delete
                  </Label>
                  <div className="p-3 bg-gray-50 rounded-md border">
                    <p className="text-sm text-gray-600">
                      {localStorage.getItem('userEmail') || 'Loading...'}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleDeleteAccount}
                  disabled={isLoading || !isAuthenticated}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3"
                >
                  {isLoading ? "Removing..." : "Delete My Account"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="max-w-md mx-auto rounded-xl border-0 shadow-2xl">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-xl font-semibold text-center">
              Login Required
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              You must be logged in to delete your account. Please login to continue.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 pt-4">
            <Button onClick={handleLoginClick} className="w-full bg-primary hover:bg-primary/90">
              Login Now
            </Button>
            <Button 
              onClick={() => setShowLoginModal(false)} 
              variant="outline" 
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteAccount; 