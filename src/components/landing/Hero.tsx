import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const easeExpo = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeExpo }}
          >
            <div className="compliance-badge mx-auto mb-8 w-fit">
              <Shield className="h-3.5 w-3.5" />
              GDPR-Native Infrastructure
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: easeExpo }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground mb-6"
          >
            Stop paying a success tax.{" "}
            <span className="italic">Start owning your data.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: easeExpo }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The newsletter platform built for EU creators. GDPR compliance from day one,
            zero revenue share, and your subscribers stay yours—legally and technically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: easeExpo }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button size="lg" className="rounded-md px-8 gap-2">
              Start for Free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-md px-8">
              See Pricing
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeExpo }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "99.9%", label: "EU-only routing" },
              { value: "0%", label: "Revenue share" },
              { value: "€0.00", label: "Hidden fees" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold tabular-nums text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
