import { motion } from "framer-motion";
import { Shield, Users, BarChart3, FileText, Mail, Code2 } from "lucide-react";

const easeExpo = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    icon: Shield,
    title: "GDPR Compliance Built-In",
    description: "Automatic consent tracking, data processing agreements, and EU-only data routing. No configuration required.",
  },
  {
    icon: Users,
    title: "Subscriber Management",
    description: "Import, segment, and manage your audience with full audit trails. Every consent is logged and verifiable.",
  },
  {
    icon: Mail,
    title: "Email Campaigns",
    description: "Distraction-free editor with GDPR pre-flight checks. Every send is verified for compliance before delivery.",
  },
  {
    icon: FileText,
    title: "Auto-Generated DPA",
    description: "Generate localized Data Processing Agreements in seconds. Digitally signed and stored with tamper-proof hashing.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track opens, clicks, and growth—all processed on EU infrastructure. No third-party tracking scripts.",
  },
  {
    icon: Code2,
    title: "Embed Forms",
    description: "GDPR-compliant signup forms with double opt-in. Drop them anywhere with a single line of code.",
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: easeExpo }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Infrastructure, not features.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to run a professional newsletter—with legal compliance
            as a structural guarantee, not an afterthought.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: easeExpo }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
