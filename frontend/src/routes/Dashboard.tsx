import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useUserByAddress } from "../hooks/useUserByAddress.ts";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { gql, useMutation } from "@apollo/client";

const UPDATE_USER = gql`
  mutation Update_user(
    $address: String!
    $display_name: String
    $bio: String
    $profession: String
  ) {
    update_user(
      address: $address
      display_name: $display_name
      bio: $bio
      profession: $profession
    ) {
      bio
      name
      display_name
      profession
      registration_tx
      block_number
      timestamp
      token_id
      user_address
    }
  }
`;

interface Profile {
  display_name: string;
  bio: string;
  profession: string;
  pfp: string | null;
  cover: string | null;
}
function Dashboard() {
  const [profile, setProfile] = useState<Profile>({
    display_name: "",
    bio: "",
    profession: "",
    pfp: null,
    cover: null,
  });
  const navigate = useNavigate();
  const [updateUser] = useMutation(UPDATE_USER);

  const { client: smartWalletClient } = useSmartWallets();
  const { user: existingUserProfile } = useUserByAddress(
    smartWalletClient?.account.address as `0x${string}`
  );

  useEffect(() => {
    if (existingUserProfile) {
      setProfile({
        display_name: existingUserProfile.display_name || "",
        bio: existingUserProfile.bio || "",
        profession: existingUserProfile.profession || "",
        pfp: null,
        cover: null,
      });
    }
  }, [existingUserProfile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateUser({
        variables: {
          address: smartWalletClient?.account.address,
          display_name: profile.display_name,
          bio: profile.bio,
          profession: profile.profession,
        },
      });
      navigate(`/profile/${existingUserProfile?.name}`);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Setup Profile</h1>
          <p className="text-gray-400">Customize your Offline ID profile</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-400">
              Display Name
            </label>
            <Input
              value={profile.display_name}
              onChange={(e) =>
                setProfile((prev) => ({
                  ...prev,
                  display_name: e.target.value,
                }))
              }
              className="bg-white/10 border-white/20 text-white"
            />
            {/* 
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">
                  Profile Picture
                </label>
                <div className="aspect-square rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center">
                  <button type="button" className="text-[#4989a7]">
                    Upload Image
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-400">
                  Cover Image
                </label>
                <div className="aspect-square rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center">
                  <button type="button" className="text-[#4989a7]">
                    Upload Image
                  </button>
                </div>
              </div>
            </div> */}

            <label className="block text-sm font-medium text-gray-400">
              Profession
            </label>
            <Input
              value={profile.profession}
              onChange={(e) =>
                setProfile((prev) => ({
                  ...prev,
                  profession: e.target.value,
                }))
              }
              className="bg-white/10 border-white/20 text-white"
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">
                Bio
              </label>
              <textarea
                value={profile.bio}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, bio: e.target.value }))
                }
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#4989a7]"
                rows={4}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Save Profile
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
