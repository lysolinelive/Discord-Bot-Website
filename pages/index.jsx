export default function Index() {
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
          <Image src="/img/bck.png" width={500} height={300} alt="Background Image" />
        </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Lysoline Bot
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
          How about moderating your own server with Lysoline bot? Create your own free world and create your own playlist, experience this pleasure with the best sounds.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html: "Lysoline Bot" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about creating the best environment to relax yourself with your own emotions?" }} />
            <Link href="https://discord.gg/UUwP84WD">
              <a className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
                <i className="fab fa-discord mr-2" />Invite Lysoline
              </a>
            </Link>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: "fa-cogs",
                title: "Optimization",
                description: "With fast and customizable settings specific to your server, Lysoline gives you a musical pleasure to the fullest."
              },
              {
                icon: "fa-universal-access",
                title: "Universal",
                description: "A bot that supports multi-platform music playback. (Spotify, SoundCloud, YouTube) | (It is a bot that complies with all copyrights and licenses.)"
              },
              {
                icon: "fa-shield",
                title: "Security",
                description: "An open source safe bot that you can browse and help us develop."
              },
              {
                icon: "fa-ticket",
                title: "Support",
                description: "With our best teammates, we provide the fastest response to anyone who needs help."
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5">
                    <i className={`fa ${item.icon} text-2xl text-amber-500`} /> {item.title}
                  </p>
                  <p className="text-gray-500 line-clamp-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
          <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
            <Image src="https://cdn.discordapp.com/attachments/1014356370776137812/1136937607780106290/L.png" width={256} height={256} alt="Lysoline Logo" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
            <p className="text-3xl text-white font-semibold">Best Your Bot</p>
            <p className="text-md text-white font-medium text-gray-500 line-clamp-5">
              Are you ready to throw the best parties with Lysoline, the best and most up-to-date bot?
            </p>
          </div>
          <Image src="https://cdn.discordapp.com/attachments/737348411568685066/983094813115170866/unknown.png" width={480} height={300} alt="Lysoline Screenshot" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
        </div>
      </>
    </>
  );
}
