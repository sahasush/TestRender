import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Heart, Activity, Bell, Shield, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    age: user?.profile?.age || '',
    healthGoals: (user?.profile?.healthGoals || []).join(', '),
    symptoms: (user?.profile?.symptoms || []).join(', '),
    notifications: user?.profile?.preferences?.notifications ?? true,
  });

  const handleSave = async () => {
    const profileUpdate = {
      age: formData.age ? parseInt(formData.age.toString()) : undefined,
      healthGoals: formData.healthGoals.split(',').map(goal => goal.trim()).filter(Boolean),
      symptoms: formData.symptoms.split(',').map(symptom => symptom.trim()).filter(Boolean),
      preferences: {
        notifications: formData.notifications,
        theme: user?.profile?.preferences?.theme || 'light' as const,
        language: user?.profile?.preferences?.language || 'en',
      },
    };

    const success = await updateProfile(profileUpdate);
    
    if (success) {
      toast({
        title: "Profile Updated",
        description: "Your profile has been saved successfully.",
      });
      setIsEditing(false);
    } else {
      toast({
        title: "Update Failed",
        description: "There was an error updating your profile.",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      age: user?.profile?.age?.toString() || '',
      healthGoals: (user?.profile?.healthGoals || []).join(', '),
      symptoms: (user?.profile?.symptoms || []).join(', '),
      notifications: user?.profile?.preferences?.notifications ?? true,
    });
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to view your profile</h1>
          <Button onClick={() => window.location.href = '/login'}>
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}</h1>
          <p className="text-gray-600">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                  <div className="flex gap-2">
                    {isEditing ? (
                      <>
                        <Button size="sm" variant="outline" onClick={handleCancel}>
                          <X className="h-4 w-4 mr-1" />
                          Cancel
                        </Button>
                        <Button size="sm" onClick={handleSave}>
                          <Save className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                      </>
                    ) : (
                      <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    {isEditing ? (
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded-md">{user.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <p className="p-3 bg-gray-50 rounded-md text-gray-600">{user.email}</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Age</Label>
                    {isEditing ? (
                      <Input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="Your age"
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded-md">
                        {user.profile?.age || 'Not specified'}
                      </p>
                    )}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Health Goals</Label>
                    {isEditing ? (
                      <Textarea
                        value={formData.healthGoals}
                        onChange={(e) => setFormData({ ...formData, healthGoals: e.target.value })}
                        placeholder="e.g., Better sleep, Manage hot flashes, Reduce stress"
                        rows={3}
                      />
                    ) : (
                      <div className="p-3 bg-gray-50 rounded-md min-h-[80px]">
                        {user.profile?.healthGoals?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {user.profile.healthGoals.map((goal, index) => (
                              <Badge key={index} variant="secondary">
                                {goal}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500">No health goals set</p>
                        )}
                      </div>
                    )}
                    {isEditing && (
                      <p className="text-sm text-gray-500">Separate multiple goals with commas</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Current Symptoms</Label>
                    {isEditing ? (
                      <Textarea
                        value={formData.symptoms}
                        onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                        placeholder="e.g., Hot flashes, Sleep issues, Mood changes"
                        rows={3}
                      />
                    ) : (
                      <div className="p-3 bg-gray-50 rounded-md min-h-[80px]">
                        {user.profile?.symptoms?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {user.profile.symptoms.map((symptom, index) => (
                              <Badge key={index} variant="outline">
                                {symptom}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500">No symptoms tracked</p>
                        )}
                      </div>
                    )}
                    {isEditing && (
                      <p className="text-sm text-gray-500">Separate multiple symptoms with commas</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Health Goals</span>
                  <Badge variant="secondary">
                    {user.profile?.healthGoals?.length || 0}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Symptoms Tracked</span>
                  <Badge variant="outline">
                    {user.profile?.symptoms?.length || 0}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Profile Completion</span>
                  <Badge>
                    {Math.round(((user.name ? 1 : 0) + (user.profile?.age ? 1 : 0) + (user.profile?.healthGoals?.length ? 1 : 0)) / 3 * 100)}%
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <Label htmlFor="notifications" className="text-sm">
                      Notifications
                    </Label>
                  </div>
                  <Switch
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, notifications: checked })
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm text-gray-600">Privacy</span>
                  </div>
                  <Badge variant="secondary">Secure</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <a href="/chat">Start Conversation</a>
                </Button>
                <Button variant="outline" className="w-full" onClick={logout}>
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}