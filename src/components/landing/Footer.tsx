import { Shield } from "lucide-react";

const links = {
  Product: ["Features", "Pricing", "Changelog", "Documentation"],
  Legal: ["Privacy Policy", "Terms of Service", "DPA Template", "Cookie Policy"],
  Company: ["About", "Blog", "Careers", "Contact"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-foreground" />
              <span className="font-semibold text-foreground">SubsBase</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              GDPR-native newsletter infrastructure for EU creators and publishers.
            </p>
            <div className="compliance-badge mt-4">
              <Shield className="h-3 w-3" />
              GDPR Compliant
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 SubsBase. All data processed exclusively within the EU.
          </p>
          <p className="text-xs text-muted-foreground">
            Trusted by 450+ EU-based journalists and creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
