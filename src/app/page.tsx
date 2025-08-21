import Image from "next/image";
import ImageSwitcher from "../components/ImageSwitcher";
import CalScheduleButton from "../components/CalScheduleButton";
import GangsterPinkButton from "../components/GangsterPinkButton";

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
          <CalScheduleButton className="gangster-pink-btn">Book a Call</CalScheduleButton>
          <GangsterPinkButton href="#about">Learn More</GangsterPinkButton>
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
              <GangsterPinkButton href="#contact">Join the Movement</GangsterPinkButton>
              <CalScheduleButton className="gangster-pink-btn">Schedule with Jesse</CalScheduleButton>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="w-full mt-24 scroll-offset">
        <div className="mx-auto max-w-4xl badass-cta p-8 sm:p-12 text-center">
          <h3 className="font-brand text-3xl sm:text-4xl font-extrabold neon-gangster">Let’s Build Something Holy</h3>
          <p className="mt-4 neon-gangster">Commission a piece. Collaborate on a wall. Bring the font to your brand. Schedule time with Jesse.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <CalScheduleButton className="gangster-pink-btn gangster-pink-btn-lg">Schedule Now</CalScheduleButton>
            <a href="tel:+17143969955" className="gangster-pink-btn gangster-pink-btn-lg">Call (714) 396-9955</a>
          </div>
        </div>
      </section>
    </main>
  );
}
