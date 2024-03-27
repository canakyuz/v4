import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        cyan: "border-transparent text-cyan bg-cyan_bg",
        ruby: "border-transparent text-ruby bg-ruby_bg",
        amber: "border-transparent text-amber bg-amber_bg",
        jadge: "border-transparent text-jadge bg-jadge_bg",
        // Diğer etiketler buraya eklenebilir

      },
    },
    defaultVariants: { variant: "amber" }, // defaultVariants tipi düzeltildi
  }
);

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> { }

const Badge: React.FC<BadgeProps> = ({ className, variant = "ruby", ...props }) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
};

export { Badge, badgeVariants };
