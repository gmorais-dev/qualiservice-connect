
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, ThumbsUp, Filter, Banknote, Medal, Clock } from 'lucide-react';

const Differentiators = () => {
  const differentiators = [
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Verificação Avançada",
      description: "Todos os prestadores passam por um rigoroso processo de verificação de identidade, antecedentes e qualificações profissionais, garantindo máxima segurança.",
      badge: "Segurança"
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-primary" />,
      title: "Avaliações Detalhadas",
      description: "Sistema de avaliação multidimensional que considera diversos aspectos do serviço, como pontualidade, qualidade, atendimento e preço justo.",
      badge: "Transparência"
    },
    {
      icon: <Filter className="h-12 w-12 text-primary" />,
      title: "Filtragem Inteligente",
      description: "Algoritmo de correspondência que conecta usuários a prestadores com base em preferências, necessidades específicas e histórico de serviços.",
      badge: "Personalização"
    },
    {
      icon: <Banknote className="h-12 w-12 text-primary" />,
      title: "Proteção Financeira",
      description: "Sistema de garantia que protege tanto usuários quanto prestadores em todas as transações, com mediação de conflitos quando necessário.",
      badge: "Confiabilidade"
    },
    {
      icon: <Medal className="h-12 w-12 text-primary" />,
      title: "Programa de Excelência",
      description: "Reconhecimento e benefícios exclusivos para prestadores que mantêm consistentemente altos padrões de qualidade nos serviços.",
      badge: "Qualidade"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Atendimento Prioritário",
      description: "Categoria especial para serviços urgentes, com prestadores disponíveis para atendimento em prazos reduzidos.",
      badge: "Eficiência"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-white to-secondary/30 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
            Diferenciais competitivos
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Por que escolher o QualiService?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nossa plataforma se destaca por oferecer recursos exclusivos que garantem uma experiência superior para todos os usuários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg animate-scale-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-2 bg-primary"></div>
              <CardContent className="pt-6">
                <Badge variant="outline" className="mb-4 text-xs font-medium text-primary border-primary/30 bg-primary/5">
                  {item.badge}
                </Badge>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
