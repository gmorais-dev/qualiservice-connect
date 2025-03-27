
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Shield, Zap, Compass, CreditCard, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Busca Simplificada",
      description: "Encontre o serviço que precisa em poucos cliques. Nossa interface intuitiva torna a busca rápida e eficiente."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Prestadores Verificados",
      description: "Todos os prestadores passam por um rigoroso processo de verificação para garantir qualidade e segurança."
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Avaliações Transparentes",
      description: "Avaliações reais de outros usuários ajudam você a escolher os melhores profissionais para suas necessidades."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Pagamento Seguro",
      description: "Sistema de pagamento protegido que só libera o valor após sua aprovação do serviço realizado."
    },
    {
      icon: <Compass className="h-10 w-10 text-primary" />,
      title: "Geolocalização",
      description: "Encontre prestadores próximos à sua localização, economizando tempo e recursos."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Serviços de Emergência",
      description: "Opções expressas para atendimentos urgentes, quando você não pode esperar."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
            Como funciona
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Soluções simples para todas as suas necessidades
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            O QualiService foi projetado para tornar a contratação de serviços um processo simples, transparente e seguro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/40 bg-card/60 backdrop-blur-sm animate-scale-in transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
