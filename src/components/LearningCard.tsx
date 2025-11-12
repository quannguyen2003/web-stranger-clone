import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface LearningCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText?: string;
}

const LearningCard = ({ icon, title, description, buttonText = "Learn now" }: LearningCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">{icon}</div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          </div>
          <Button variant="default" size="sm" className="flex-shrink-0">
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningCard;
