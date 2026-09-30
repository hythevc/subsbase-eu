import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const easeExpo = [0.16, 1, 0.3, 1] as const;

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "For getting started",
    subscribers: "500 subscribers",
    features: [
      "500 subscribers",
      "1,000 emails/month",
      "Basic analytics",
      "GDPR compliance included",
      "EU data hosting",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "€15",
    period: "/month",
    description: "For growing creators",
    subscribers: "2,500 subscribers",
    features: [
      "2,500 subscribers",
      "Unlimited emails",
      "Custom domain",
      "Auto-generated DPA",
      "Embed forms",
      "Priority support",
    ],
    cta: "Start Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€29",
    period: "/month",
    description: "For professional publishers",
    subscribers: "10,000 subscribers",
    features: [
      "10,000 subscribers",
      "Unlimited emails",
      "Advanced analytics",
      "API access",
      "Custom branding",
      "Consent audit logs",
      "Dedicated IP",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "€79",
    period: "/month",
    description: "For media companies",
    subscribers: "50,000 subscribers",
    features: [
      "50,000 subscribers",
      "Unlimited emails",
      "Multi-user access",
      "Webhook integrations",
      "SLA guarantee",
      "Dedicated account manager",
      "Custom DPA templates",
    ],
    cta: "Start Scale",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: easeExpo }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Flat fee. No surprises.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            While Substack takes 10% of your revenue forever, SubsBase charges a
            predictable flat fee. Your success shouldn't cost you more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: easeExpo }}
              className={`rounded-xl p-6 border flex flex-col ${
                plan.highlighted
                  ? "border-foreground bg-foreground text-primary-foreground shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              <div className="mb-6">
                <div className={`text-sm font-medium mb-2 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tabular-nums">{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-accent-green" : "text-accent-green"}`} />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full rounded-md"
                variant={plan.highlighted ? "secondary" : "default"}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
