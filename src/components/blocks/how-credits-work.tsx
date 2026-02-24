import { Mail, Smartphone, Search, Target } from "lucide-react";

export function HowCreditsWork() {
  const creditItems = [
    {
      title: "Email",
      credits: "1 Credit",
      description: "Get verified work email of the prospect you want to reach out to.",
      icon: Mail,
    },
    {
      title: "Phone",
      credits: "1 Credit",
      description: "Get verified mobile phone number of the person you want to reach out to.",
      icon: Smartphone,
    },
    {
      title: "Reverse lookup",
      credits: "1 Credit",
      description: "Turn an email, work or personal, into a full person profile and company profile.",
      icon: Search,
    },
    {
      title: "Prospector search",
      credits: "5 Credits",
      description: "Search and find prospects matching your ideal customer profile criteria.",
      icon: Target,
    },
  ];

  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <div className="mb-12 text-center md:text-left">
          <h3 className="mb-4 text-foreground">How Credits Work</h3>
          <p className="text-muted-foreground max-w-2xl">
            Use your credits however you like. Need more? You can renew your subscription early or switch to a higher-volume plan with a lower price per credit.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {creditItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <item.icon className="h-6 w-6 text-primary" />
                  <h5>{item.title}</h5>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1">
                  <span className="text-sm font-semibold text-primary">
                    {item.credits}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
