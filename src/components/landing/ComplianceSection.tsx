import { motion } from "framer-motion";
import { Shield, Server, FileCheck, Lock } from "lucide-react";

const easeExpo = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    icon: Server,
    title: "EU-Only Infrastructure",
    description: "All data processed and stored exclusively within EU jurisdictions. No US cloud providers in the chain.",
  },
  {
    icon: FileCheck,
    title: "Auto-Generated DPA",
    description: "Localized Data Processing Agreements generated on demand. Digitally signed with tamper-proof audit trails.",
  },
  {
    icon: Lock,
    title: "Consent Management",
    description: "Double opt-in, granular consent tracking, and automated right-to-erasure workflows. All logged, all verifiable.",
  },
  {
    icon: Shield,
    title: "Compliance Dashboard",
    description: "Real-time GDPR health score. See your consent coverage, DPA status, and data routing at a glance.",
  },
];

export function ComplianceSection() {
  return (
    <section id="compliance" className="section-padding bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: easeExpo }}
          className="text-center mb-16"
        >
          <div className="compliance-badge mx-auto mb-6 w-fit">
            <Shield className="h-3.5 w-3.5" />
            GDPR Valid
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            Compliance is not a feature.
            <br />
            <span className="italic">It's the architecture.</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Built from the ground up to meet EU data protection requirements.
            Not bolted on. Not optional. Structural.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: easeExpo }}
              className="rounded-xl p-8 border border-primary-foreground/10 bg-primary-foreground/5"
            >
              <item.icon className="h-6 w-6 text-accent-green mb-4" />
              <h3 className="text-base font-semibold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
