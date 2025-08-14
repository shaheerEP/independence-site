import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Flag, Heart, Star, Sparkles } from "lucide-react"

export default function IndependenceDayPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with Independence Pattern */}
      <div className="fixed inset-0 bg-independence-pattern opacity-30"></div>
      <div className="fixed inset-0 hero-background"></div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float ${
              i % 3 === 0 ? 'bg-saffron' : i % 3 === 1 ? 'bg-independence-green' : 'bg-golden-yellow'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-pulse-glow">
              <Flag className="w-20 h-20 mx-auto mb-6 text-saffron icon-glow animate-wave" />
            </div>
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 text-gradient-tricolor animate-shimmer">
              Celebrating Freedom
            </h1>
            <div className="glass-card p-8 mb-8 card-hover">
              <p className="font-heading text-2xl md:text-3xl text-navy-blue mb-4 font-semibold">
                The Legacy of Indian Independence Day
              </p>
              <p className="text-xl text-chakra-blue leading-relaxed">
                A Journey Through History and Its Relevance Today
              </p>
            </div>
            
            {/* Animated Tricolor Strip */}
            <div className="w-full h-2 bg-tricolor-gradient rounded-full mb-8 shadow-lg"></div>
          </div>
        </section>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
          {/* Historical Overview */}
          <section>
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl font-bold mb-6">
                <span className="text-gradient-saffron">Historical</span>{" "}
                <span className="text-gradient-green">Overview</span>
              </h2>
              <div className="glass-card p-6 max-w-4xl mx-auto">
                <p className="text-xl text-navy-blue leading-relaxed">
                  The path to independence was paved with sacrifice, determination, and unwavering spirit
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-card card-hover tricolor-border independence-glow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-saffron mr-4 icon-glow" />
                    <Badge className="badge-independence">1857</Badge>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gradient-saffron">
                    First War of Independence
                  </h3>
                  <p className="text-navy-blue leading-relaxed">
                    The Sepoy Mutiny marked the beginning of organized resistance against British colonial rule, inspiring
                    future generations of freedom fighters.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover tricolor-border independence-glow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-independence-green mr-4 icon-glow" />
                    <Badge className="badge-independence">1920-1947</Badge>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gradient-green">
                    Gandhi's Leadership
                  </h3>
                  <p className="text-navy-blue leading-relaxed">
                    Mahatma Gandhi's philosophy of non-violent resistance transformed the independence movement, uniting
                    millions in the struggle for freedom.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover tricolor-border independence-glow md:col-span-2 lg:col-span-1">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-golden-yellow mr-4 icon-glow" />
                    <Badge className="badge-independence">August 15, 1947</Badge>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gradient-tricolor">
                    Independence Day
                  </h3>
                  <p className="text-navy-blue leading-relaxed">
                    After 200 years of colonial rule, India finally achieved independence, marking the birth of the
                    world's largest democracy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Key Freedom Fighters */}
          <section className="relative">
            <div className="absolute inset-0 bg-freedom-gradient opacity-10 rounded-3xl"></div>
            <div className="relative z-10 py-16">
              <div className="text-center mb-16">
                <h2 className="font-heading text-5xl font-bold mb-6">
                  <span className="text-gradient-green">Heroes of</span>{" "}
                  <span className="text-gradient-saffron">Freedom</span>
                </h2>
                <div className="glass-card p-6 max-w-4xl mx-auto">
                  <p className="text-xl text-navy-blue leading-relaxed">
                    Brave souls who sacrificed everything for the nation's independence
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Mahatma Gandhi",
                    role: "Father of the Nation",
                    contribution: "Led non-violent resistance movement",
                    color: "saffron",
                    icon: Star,
                  },
                  {
                    name: "Jawaharlal Nehru",
                    role: "First Prime Minister",
                    contribution: "Architect of modern India",
                    color: "independence-green",
                    icon: Users,
                  },
                  {
                    name: "Subhas Chandra Bose",
                    role: "Revolutionary Leader",
                    contribution: "Founded Indian National Army",
                    color: "victory-orange",
                    icon: Flag,
                  },
                  {
                    name: "Bhagat Singh",
                    role: "Revolutionary Martyr",
                    contribution: "Inspired youth through sacrifice",
                    color: "freedom-emerald",
                    icon: Heart,
                  },
                ].map((hero, index) => {
                  const IconComponent = hero.icon;
                  return (
                    <Card key={index} className="glass-card card-hover independence-glow">
                      <CardContent className="p-8 text-center">
                        <div className={`w-20 h-20 rounded-full bg-${hero.color}/20 glass flex items-center justify-center mx-auto mb-6 animate-pulse-glow`}>
                          <IconComponent className={`w-10 h-10 text-${hero.color} icon-glow`} />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3 text-navy-blue">{hero.name}</h3>
                        <p className={`text-${hero.color} font-bold mb-3 text-lg`}>{hero.role}</p>
                        <p className="text-chakra-blue leading-relaxed">{hero.contribution}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Cultural Significance */}
          <section>
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl font-bold mb-6 text-gradient-tricolor">
                Cultural Significance
              </h2>
              <div className="glass-card p-6 max-w-4xl mx-auto">
                <p className="text-xl text-navy-blue leading-relaxed">
                  How Independence Day continues to unite and inspire the nation
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Card className="glass-card card-hover border-l-8 border-l-independence-green">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Flag className="w-8 h-8 text-independence-green mr-4 icon-glow" />
                      <h3 className="font-heading text-2xl font-bold text-gradient-green">National Unity</h3>
                    </div>
                    <p className="text-navy-blue leading-relaxed text-lg">
                      Independence Day serves as a powerful reminder of our shared heritage, bringing together people from
                      diverse backgrounds under one tricolor flag.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card card-hover border-l-8 border-l-saffron">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Heart className="w-8 h-8 text-saffron mr-4 icon-glow" />
                      <h3 className="font-heading text-2xl font-bold text-gradient-saffron">Democratic Values</h3>
                    </div>
                    <p className="text-navy-blue leading-relaxed text-lg">
                      The celebration reinforces our commitment to democracy, equality, and justice - the foundational
                      principles our freedom fighters envisioned.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="glass-card p-10 independence-glow">
                <h3 className="font-heading text-3xl font-bold mb-8 text-center text-gradient-tricolor">
                  Celebration Traditions
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start group">
                    <Flag className="w-6 h-6 text-saffron mt-2 mr-4 flex-shrink-0 icon-glow group-hover:animate-wave" />
                    <span className="text-navy-blue text-lg leading-relaxed">Flag hoisting ceremonies across the nation</span>
                  </li>
                  <li className="flex items-start group">
                    <Sparkles className="w-6 h-6 text-independence-green mt-2 mr-4 flex-shrink-0 icon-glow group-hover:animate-pulse" />
                    <span className="text-navy-blue text-lg leading-relaxed">Cultural programs showcasing India's diversity</span>
                  </li>
                  <li className="flex items-start group">
                    <Star className="w-6 h-6 text-golden-yellow mt-2 mr-4 flex-shrink-0 icon-glow group-hover:animate-spin" />
                    <span className="text-navy-blue text-lg leading-relaxed">Prime Minister's address from Red Fort</span>
                  </li>
                  <li className="flex items-start group">
                    <Users className="w-6 h-6 text-freedom-emerald mt-2 mr-4 flex-shrink-0 icon-glow group-hover:animate-bounce" />
                    <span className="text-navy-blue text-lg leading-relaxed">Community gatherings and patriotic songs</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Current Relevance */}
          <section className="relative">
            <div className="absolute inset-0 bg-tricolor-gradient opacity-5 rounded-3xl"></div>
            <div className="relative z-10 py-16">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="font-heading text-5xl font-bold mb-8 text-gradient-tricolor">
                  Relevance Today
                </h2>
                <div className="glass-card p-8 mb-12">
                  <p className="text-xl text-navy-blue leading-relaxed">
                    Independence Day is not just a historical commemoration—it's a call to action for every generation to
                    uphold the values of freedom, equality, and progress that our ancestors fought for.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  <div className="glass-card p-8 card-hover independence-glow text-center">
                    <div className="w-20 h-20 bg-saffron/20 glass rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <Heart className="w-10 h-10 text-saffron icon-glow" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-4 text-gradient-saffron">Social Responsibility</h3>
                    <p className="text-navy-blue leading-relaxed">
                      Contributing to nation-building through education, innovation, and community service
                    </p>
                  </div>

                  <div className="glass-card p-8 card-hover independence-glow text-center">
                    <div className="w-20 h-20 bg-independence-green/20 glass rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <Users className="w-10 h-10 text-independence-green icon-glow" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-4 text-gradient-green">Unity in Diversity</h3>
                    <p className="text-navy-blue leading-relaxed">
                      Celebrating our multicultural heritage while working towards common goals
                    </p>
                  </div>

                  <div className="glass-card p-8 card-hover independence-glow text-center">
                    <div className="w-20 h-20 bg-golden-yellow/20 glass rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <Flag className="w-10 h-10 text-golden-yellow icon-glow animate-wave" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-4 text-gradient-tricolor">Global Leadership</h3>
                    <p className="text-navy-blue leading-relaxed">
                      Representing India's values and achievements on the world stage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Engagement Section */}
          <section className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-5xl font-bold mb-8">
                How Do You Celebrate{" "}
                <span className="text-gradient-tricolor">Freedom</span>?
              </h2>
              <div className="glass-card p-10 mb-10 independence-glow">
                <p className="text-xl text-navy-blue leading-relaxed mb-8">
                  As university students, you are the future leaders of India. How will you honor the legacy of our freedom
                  fighters and contribute to the nation's continued growth?
                </p>

                <div className="bg-freedom-gradient p-8 rounded-2xl glass mb-8">
                  <h3 className="font-heading text-2xl font-bold mb-6 text-pure-white">Reflect and Act</h3>
                  <p className="text-pure-white mb-8 text-lg leading-relaxed">
                    Consider how you can embody the spirit of independence in your daily life, studies, and future career.
                    Share your thoughts and commitments with your peers and community.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    <Badge className="badge-independence text-lg px-6 py-3 card-hover">Education Excellence</Badge>
                    <Badge className="badge-independence text-lg px-6 py-3 card-hover">Social Service</Badge>
                    <Badge className="badge-independence text-lg px-6 py-3 card-hover">Innovation</Badge>
                    <Badge className="badge-independence text-lg px-6 py-3 card-hover">Cultural Preservation</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-gradient relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Flag className="w-16 h-16 mx-auto mb-6 text-golden-yellow icon-glow animate-wave" />
          <div className="glass-card p-8 mb-8">
            <p className="text-2xl mb-6 text-pure-white font-heading italic">
              "Freedom is not worth having if it does not include the freedom to make mistakes."
            </p>
            <p className="text-golden-yellow text-lg font-semibold">— Mahatma Gandhi</p>
          </div>
          <div className="pt-8 border-t border-golden-yellow/30">
            <p className="text-lg text-pure-white">
              Celebrating <span className="text-gradient-tricolor font-bold">77 years</span> of independence • 
              <span className="text-saffron font-bold"> Jai Hind</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}