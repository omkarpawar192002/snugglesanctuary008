import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

interface Favorite {
  id: string;
  pet_id: string;
  pet_name: string;
  pet_image: string | null;
  pet_type: string | null;
  created_at: string;
}

export const useFavorites = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('favorites')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching favorites:', error);
    } else {
      setFavorites(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  const addFavorite = async (pet: { id: string; name: string; image?: string; type?: string }) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save favorites",
        variant: "destructive",
      });
      return false;
    }

    const { error } = await supabase.from('favorites').insert({
      user_id: user.id,
      pet_id: pet.id,
      pet_name: pet.name,
      pet_image: pet.image || null,
      pet_type: pet.type || null,
    });

    if (error) {
      if (error.code === '23505') {
        toast({
          title: "Already saved",
          description: "This pet is already in your favorites",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to add favorite",
          variant: "destructive",
        });
      }
      return false;
    }

    toast({
      title: "Added to favorites!",
      description: `${pet.name} has been saved to your favorites`,
    });
    await fetchFavorites();
    return true;
  };

  const removeFavorite = async (petId: string) => {
    if (!user) return false;

    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', user.id)
      .eq('pet_id', petId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to remove favorite",
        variant: "destructive",
      });
      return false;
    }

    toast({
      title: "Removed from favorites",
      description: "Pet has been removed from your favorites",
    });
    await fetchFavorites();
    return true;
  };

  const isFavorite = (petId: string) => {
    return favorites.some((fav) => fav.pet_id === petId);
  };

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    isFavorite,
    refetch: fetchFavorites,
  };
};
