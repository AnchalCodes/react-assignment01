const profile = {
  name: 'Pulling requests data for the neovim repository',
  avatar: 'https://avatars.githubusercontent.com/u/6471485?s=200&v=4',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
};

export default function Header() {
  return (
    <div>
      <div>
        <img
          className="h-[100px] w-full object-cover lg:h-[200px]"
          src={profile.backgroundImage}
          alt="backgroundImage"
        />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-center sm:space-x-5">
          <div className="flex">
            <img
              className="h-20 w-20 rounded-full ring-4 ring-white sm:h-24 sm:w-24 bg-white"
              src={profile.avatar}
              alt="avatar"
            />
          </div>
          <div className="mt-2 sm:mt-16">
            <h1 className="text-[20px] sm:text-[30px] mx-4 font-bold text-gray-900">
              {profile.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
