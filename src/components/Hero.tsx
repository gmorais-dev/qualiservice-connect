
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  const benefits = [
    "Acesse serviços qualificados",
    "Pagamento 100% seguro",
    "Atendimento garantido"
  ];
  
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8 animate-fade-in">
            <span className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
              A plataforma que conecta pessoas e serviços
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Conectando <span className="text-primary">necessidades</span> a <span className="text-primary">soluções</span> qualificadas
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Uma plataforma intuitiva e segura que conecta pessoas que precisam de serviços a prestadores qualificados e confiáveis. Tudo em um só lugar.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 animate-slide-up stagger-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="sm:px-8">
                Buscar Serviços
              </Button>
              <Button size="lg" variant="outline" className="sm:px-8">
                Oferecer Serviços
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl animate-float">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-blue-600 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216')] bg-cover bg-center mix-blend-overlay opacity-50" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass rounded-lg p-6 max-w-xs mx-auto text-center text-white">
                      <h3 className="font-semibold text-xl mb-2">Encontre os melhores profissionais</h3>
                      <p className="text-sm opacity-90">Conectamos você aos melhores serviços com apenas alguns cliques</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg blur-xl animate-pulse-light"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
