import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { formatMemberSince } from "../utils/functions";
import LikeProfile from "./LikeProfile";

const ProfileInfo = ({ userProfile }) => {
  const memberSince = formatMemberSince(userProfile?.created_at);

  const StatItem = ({ icon, label, value }) => (
    <div className='flex items-center gap-2 p-2 bg-gray-800/30 rounded'>
      <span className='text-indigo-400'>{icon}</span>
      <div>
        <p className='text-xs text-gray-400'>{label}</p>
        <p className='text-gray-200 font-medium'>{value}</p>
      </div>
    </div>
  );

  return (
    <div className='flex flex-col gap-4 text-gray-200'>
      <div className='flex gap-4 items-center'>
        <a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
          <img 
            src={userProfile?.avatar_url} 
            className='rounded-full w-24 h-24 object-cover border-2 border-indigo-600/50' 
            alt='' 
          />
        </a>
        <div className='flex flex-col gap-2'>
          <LikeProfile userProfile={userProfile} />
          <a
            href={userProfile?.html_url}
            target='_blank'
            rel='noreferrer'
            className='text-xs bg-gray-800/50 hover:bg-gray-700/60 p-2 rounded-lg border border-gray-700/30 flex items-center gap-2 transition-colors'
          >
            <FaEye size={14} />
            View on Github
          </a>
        </div>
      </div>

      {/* User Bio */}
      {userProfile?.bio && (
        <div className='flex items-center gap-2'>
          <TfiThought />
          <p className='text-sm text-gray-300'>{userProfile?.bio.substring(0, 60)}...</p>
        </div>
      )}

      {/* Location */}
      {userProfile?.location && (
        <div className='flex items-center gap-2'>
          <IoLocationOutline />
          <p className='text-gray-300'>{userProfile?.location}</p>
        </div>
      )}

      {/* Twitter Username */}
      {userProfile?.twitter_username && (
        <a
          href={`https://twitter.com/${userProfile.twitter_username}`}
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-2 hover:text-sky-500'
        >
          <FaXTwitter />
          <span className='text-gray-300'>{userProfile?.twitter_username}</span>
        </a>
      )}

      {/* Member Since Date */}
      <div className='my-2'>
        <p className='text-gray-400 text-sm'>Member since</p>
        <p className='text-gray-200'>{memberSince}</p>
      </div>

      {/* Email Address */}
      {userProfile?.email && (
        <div className='my-2'>
          <p className='text-gray-400 text-sm'>Email address</p>
          <p className='text-gray-200'>{userProfile.email}</p>
        </div>
      )}

      {/* Full Name */}
      {userProfile?.name && (
        <div className='my-2'>
          <p className='text-gray-400 text-sm'>Full name</p>
          <p className='text-gray-200'>{userProfile?.name}</p>
        </div>
      )}

      {/* Username */}
      <div className='my-2'>
        <p className='text-gray-400 text-sm'>Username</p>
        <p className='text-gray-200'>{userProfile?.login}</p>
      </div>

      {/* Simplified stats */}
      <div className='grid grid-cols-2 gap-2'>
        <StatItem 
          icon={<RiUserFollowFill className='w-5 h-5' />} 
          label="Followers" 
          value={userProfile?.followers} 
        />
        <StatItem 
          icon={<RiUserFollowLine className='w-5 h-5' />} 
          label="Following" 
          value={userProfile?.following} 
        />
        <StatItem 
          icon={<RiGitRepositoryFill className='w-5 h-5' />} 
          label="Repos" 
          value={userProfile?.public_repos} 
        />
        <StatItem 
          icon={<RiGitRepositoryFill className='w-5 h-5' />} 
          label="Gists" 
          value={userProfile?.public_gists} 
        />
      </div>
    </div>
  );
};
export default ProfileInfo;
