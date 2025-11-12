import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
}

const ArticleCard = ({ image, title, description }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-900 to-purple-950">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-lg font-bold">{title}</h3>
          <Button variant="default" size="sm">
            Learn more
          </Button>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
