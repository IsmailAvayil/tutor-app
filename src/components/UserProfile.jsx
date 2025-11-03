import { useState } from "react";

const userProfileData = {
  user_id: 1,
  full_name: "veena",
  profile_image: "",
};

const UserProfile = () => {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);
  const firstLetter = userProfileData.full_name
    ? userProfileData.full_name.charAt(0).toUpperCase()
    : "";

  const handleProfileModal = () => {
    setIsOpenProfileModal(!isOpenProfileModal);
  };

  return (
    <div
      className="flex gap-x-4 ml-4 l:ml-0 mb-12 lg:mb-0 cursor-pointer"
      onClick={handleProfileModal}
    >
      <div className="bg-[#5F9EA0] w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-lg ">
        {userProfileData.profile_image ? (
          <img
            className="w-full h-full object-cover"
            src={userProfileData.profile_image}
            alt={userProfileData.full_name}
          />
        ) : (
          <span>{firstLetter}</span>
        )}
      </div>
      <div className="flex items-center">
        <p>Hello,</p>
        {"  "}
        <h1 className="ml-2 font-semibold">{userProfileData.full_name}</h1>
        <button className="text-[8px] text-[#5F9EA0] ml-2">
          {" "}
          <span>{isOpenProfileModal ? "▲" : "▼"}</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
