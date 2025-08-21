import Image from "next/image";
import ImageSwitcher from "../components/ImageSwitcher";
import CalScheduleButton from "../components/CalScheduleButton";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center gap-16 p-8 sm:p-16">
      <div className="max-w-4xl text-center">
        <ImageSwitcher
          images={[
            { src: "/set-free-jesseg-logo.png", alt: "Set Free by Jesse G logo" },
            { src: "/set-free-jesseg-blackyellow-logo.png", alt: "Set Free by Jesse G black/yellow logo" },
          ]}
          durationMs={9000}
          className="mx-auto h-[360px] sm:h-[460px] md:h-[560px] w-full max-w-6xl"
          priority
        />
        <div className="pink-card mx-auto mt-8 max-w-4xl p-6 sm:p-8 text-left">
          <h2 className="font-brand text-2xl sm:text-3xl font-extrabold neon-gangster text-center">The Message</h2>
          <div className="pink-divider mt-3 w-full"></div>
          <p className="text-base sm:text-lg leading-relaxed neon-gangster">
            Set Free by Jesse G was born from the intersection of faith and the streets. Every line, every letter, every piece is crafted with precision—clean, lined up, and bold, carrying the weight of scripture while breathing the raw air of the hood. This isn’t just graffiti, it’s gospel art. It’s the message of freedom written in colors the world can’t ignore, transforming walls, canvases, and screens into living sermons.
          </p>
          <p className="mt-6 text-base sm:text-lg leading-relaxed neon-gangster">
            With the creation of the Set Free Font by Jesse G, the mission stretches beyond paint and concrete. It’s about taking over the digital just as much as the streets—building a style that’s sharp, holy, and unapologetically hood. This is art that redeems what others overlook, declaring that beauty belongs not just in galleries, but in alleys, feeds, and everywhere souls are searching. Set Free is more than a brand—it’s a movement, reclaiming the streets for something greater.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <CalScheduleButton className="neon-button">Book a Call</CalScheduleButton>
          <a href="#about" className="px-5 py-3 rounded-full text-black bg-[linear-gradient(135deg,var(--pink),var(--yellow))] hover:opacity-90 transition-opacity text-sm sm:text-base font-semibold shadow-sm">
            Learn More
          </a>
        </div>
      </div>
      {/* About Section */}
      <section id="about" className="w-full mt-24 scroll-offset">
        <div className="mx-auto max-w-6xl pink-card p-6 sm:p-10 grid gap-8 md:grid-cols-2 items-center">
          <div className="md:col-span-2 text-center">
            <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-extrabold neon-gangster">About Set Free by Jesse G</h2>
            <div className="pink-divider mt-4 w-full"></div>
          </div>
          <div className="relative w-full h-[420px] sm:h-[560px] md:h-[720px] overflow-hidden bg-black shadow-xl -m-6 sm:-m-10 rounded-[16px]">
            <Image
              src="/set-free-jesseg-cathedral.png"
              alt="Set Free Cathedral"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
          <div className="text-center md:text-left -m-6 sm:-m-10 rounded-[16px] md:border-l md:border-[rgba(255,20,147,0.35)] md:pl-10">
            <p className="mt-4 text-base sm:text-lg leading-relaxed neon-gangster">
              Born from the crossroad of faith and the streets, Set Free by Jesse G flips culture on its head—redeeming what others throw away. We stack holy truth on hood grit, crafting work that hits heavy and heals harder.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed neon-gangster">
              From alley walls to timelines, from concrete to code—this movement carries the message in letters lined up and clean, built bold, and set to shine. We don’t just make art. We set it free.
            </p>
            <blockquote className="pull-quote mt-6 neon-gangster">
              “We don’t chase trends—we rewrite them with scripture and spray.”
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="neon-button">Join the Movement</a>
              <CalScheduleButton className="neon-button">Schedule with Jesse</CalScheduleButton>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="w-full mt-24 scroll-offset">
        <div className="mx-auto max-w-3xl pink-card p-6 sm:p-10">
          <h3 className="font-brand text-2xl sm:text-3xl font-extrabold neon-gangster">Contact</h3>
          <p className="mt-3 neon-gangster">Want to collaborate or commission a piece? Reach out.</p>
          <form className="mt-6 grid gap-4">
            <input className="neon-input" type="text" name="name" placeholder="Your name" />
            <input className="neon-input" type="email" name="email" placeholder="Your email" />
            <textarea className="neon-input" name="message" placeholder="Your message" rows={5} />
            <button type="submit" className="neon-button self-start">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
}
