import { AlertCircle } from "lucide-react";

export function Disclaimer() {
  return (
    <div className="border-t border-border bg-muted/30 px-4 py-2">
      <div className="flex items-center gap-2 max-w-4xl mx-auto text-xs text-muted-foreground">
        <AlertCircle className="h-4 w-4 shrink-0" />
        <span>
          This assessment is informational and not a medical diagnosis. Please consult a qualified healthcare professional for accurate evaluation.
        </span>
      </div>
    </div>
  );
}
