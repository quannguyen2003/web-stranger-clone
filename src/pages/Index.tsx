import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearningCard from "@/components/LearningCard";
import BootcampCard from "@/components/BootcampCard";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import articleConsensus from "@/assets/article-consensus.jpg";
import articleSharded from "@/assets/article-sharded.jpg";
import articleTanssi from "@/assets/article-tanssi.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-6 py-16">
          <h1 className="text-5xl font-bold mb-12">Learn Polkadot Development</h1>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Bootcamp Feature */}
            <BootcampCard />
            
            {/* Learning Resources */}
            <div className="space-y-6">
              <LearningCard
                icon={
                  <div className="w-10 h-10 flex items-center justify-center text-2xl">
                    🦀
                  </div>
                }
                title="Learn Rust"
                description="Educational resources aggregated by the OpenGuild Community. Discover to expand your knowledge about blockchain and Polkadot."
              />
              
              <LearningCard
                icon={
                  <div className="w-10 h-10 flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  </div>
                }
                title="Learn Polkadot SDK"
                description="Educational resources aggregated by the OpenGuild Community. Discover to expand your knowledge about blockchain and Polkadot."
              />
              
              <LearningCard
                icon={
                  <div className="w-10 h-10 flex items-center justify-center font-bold text-primary text-xl">
                    ink!
                  </div>
                }
                title="Learn ink!"
                description="Educational resources aggregated by the OpenGuild Community. Discover to expand your knowledge about blockchain and Polkadot."
              />
            </div>
          </div>
          
          {/* Ecosystem Database */}
          <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center text-3xl flex-shrink-0">
                  👜
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Ecosystem Educational Database</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Educational resources aggregated by the OpenGuild Community. Discover to expand your knowledge about blockchain and Polkadot.
                  </p>
                </div>
              </div>
              <Button variant="default" size="lg" className="flex-shrink-0">
                Discover the database
              </Button>
            </div>
          </div>
        </section>
        
        {/* Technical Articles Section */}
        <section className="container px-6 py-16">
          <h2 className="text-4xl font-bold mb-12">Technical Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard
              image={articleConsensus}
              title="Relaychain Hybrid Consensus"
              description="Learning about hybrid consensus in Relaychain and why it is important to the Polkadot protocol?"
            />
            
            <ArticleCard
              image={articleSharded}
              title="Breakdown the sharded network design of Polkadot"
              description="Discover deeper into how Polkadot is designed to be a fragmented network, or we can say a multi-chain, multi-sharded network as well."
            />
            
            <ArticleCard
              image={articleTanssi}
              title="Breakdown the Tanssi network architecture"
              description="Discover deeper into how Tanssi network powers AppChain deployment with their infrastructure."
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
