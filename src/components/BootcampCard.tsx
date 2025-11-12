import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bootcampBanner from "@/assets/bootcamp-banner.jpg";

const BootcampCard = () => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-[2/1] overflow-hidden">
          <img 
            src={bootcampBanner} 
            alt="Open Polkadot Bootcamp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold">Open Polkadot Bootcamp</h3>
          <Button variant="default" size="default">
            Learn now
          </Button>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Open Polkadot Bootcamp, created by OpenGuild Labs, is designed to educate learners on all aspects of the Polkadot protocol and development within the Polkadot ecosystem.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BootcampCard;
